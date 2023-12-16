import * as antlr4 from "antlr4";
import MyLanguageLexer from "./generated/MyLanguageLexer";
import MyLanguageParser from "./generated/MyLanguageParser";

// import fs from 'fs'

export function parseSourceCode(input: string) {
  // const chars = new antlr4.InputStream(input);
  const chars = new antlr4.CharStream(input);
  const lexer = new MyLanguageLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MyLanguageParser(tokens);
  const context = parser.classDeclaration();
  console.log(context.toStringTree(parser.ruleNames, parser));
}

const sourceCode = `
class MyLanguage {
  int myNumber = 10;
  string myString = "Hello, world!";
  boolean myBoolean = true;

  function myFunction(int a, string b, boolean c) {
      myNumber = a;
      myString = b;
      myBoolean = c;
  }

  myFunction(20, "Goodbye, world!", false);

  <MyComponent>
      "This is a JSX component"
  </MyComponent>
}
`;
