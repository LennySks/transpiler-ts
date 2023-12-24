import {
  ClassDeclarationContext,
  MemberDeclarationContext,
  TypeContext,
  VariableDeclarationContext,
} from "./generated/MyLanguageParser";
import MyLanguageVisitor from "./generated/MyLanguageVisitor";
export default class Visitor extends MyLanguageVisitor<string> {
  visitClassDeclaration = (ctx: ClassDeclarationContext): string => {
    console.log("Visiting Class Declaration");
    return this.visitChildren(ctx);
  };

  visitMemberDeclaration = (ctx: MemberDeclarationContext): string => {
    console.log("Visiting Member Declaration");
    return this.visitChildren(ctx);
  };

  visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
    console.log("Visiting Variable Declaration");
    // Access the type context and handle type-specific logic if needed
    const typeContext: TypeContext | undefined = ctx.type_();
    if (typeContext) {
      console.log("Type:", typeContext);
    }

    // Handle variable-specific logic if needed
    return this.visitChildren(ctx);
  };
}
