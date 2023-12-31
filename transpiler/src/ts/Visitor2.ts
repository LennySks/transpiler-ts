import {
    ExpressionContext,
    FunctionDeclarationContext,
    FunctionInvocationContext,
    FunctionVarAssignmentContext,
    JsxContext,
    JsxOpenContext,
    MemberDeclarationContext,
    ObjectPropertyAccessContext,
    ParameterContext,
    ReturnStatementContext,
    ReturnTypeContext,
    RootContext,
    VariableDeclarationContext
} from './generated/MyLanguageParser'
import MyLanguageVisitor from './generated/MyLanguageVisitor'
import { TerminalNode } from 'antlr4'
import {
    ASTNode,
    ExpressionNode,
    functionCall,
    FunctionDeclarationNode,
    FunctionInvocationNode,
    FunctionVarAssignmentNode,
    IdentifierNode,
    JsxNode,
    LiteralNode,
    MemberDeclarationNode,
    ObjectPropertyAccessNode,
    ParameterNode,
    ReturnStatementNode,
    returnType,
    RootNode,
    VariableDeclarationNode,
    VarType
} from './AST'

export default class Visitor2 extends MyLanguageVisitor<ASTNode> {
    visitRoot = (ctx: RootContext): RootNode => {
        const children = this.visitChildren(ctx)
        const unknownMembers: unknown = children
        if (Array.isArray(unknownMembers)) {
            const members = unknownMembers.map(
                (item) => item as MemberDeclarationNode,
            )
            return { type: 'RootNode', members }
        }
        throw new Error('Invalid structure for RootNode')
    }

    visitMemberDeclaration = (
        ctx: MemberDeclarationContext,
    ): MemberDeclarationNode => {
        let member: MemberDeclarationNode | undefined
        if (ctx.variableDeclaration()) {
            member = this.visitVariableDeclaration(ctx.variableDeclaration())
        } else if (ctx.functionDeclaration()) {
            member = this.visitFunctionDeclaration(ctx.functionDeclaration())
        } else if (ctx.functionInvocation()) {
            member = this.visitFunctionInvocation(ctx.functionInvocation())
        } else if (ctx.jsx()) {
            member = this.visitJsx(ctx.jsx())
        } else if (ctx.returnStatement()) {
            member = this.visitReturnStatement(ctx.returnStatement())
        } else if (ctx.functionVarAssignment()) {
            member = this.visitFunctionVarAssignment(ctx.functionVarAssignment())
        } else {
            throw new Error('Member declaration not found')
        }
        return member
    }

    visitVariableDeclaration = (
        ctx: VariableDeclarationContext,
    ): VariableDeclarationNode => {
        const varTypeContext = ctx.varType()
        const varType: VarType = varTypeContext
            ? (varTypeContext.getText() as VarType)
            : 'var'

        const ids = ctx.ID_list()
        const variableName: IdentifierNode = {
            type: 'IdentifierNode',
            value: ids[0].getText()
        }
        let value: LiteralNode | IdentifierNode | functionCall

        const literalContext = ctx.literal()
        const functionCallContext = ctx.functionInvocation()

        if (literalContext) {
            value = this.visitLiteral(literalContext)
        } else if (functionCallContext) {
            value = this.visitFunctionInvocation(functionCallContext)
        } else if (ids.length > 1) {
            value = { type: 'IdentifierNode', value: ids[1].getText() }
        }

        return {
            type: 'VariableDeclarationNode',
            varType,
            variableName,
            value
        }
    }

    visitFunctionVarAssignment = (
        ctx: FunctionVarAssignmentContext,
    ): FunctionVarAssignmentNode => {
        let variableName = ''
        let expression: ExpressionNode

        if (ctx.ID()) {
            variableName = ctx.ID().getText()
        } else if (ctx.objectPropertyAccess()) {
            variableName = this.visitObjectPropertyAccess(
                ctx.objectPropertyAccess(),
            ).properties.join('.')
        }

        if (ctx.expression()) {
            expression = this.visitExpression(ctx.expression())
        }

        const functionVarAssignmentNode: FunctionVarAssignmentNode = {
            type: 'FunctionVarAssignmentNode',
            variableName,
            expression
        }

        return functionVarAssignmentNode
    }

    visitObjectPropertyAccess = (
        ctx: ObjectPropertyAccessContext,
    ): ObjectPropertyAccessNode => {
        const properties = ctx.ID_list().map((id) => id.getText())

        return {
            type: 'ObjectPropertyAccessNode',
            properties
        }
    }

