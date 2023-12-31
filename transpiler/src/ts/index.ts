import antlr4 from 'antlr4'
import MyLanguageLexer from '../../src/ts/generated/MyLanguageLexer' // Update the path accordingly
import MyLanguageParser from '../../src/ts/generated/MyLanguageParser'
import Visitor2 from './Visitor2' // Update the path accordingly

export function parseSourceCode(input: string): object {
    const chars = new antlr4.CharStream(input)
    const lexer = new MyLanguageLexer(chars)
    const tokenStream = new antlr4.CommonTokenStream(lexer)
    const parser = new MyLanguageParser(tokenStream)
    const tree = parser.root()
    const visitor = new Visitor2()
    const result = visitor.visit(tree)
    console.log(JSON.stringify(result, null, 2)) // This will format the output with 2 spaces of indentation
    return result
}
