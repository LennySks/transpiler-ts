import {
    ClassDeclarationContext,
    FunctionDeclarationContext,
    FunctionVarAssignmentContext,
    MemberDeclarationContext,
    TypeContext,
    VariableDeclarationContext
} from './generated/MyLanguageParser'
import MyLanguageVisitor from './generated/MyLanguageVisitor'
export default class Visitor extends MyLanguageVisitor<string> {
    visitClassDeclaration = (ctx: ClassDeclarationContext): string => {
        console.log('Visiting Class Declaration')
        // return this.visitChildren(ctx)
        const className = ctx.ID().getText()
        const jsCode = `class ${className} {\n  // Your class members go here\n}`

        console.log('Generated JavaScript code:', jsCode)
        return jsCode
    }

    visitMemberDeclaration = (ctx: MemberDeclarationContext): string => {
        console.log('Visiting Member Declaration')

        if(ctx.variableDeclaration()) {
            return this.visitVariableDeclaration(ctx.variableDeclaration())
        }
        else if(ctx.functionDeclaration()) {
            return this.visitFunctionDeclaration(ctx.functionDeclaration())
        }
        else if(ctx.functionInvocation()) {
            return this.visitFunctionInvocation(ctx.functionInvocation())
        }
        else if (ctx.jsx()) {
            return this.visitJsx(ctx.jsx())
        }
        else{
            throw new Error('Member declaration not found')
        }

    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        console.log('Visiting Variable Declaration')
        // Access the type context and handle type-specific logic if needed
        const typeContext: TypeContext | undefined = ctx.type_()
        if (typeContext) {
            console.log('Type:', typeContext.getText())
        }

        const variableName = ctx.ID().getText()
        const expression = ctx.expression()?.getText() || 'undefined'
        const jsCode = `const ${variableName} = ${expression};`
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
}
