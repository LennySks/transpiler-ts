import {
    FunctionDeclarationContext,
    FunctionInvocationContext,
    FunctionVarAssignmentContext,
    JsxCloseContext,
    JsxContext,
    JsxOpenContext,
    LiteralContext,
    MemberDeclarationContext,
    ParameterContext,
    RootContext,
    TypeContext,
    VariableDeclarationContext
} from './generated/MyLanguageParser'
import MyLanguageVisitor from './generated/MyLanguageVisitor'
import { TerminalNode } from 'antlr4'

export default class Visitor extends MyLanguageVisitor<string> {
    visitRoot = (ctx: RootContext): string => {
        console.log('Visiting Root Declaration')
        const members = this.visitChildren(ctx)
        // const jsCode = `class ${className} {${members}}`

        // console.log('Generated JavaScript code:', jsCode)
        // return jsCode
        return members
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
        } else {
            throw new Error('Member declaration not found')
        }
        return memberCode
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        console.log('Visiting Variable Declaration')

        const typeContext: TypeContext | undefined = ctx.type_()
        if (typeContext) {
            console.log('Type:', typeContext.getText())
        }

        const variableName = ctx.ID().getText()
        const literal = ctx.literal().getText() || ''
        const jsCode = `const ${variableName} = ${literal};`
        // console.log('Generated JavaScript code:', jsCode)
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

        const variableDeclarations = ctx.getTypedRuleContexts(
            VariableDeclarationContext,
        )
        for (const variableDeclaration of variableDeclarations) {
            body += this.visitVariableDeclaration(variableDeclaration)
        }

        const functionVarAssignments = ctx.getTypedRuleContexts(
            FunctionVarAssignmentContext,
        )
        for (const functionVarAssignment of functionVarAssignments) {
            body += this.visitFunctionVarAssignment(functionVarAssignment)
        }

        const functionInvocations = ctx.getTypedRuleContexts(
            FunctionInvocationContext,
        )
        for (const functionInvocation of functionInvocations) {
            body += this.visitFunctionInvocation(functionInvocation)
        }

        const jsxs = ctx.getTypedRuleContexts(JsxContext)
        for (const jsx of jsxs) {
            body += this.visitJsx(jsx)
        }

        const jsCode = `function ${functionName}(${parameters}) {${body}}`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionInvocation = (ctx: FunctionInvocationContext): string => {
        console.log('Visiting Function Invocation')

        const functionName = ctx.ID().getText()
        const parameters = ctx.argumentList()?.getText() || ''
        const jsCode = `${functionName}(${parameters});`
        return jsCode
    }

    visitParameter = (ctx: ParameterContext): string => {
        console.log('Visiting Parameter')

        const parameterName = ctx.ID().getText()
        const typeContext: TypeContext | undefined = ctx.type_()
        const type = typeContext ? typeContext.getText() : 'any'
        const jsCode = `${type} ${parameterName}`
        // console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitID = (ctx: TerminalNode): string => {
        console.log('Visiting ID')
        return ctx.getText()
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
                tagContent = `React.createElement('${tagName}', null, `
            } else if (child instanceof TerminalNode) {
                const idContent = `'${this.visitID(child)}'`
                if (closingTagName) {
                    content += `,${idContent}`
                    closingTagName = ''
                } else {
                    tagContent += idContent
                    if (
                        i < childCount - 1 &&
            !(ctx.getChild(i + 1) instanceof JsxCloseContext)
                    ) {
                        tagContent += ','
                    }
                }
            } else if (child instanceof JsxContext) {
                tagContent += `${this.visitJsx(child)}`
                if (
                    i < childCount - 1 &&
          !(ctx.getChild(i + 1) instanceof JsxCloseContext)
                ) {
                    tagContent += ','
                }
            } else if (child instanceof JsxCloseContext) {
                closingTagName = child.ID().getText()
                if (tagName !== closingTagName) {
                    throw new Error(
                        `Mismatched tags: opening tag is <${tagName}> but closing tag is </${closingTagName}>`,
                    )
                }
                tagContent += ')'
                if (i < childCount - 1) {
                    content += `${tagContent},`
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
