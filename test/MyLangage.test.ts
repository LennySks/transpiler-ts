import * as fs from "fs";
import * as path from "path";
import antlr4 from "antlr4";
import Visitor from "../src/ts/Visitor"; // Your generated visitor class
import MyLanguageLexer from "../src/ts/generated/MyLanguageLexer"; // Update the path accordingly
import MyLanguageParser from "../src/ts/generated/MyLanguageParser"; // Update the path accordingly

describe("MyLanguageVisitor", () => {
  test("should visit class declaration and log messages", () => {
    const input = fs.readFileSync(
      path.join(__dirname, "testFile.myLanguage"),
      "utf-8"
    ); // Replace with your test file path
    const chars = new antlr4.CharStream(input);
    const lexer = new MyLanguageLexer(chars);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MyLanguageParser(tokenStream);

    const tree = parser.classDeclaration(); // Assuming your entry point is classDeclaration

    const visitor = new Visitor();
    const result = visitor.visit(tree);

    // Add assertions based on your expected behavior
    console.log(result);
    // Add more assertions as needed
  });
});
