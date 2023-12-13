// Generated from MyLanguage.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ClassDeclarationContext } from "./MyLanguageParser";
import { MemberDeclarationContext } from "./MyLanguageParser";
import { VariableDeclarationContext } from "./MyLanguageParser";
import { TypeContext } from "./MyLanguageParser";
import { FunctionDeclarationContext } from "./MyLanguageParser";
import { FunctionInvocationContext } from "./MyLanguageParser";
import { JsxContext } from "./MyLanguageParser";
import { JsxContentContext } from "./MyLanguageParser";
import { LiteralContext } from "./MyLanguageParser";
import { ParameterListContext } from "./MyLanguageParser";
import { ArgumentListContext } from "./MyLanguageParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyLanguageParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MyLanguageVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MyLanguageParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.functionInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionInvocation?: (ctx: FunctionInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.jsx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsx?: (ctx: JsxContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.jsxContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxContent?: (ctx: JsxContentContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;
}

