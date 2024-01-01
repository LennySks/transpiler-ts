import antlr4 from 'antlr4'
import MyLanguageLexer from './generated/MyLanguageLexer' // Update the path accordingly
import MyLanguageParser from './generated/MyLanguageParser'
import Visitor from './Visitor' // Update the path accordingly

export function parseSourceCode(input: string): object {
    const chars = new antlr4.CharStream(input)
    const lexer = new MyLanguageLexer(chars)
    const tokenStream = new antlr4.CommonTokenStream(lexer)
    const parser = new MyLanguageParser(tokenStream)
    const tree = parser.root()
    const visitor = new Visitor()
    const result = visitor.visit(tree)
    return result
}