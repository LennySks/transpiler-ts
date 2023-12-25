// Generated from e://School//3//Programmeren 3//lsp-sample//src//g4//MyLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MyLanguageParser}.
 */
public interface MyLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterClassDeclaration(MyLanguageParser.ClassDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitClassDeclaration(MyLanguageParser.ClassDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#memberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterMemberDeclaration(MyLanguageParser.MemberDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#memberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitMemberDeclaration(MyLanguageParser.MemberDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(MyLanguageParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(MyLanguageParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(MyLanguageParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(MyLanguageParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(MyLanguageParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(MyLanguageParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#functionInvocation}.
	 * @param ctx the parse tree
	 */
	void enterFunctionInvocation(MyLanguageParser.FunctionInvocationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#functionInvocation}.
	 * @param ctx the parse tree
	 */
	void exitFunctionInvocation(MyLanguageParser.FunctionInvocationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#jsx}.
	 * @param ctx the parse tree
	 */
	void enterJsx(MyLanguageParser.JsxContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#jsx}.
	 * @param ctx the parse tree
	 */
	void exitJsx(MyLanguageParser.JsxContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#jsxContent}.
	 * @param ctx the parse tree
	 */
	void enterJsxContent(MyLanguageParser.JsxContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#jsxContent}.
	 * @param ctx the parse tree
	 */
	void exitJsxContent(MyLanguageParser.JsxContentContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(MyLanguageParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(MyLanguageParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(MyLanguageParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(MyLanguageParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyLanguageParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void enterArgumentList(MyLanguageParser.ArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyLanguageParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void exitArgumentList(MyLanguageParser.ArgumentListContext ctx);
}