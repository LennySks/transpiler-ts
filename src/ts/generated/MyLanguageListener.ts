// Generated from MyLanguage.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ClassDeclarationContext } from "./MyLanguageParser";
import { MemberDeclarationContext } from "./MyLanguageParser";
import { VariableDeclarationContext } from "./MyLanguageParser";
import { TypeContext } from "./MyLanguageParser";
import { FunctionDeclarationContext } from "./MyLanguageParser";
import { FunctionInvocationContext } from "./MyLanguageParser";
import { FunctionVarAssignmentContext } from "./MyLanguageParser";
import { ParameterContext } from "./MyLanguageParser";
import { ParameterListContext } from "./MyLanguageParser";
import { JsxContext } from "./MyLanguageParser";
import { JsxContentContext } from "./MyLanguageParser";
import { LiteralContext } from "./MyLanguageParser";
import { BooleanExpressionContext } from "./MyLanguageParser";
import { ArgumentListContext } from "./MyLanguageParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyLanguageParser`.
 */
export default class MyLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyLanguageParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.functionInvocation`.
	 * @param ctx the parse tree
	 */
	enterFunctionInvocation?: (ctx: FunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.functionInvocation`.
	 * @param ctx the parse tree
	 */
	exitFunctionInvocation?: (ctx: FunctionInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.functionVarAssignment`.
	 * @param ctx the parse tree
	 */
	enterFunctionVarAssignment?: (ctx: FunctionVarAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.functionVarAssignment`.
	 * @param ctx the parse tree
	 */
	exitFunctionVarAssignment?: (ctx: FunctionVarAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.jsx`.
	 * @param ctx the parse tree
	 */
	enterJsx?: (ctx: JsxContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.jsx`.
	 * @param ctx the parse tree
	 */
	exitJsx?: (ctx: JsxContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.jsxContent`.
	 * @param ctx the parse tree
	 */
	enterJsxContent?: (ctx: JsxContentContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.jsxContent`.
	 * @param ctx the parse tree
	 */
	exitJsxContent?: (ctx: JsxContentContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
}

