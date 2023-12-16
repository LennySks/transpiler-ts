import { ClassDeclarationContext } from "./generated/MyLanguageParser";
import MyLanguageVisitor from "./generated/MyLanguageVisitor";
class Visitor extends MyLanguageVisitor<string> {
  visitClassDeclaration = (ctx: ClassDeclarationContext): string => {
    console.log("visitClassDeclaration");
    return ctx.getText();
  };
}
