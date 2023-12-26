import antlr4 from 'antlr4'
import Visitor from '../../src/ts/Visitor' // Your generated visitor class
import MyLanguageLexer from '../../src/ts/generated/MyLanguageLexer' // Update the path accordingly
import MyLanguageParser from '../../src/ts/generated/MyLanguageParser' // Update the path accordingly

export function parseSourceCode(input: string){
    const chars = new antlr4.CharStream(input)
    const lexer = new MyLanguageLexer(chars)
    const tokenStream = new antlr4.CommonTokenStream(lexer)
    const parser = new MyLanguageParser(tokenStream)
    const tree = parser.classDeclaration()
    const visitor = new Visitor()
    const result = visitor.visit(tree)
    console.log(result)
}