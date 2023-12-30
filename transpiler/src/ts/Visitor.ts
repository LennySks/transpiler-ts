import {
    ExpressionContext,
    FunctionDeclarationContext,
    FunctionInvocationContext,
    FunctionVarAssignmentContext,
    JsxCloseContext,
    JsxContext,
    JsxOpenContext,
    LiteralContext,
    MemberDeclarationContext,
    ParameterContext,
    ReturnStatementContext,
    ReturnTypeContext,
    RootContext,
    VariableDeclarationContext,
    VarTypeContext
} from './generated/MyLanguageParser'
import MyLanguageVisitor from './generated/MyLanguageVisitor'
import { TerminalNode } from 'antlr4'

export default class Visitor extends MyLanguageVisitor<string> {
    visitRoot = (ctx: RootContext): string => {
        const childrenResults = this.visitChildren(ctx)
        if (Array.isArray(childrenResults)) {
            return childrenResults.join('\n')
        } else {
            return childrenResults
        }
    }

    visitMemberDeclaration = (ctx: MemberDeclarationContext): string => {
        console.log('Visiting Member Declaration')

        let memberCode = ''

        if (ctx.variableDeclaration()) {
            memberCode = this.visitVariableDeclaration(ctx.variableDeclaration())
        } else if (ctx.functionDeclaration()) {
            memberCode = this.visitFunctionDeclaration(ctx.functionDeclaration())
        } else if (ctx.functionInvocation()) {
            memberCode = this.visitFunctionInvocation(ctx.functionInvocation())
        } else if (ctx.jsx()) {
            memberCode = this.visitJsx(ctx.jsx())
        } else if (ctx.returnStatement()) {
            memberCode = this.visitReturnStatement(ctx.returnStatement())
        } else if (ctx.functionVarAssignment()) {
            memberCode = this.visitFunctionVarAssignment(ctx.functionVarAssignment())
        } else {
            throw new Error('Member declaration not found')
        }
        return memberCode
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        console.log('Visiting Variable Declaration')

        const varTypeContext: VarTypeContext | undefined = ctx.varType()
        let varType = 'var' // default to 'var' if varTypeContext is undefined
        if (varTypeContext) {
            varType = varTypeContext.getText()
            console.log('Type:', varType)
        }

        const variableName = ctx.ID().getText()
        const literalContext = ctx.literal()
        const literal = literalContext ? literalContext.getText() : ''
        const jsCode = `${varType} ${variableName} = ${literal};`
        return jsCode
    }

