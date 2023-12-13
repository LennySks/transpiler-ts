import * as antlr4 from "antlr4";
import MyLanguageLexer from "./generated/MyLanguageLexer";
import MyLanguageParser from "./generated/MyLanguageParser";
import Visitor from "./Visitor";

function parseSourceCode(input: string) {
  const chars = new antlr4.InputStream(input);
  const lexer = new MyLanguageParser(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MyLanguageParser(tokens);
  const context = parser.classDeclaration();
  console.log(context.toStringTree());
  //   parser.buildParseTrees = true;
  //   const tree = parser.();
  const visitor = new Visitor();
  visitor.visitClassDeclaration(context);
}
