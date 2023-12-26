import {
    ClassDeclarationContext,
    FunctionDeclarationContext, FunctionInvocationContext,
    FunctionVarAssignmentContext, JsxContext, LiteralContext,
    MemberDeclarationContext, ParameterContext,
    TypeContext,
    VariableDeclarationContext
} from './generated/MyLanguageParser'
import MyLanguageVisitor from './generated/MyLanguageVisitor'
export default class Visitor extends MyLanguageVisitor<string> {
    visitClassDeclaration = (ctx: ClassDeclarationContext): string => {
        console.log('Visiting Class Declaration')

        const className = ctx.ID().getText()
        const members = this.visitChildren(ctx)
        const jsCode = `class ${className} {${members}}`

        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitMemberDeclaration = (ctx: MemberDeclarationContext): string => {
        console.log('Visiting Member Declaration')

        let memberCode = ''

        if(ctx.variableDeclaration()) {
            memberCode = this.visitVariableDeclaration(ctx.variableDeclaration())
        }
        else if(ctx.functionDeclaration()) {
            memberCode = this.visitFunctionDeclaration(ctx.functionDeclaration())
        }
        else if(ctx.functionInvocation()) {
            memberCode = this.visitFunctionInvocation(ctx.functionInvocation())
        }
        else if (ctx.jsx()) {
            memberCode = this.visitJsx(ctx.jsx())
        }
        else{
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
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionVarAssignment = (ctx: FunctionVarAssignmentContext): string => {
        console.log('Visiting Function Variable Assignment')

        const variableName = ctx.ID().getText()
        const expression = ctx.expression()?.getText() || 'undefined'
        const jsCode = `${variableName} = ${expression};`
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): string => {
        console.log('Visiting Function Declaration')

        const functionName = ctx.ID().getText()

        let parameters = ''
        if (ctx.parameterList()) {
            const parameterContexts = ctx.parameterList().getTypedRuleContexts(ParameterContext)
            parameters = parameterContexts.map(paramCtx => this.visitParameter(paramCtx)).join(', ')
        }
        let body  = ''

        const variableDeclarations = ctx.getTypedRuleContexts(VariableDeclarationContext)
        for (const variableDeclaration of variableDeclarations) {
            body += this.visitVariableDeclaration(variableDeclaration)
        }

        const functionVarAssignments = ctx.getTypedRuleContexts(FunctionVarAssignmentContext)
        for (const functionVarAssignment of functionVarAssignments) {
            body += this.visitFunctionVarAssignment(functionVarAssignment)
        }

        const functionInvocations = ctx.getTypedRuleContexts(FunctionInvocationContext)
        for (const functionInvocation of functionInvocations) {
            body += this.visitFunctionInvocation(functionInvocation)
        }

        const jsxs = ctx.getTypedRuleContexts(JsxContext)
        for (const jsx of jsxs) {
            body += this.visitJsx(jsx)
        }

        const jsCode = `function ${functionName}(${parameters}) {${body}}`
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitFunctionInvocation = (ctx: FunctionInvocationContext): string => {
        console.log('Visiting Function Invocation')

        const functionName = ctx.ID().getText()
        const parameters = ctx.argumentList()?.getText() || ''
        const jsCode = `${functionName}(${parameters});`
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitParameter = (ctx: ParameterContext): string => {
        console.log('Visiting Parameter')

        const parameterName = ctx.ID().getText()
        const typeContext: TypeContext | undefined = ctx.type_()
        const type = typeContext ? typeContext.getText() : 'any'
        const jsCode = `${type} ${parameterName}`
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitJsx = (ctx: JsxContext): string => {
        console.log('Visiting JSX')

        const openingTagName = ctx.ID(0)
        const closingTagName = ctx.ID(1)
        let children = ''

        const jsxContents = ctx.getTypedRuleContexts(JsxContext)
        for (const jsxContent of jsxContents) {
            children += this.visitJsx(jsxContent)
        }

        const literals = ctx.getTypedRuleContexts(LiteralContext)
        for (const literal of literals) {
            children += this.visit(literal) + ' '
        }

        const jsCode = `<${openingTagName}>${children.trim()}</${closingTagName}>`
        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }
}