    visitFunctionDeclaration = (
        ctx: FunctionDeclarationContext,
    ): FunctionDeclarationNode => {
        const functionName = ctx.ID().getText()

        let parameters: ParameterNode[] = []
        if (ctx.parameterList()) {
            const parameterContexts = ctx
                .parameterList()
                .getTypedRuleContexts(ParameterContext)
            parameters = parameterContexts.map((paramCtx) =>
                this.visitParameter(paramCtx),
            )
        }

        const body: MemberDeclarationNode[] = []
        const memberDeclarations = ctx.getTypedRuleContexts(
            MemberDeclarationContext,
        )
        for (const memberDeclaration of memberDeclarations) {
            const member = this.visitMemberDeclaration(memberDeclaration)
            if (member) {
                body.push(member as MemberDeclarationNode)
            }
        }

        return {
            type: 'FunctionDeclarationNode',
            functionName,
            parameters,
            body
        }
    }

    visitFunctionInvocation = (
        ctx: FunctionInvocationContext,
    ): FunctionInvocationNode => {
        const ids: TerminalNode[] = ctx.ID_list()
        let functionName = ''

        if (ids.length === 2) {
            const objectName = ids[0].getText()
            functionName = `${objectName}.${ids[1].getText()}`
        } else {
            functionName = ids[0].getText()
        }

        const argumentsList: (LiteralNode | string)[] = []
        if (ctx.argumentList()) {
            const argumentContexts = ctx.argumentList().literal_list()
            argumentsList.push(
                ...argumentContexts.map((literalCtx) => this.visitLiteral(literalCtx)),
            )
        }

        return {
            type: 'FunctionInvocationNode',
            functionName,
            arguments: argumentsList
        }
    }

    visitParameter = (ctx: ParameterContext): ParameterNode => {
        const parameterName = ctx.ID().getText()
        const returnTypeContext: ReturnTypeContext | undefined = ctx.returnType()
        const returnType: returnType = returnTypeContext.getText() as returnType

        return {
            type: 'ParameterNode',
            parameterName,
            returnType
        }
    }

    visitID = (ctx: TerminalNode): string => {
        return ctx.getText()
    }

    visitExpression = (ctx: ExpressionContext): ExpressionNode => {
        let expression: ExpressionNode

        if (ctx.literal()) {
            expression = this.visitLiteral(ctx.literal())
        } else if (ctx.ID()) {
            expression = { type: 'IdentifierNode', value: ctx.ID().getText() }
        } else if (ctx.objectPropertyAccess()) {
            expression = this.visitObjectPropertyAccess(ctx.objectPropertyAccess())
        } else if (ctx.jsx()) {
            expression = this.visitJsx(ctx.jsx())
        } else if (ctx.expression()) {
            const child: ExpressionNode = this.visitExpression(ctx.expression())
            expression = { type: 'ExpressionGroupNode', child: child }
        }

        return expression
    }

    visitReturnStatement = (ctx: ReturnStatementContext): ReturnStatementNode => {
        let expression: FunctionInvocationNode | string | ExpressionNode

        if (ctx.expression()) {
            expression = this.visitExpression(ctx.expression())
        } else if (ctx.functionInvocation()) {
            expression = this.visitFunctionInvocation(ctx.functionInvocation())
        } else if (ctx.ID()) {
            expression = ctx.ID().getText()
        } else {
            throw new Error('Invalid return statement context')
        }

        return {
            type: 'ReturnStatementNode',
            expression
        }
    }

    visitJsx = (ctx: JsxContext): JsxNode => {
        let tagName = ''
        const children: (LiteralNode | JsxNode | string)[] = []

        // Iterate over the children of the JsxContext
        const childCount = ctx.getChildCount()
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i)

            if (child instanceof JsxOpenContext) {
                tagName = child.ID().getText()
            } else if (child instanceof TerminalNode) {
                children.push(this.visitID(child))
            } else if (child instanceof JsxContext) {
                children.push(this.visitJsx(child))
            }
        }

        return {
            type: 'JsxNode',
            openingElement: { type: 'JsxOpeningElementNode', tagName },
            closingElement: { type: 'JsxClosingElementNode', tagName },
            tagName,
            children
        }
    }

    visitLiteral = (ctx: any): LiteralNode => {
        let value: string | number | boolean
        let type: 'string' | 'number' | 'boolean'

        if (ctx.NUMBER()) {
            value = Number(ctx.NUMBER().getText())
            type = 'number'
        } else if (ctx.BOOLEAN()) {
            value = ctx.BOOLEAN().getText() === 'true'
            type = 'boolean'
        } else if (ctx.STRING()) {
            value = ctx.STRING().getText().slice(1, -1)
            type = 'string'
        } else {
            throw new Error('Invalid literal context')
        }

        return {
            type: type,
            value: value
        }
    }
}