    visitFunctionVarAssignment = (ctx: FunctionVarAssignmentContext): string => {
        console.log('Visiting Function Variable Assignment')

        const variableName = ctx.ID().getText()
        const expression = ctx.expression()?.getText() || 'undefined'
        const jsCode = `${variableName} = ${expression};`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): string => {
        console.log('Visiting Function Declaration')

        const functionName = ctx.ID().getText()

        let parameters = ''
        if (ctx.parameterList()) {
            const parameterContexts = ctx
                .parameterList()
                .getTypedRuleContexts(ParameterContext)
            parameters = parameterContexts
                .map((paramCtx) => this.visitParameter(paramCtx))
                .join(', ')
        }
        let body = ''

        const memberDeclarations = ctx.getTypedRuleContexts(
            MemberDeclarationContext,
        )
        for (const memberDeclaration of memberDeclarations) {
            body += this.visitMemberDeclaration(memberDeclaration)
        }
        const jsCode = `function ${functionName}(${parameters}) {${body}}`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionInvocation = (ctx: FunctionInvocationContext): string => {
        console.log('Visiting Function Invocation')

        // Get the list of IDs
        const ids: TerminalNode[] = ctx.ID_list()

        let functionName = ''

        if (ids.length === 2) {
            // If there are two IDs, the first one is the object or module name
            const objectName = ids[0].getText()
            functionName = `${objectName}.${ids[1].getText()}`
        } else {
            // If there's only one ID, it's the function name
            functionName = ids[0].getText()
        }

        const parameters = ctx.argumentList()?.getText() || ''
        const jsCode = `${functionName}(${parameters});`
        return jsCode
    }

    visitParameter = (ctx: ParameterContext): string => {
        console.log('Visiting Parameter')

        const parameterName = ctx.ID().getText()
        const typeContext: ReturnTypeContext | undefined = ctx.returnType()
        const type = typeContext ? typeContext.getText() : 'any'
        const jsCode = `${parameterName}`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitID = (ctx: TerminalNode): string => {
        console.log('Visiting ID')
        return ctx.getText()
    }

    visitReturnStatement = (ctx: ReturnStatementContext): string => {
        console.log('Visiting Return Statement')

        let returnValue = ''

        if (ctx.expression()) {
            returnValue = this.visitExpression(ctx.expression())
        } else if (ctx.functionInvocation()) {
            returnValue = this.visitFunctionInvocation(ctx.functionInvocation())
        } else if (ctx.jsx()) {
            returnValue = this.visitJsx(ctx.jsx())
        } else if (ctx.ID()) {
            returnValue = ctx.ID().getText()
        }

        const jsCode = `return ${returnValue};`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitExpression = (ctx: ExpressionContext): string => {
        console.log('Visiting Expression')

        let expressionCode = ''

        const literalContext = ctx.literal()
        if (literalContext) {
            const numberToken = literalContext.NUMBER()
            const stringToken = literalContext.STRING()
            const booleanToken = literalContext.BOOLEAN()

            if (numberToken) {
                expressionCode = numberToken.getText()
            } else if (stringToken) {
                expressionCode = stringToken.getText()
            } else if (booleanToken) {
                expressionCode = booleanToken.getText()
            }
        } else if (ctx.ID()) {
            expressionCode = ctx.ID().getText()
        } else if (ctx.jsx()) {
            expressionCode = this.visitJsx(ctx.jsx())
        } else if (ctx instanceof ExpressionContext) {
            const expressionCount = ctx.expression_list().length
            for (let i = 0; i < expressionCount; i++) {
                const subExpression = this.visitExpression(ctx.expression(i))
                expressionCode += subExpression

                if (i < expressionCount - 1) {
                    expressionCode += ', '
                }
            }
        }
        return expressionCode
    }

    visitJsx = (ctx: JsxContext): string => {
        console.log('Visiting Jsx')

        let content = ''
        let tagName = ''
        let tagContent = ''
        let closingTagName = ''

        // Iterate over the children of the JsxContext
        const childCount = ctx.getChildCount()
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i)

            if (child instanceof JsxOpenContext) {
                tagName = child.ID().getText()
                tagContent = `'<${tagName}>'`
            } else if (child instanceof TerminalNode) {
                const idContent = `'${this.visitID(child)}'`
                if (closingTagName) {
                    content += `,${idContent}`
                    closingTagName = ''
                } else {
                    tagContent += ` + ${idContent}`
                    if (
                        i < childCount - 1 &&
            !(ctx.getChild(i + 1) instanceof JsxCloseContext)
                    ) {
                        tagContent += ' + \' \''
                    }
                }
            } else if (child instanceof JsxContext) {
                tagContent += ` + ${this.visitJsx(child)}`
            } else if (child instanceof JsxCloseContext) {
                closingTagName = child.ID().getText()
                if (tagName !== closingTagName) {
                    throw new Error(
                        `Mismatched tags: opening tag is <${tagName}> but closing tag is </${closingTagName}>`,
                    )
                }
                if (i < childCount - 1) {
                    content += `${tagContent} + ' '`
                } else {
                    content += tagContent
                }
                tagContent = ''
            } else if (
                child instanceof TerminalNode &&
        child.getText().trim() === ''
            ) {
                content += '\' \''
            }
        }

        const jsCode = content
        return jsCode
    }

    visitLiteral = (ctx: LiteralContext): string => {
        console.log('Visiting Literal')
        return ctx.getText()
    }
}
