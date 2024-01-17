import {
    ExpressionContext,
    FunctionDeclarationContext,
    FunctionInvocationContext,
    FunctionVarAssignmentContext,
    ImportStatementContext,
    JsxCloseContext,
    JsxContext,
    JsxOpenContext,
    LiteralContext,
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
    FunctionDeclarationNode,
    FunctionInvocationNode,
    FunctionVarAssignmentNode,
    IdentifierNode,
    JsxNode,
    LiteralNode,
    MemberDeclarationNode,
    NamespaceImportNode,
    ObjectPropertyAccessNode,
    ParameterNode,
    ReturnStatementNode,
    returnType,
    RootNode,
    VariableDeclarationNode,
    VarType
} from './AST'

export default class Visitor extends MyLanguageVisitor<ASTNode> {
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
        if (ctx.importStatement()) {
            member = this.visitImportStatement(ctx.importStatement())
        } else if (ctx.variableDeclaration()) {
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

    visitImportStatement = (ctx: ImportStatementContext): NamespaceImportNode => {
        const alias = ctx.ID().getText()
        const source = ctx.STRING().getText().slice(1, -1) // Remove quotes
        return {
            type: 'NamespaceImportNode',
            alias,
            source
        }
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
        let value: LiteralNode | IdentifierNode | FunctionInvocationNode

        const literalContext = ctx.literal()
        const functionCallContext = ctx.functionInvocation()

        if (literalContext) {
            value = this.visitLiteral(literalContext)
        } else if (functionCallContext) {
            const functionInvocation =
        this.visitFunctionInvocation(functionCallContext)
            value = {
                type: 'FunctionInvocationNode', // TODO: Fixed so it uses the correct type
                functionName: functionInvocation.functionName,
                arguments: functionInvocation.arguments
            }
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
            properties: properties
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

        const argumentsList: (LiteralNode | IdentifierNode)[] = []
        if (ctx.argumentList()) {
            const argumentContexts = ctx.argumentList().children
            for (const argumentContext of argumentContexts) {
                // Remove the commas that come by using argumentList().children (i get more children than just the arguments)
                if (argumentContext.getText() !== ',') {
                    if (argumentContext instanceof TerminalNode) {
                        argumentsList.push({
                            type: 'IdentifierNode',
                            value: argumentContext.getText()
                        })
                    } else {
                        argumentsList.push(this.visitLiteral(argumentContext))
                    }
                }
            }
        }

        return {
            type: 'FunctionInvocationNode',
            functionName: functionName,
            arguments: argumentsList
        }
    }

    visitParameter = (ctx: ParameterContext): ParameterNode => {
        const parameterName = ctx.ID().getText()
        const returnTypeContext: ReturnTypeContext | undefined = ctx.returnType()
        const returnType: returnType = returnTypeContext.getText() as returnType

        return {
            type: 'ParameterNode',
            parameterName: parameterName,
            returnType: returnType
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
        let openingTag = ''
        let closingTag
        const children: (LiteralNode | JsxNode | string)[] = []
        const childCount = ctx.getChildCount()
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i)

            if (child instanceof JsxOpenContext) {
                openingTag = child.ID().getText()
            } else if (child instanceof JsxCloseContext) {
                closingTag = child.ID().getText()
            } else if (child instanceof LiteralContext) {
                children.push(this.visitLiteral(child))
            } else if (child instanceof TerminalNode) {
                children.push(this.visitID(child))
            } else if (child instanceof JsxContext) {
                children.push(this.visitJsx(child))
            }
        }

        if (openingTag !== closingTag) {
            throw new Error(
                `JSX tags mismatch: <${closingTag}> does not match </${openingTag}>`,
            )
        }

        return {
            type: 'JsxNode',
            openingElement: { type: 'JsxOpeningElementNode', tagName: openingTag },
            closingElement: { type: 'JsxClosingElementNode', tagName: closingTag },
            tagName: openingTag,
            children
        }
    }

    visitLiteral = (ctx: any): LiteralNode => {
        if (ctx.NUMBER()) {
            return {
                type: 'number',
                value: Number(ctx.NUMBER().getText())
            }
        } else if (ctx.BOOLEAN()) {
            return {
                type: 'boolean',
                value: ctx.BOOLEAN().getText() === 'true'
            }
        } else if (ctx.STRING()) {
            return {
                type: 'string',
                value: ctx.STRING().getText().slice(1, -1)
            }
        } else {
            throw new Error('Invalid literal context')
        }
    }
}
