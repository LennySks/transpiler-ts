import {
  ClassDeclarationContext,
  MemberDeclarationContext,
  VariableDeclarationContext,
} from "./generated/MyLanguageParser";
import MyLanguageVisitor from "./generated/MyLanguageVisitor";
export default class Visitor extends MyLanguageVisitor<string> {
  visitClassDeclaration = (ctx: ClassDeclarationContext): string => {
    console.log("visitClassDeclaration");
    return this.visitChildren(ctx);
  };

  visitMemberDeclaration = (ctx: MemberDeclarationContext): string => {
    console.log("visitMemberDeclaration");
    return this.visitChildren(ctx);
  };

  visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
    console.log("visitVariableDeclaration");
    return this.visitChildren(ctx);
  };
}
