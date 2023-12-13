import MyLanguageVisitor from "./generated/MyLanguageVisitor";

export default class Visitor extends MyLanguageVisitor<string> {
  visitClassDeclaration(ctx) {
    console.log("visitClassDeclaration");
    return super.visitClassDeclaration(ctx);
  }

  visitMemberDeclaration(ctx) {
    console.log("visitMemberDeclaration");
    return super.visitMemberDeclaration(ctx);
  }
}
