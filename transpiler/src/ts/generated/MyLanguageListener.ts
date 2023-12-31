// Generated from ./src/g4/MyLanguage.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { RootContext } from "./MyLanguageParser";
import { MemberDeclarationContext } from "./MyLanguageParser";
import { ImportStatementContext } from "./MyLanguageParser";
import { VariableDeclarationContext } from "./MyLanguageParser";
import { ReturnStatementContext } from "./MyLanguageParser";
import { ReturnTypeContext } from "./MyLanguageParser";
import { VarTypeContext } from "./MyLanguageParser";
import { ExpressionContext } from "./MyLanguageParser";
import { FunctionDeclarationContext } from "./MyLanguageParser";
import { FunctionInvocationContext } from "./MyLanguageParser";
import { FunctionVarAssignmentContext } from "./MyLanguageParser";
import { ParameterContext } from "./MyLanguageParser";
import { ParameterListContext } from "./MyLanguageParser";
import { JsxContext } from "./MyLanguageParser";
import { JsxOpenContext } from "./MyLanguageParser";
import { JsxCloseContext } from "./MyLanguageParser";
import { LiteralContext } from "./MyLanguageParser";
import { ArgumentListContext } from "./MyLanguageParser";
import { ObjectPropertyAccessContext } from "./MyLanguageParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyLanguageParser`.
 */
export default class MyLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyLanguageParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
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
	 * Enter a parse tree produced by `MyLanguageParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
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
	 * Enter a parse tree produced by `MyLanguageParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
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
	 * Enter a parse tree produced by `MyLanguageParser.jsxOpen`.
	 * @param ctx the parse tree
	 */
	enterJsxOpen?: (ctx: JsxOpenContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.jsxOpen`.
	 * @param ctx the parse tree
	 */
	exitJsxOpen?: (ctx: JsxOpenContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.jsxClose`.
	 * @param ctx the parse tree
	 */
	enterJsxClose?: (ctx: JsxCloseContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.jsxClose`.
	 * @param ctx the parse tree
	 */
	exitJsxClose?: (ctx: JsxCloseContext) => void;
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
	 * Enter a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `MyLanguageParser.objectPropertyAccess`.
	 * @param ctx the parse tree
	 */
	enterObjectPropertyAccess?: (ctx: ObjectPropertyAccessContext) => void;
	/**
	 * Exit a parse tree produced by `MyLanguageParser.objectPropertyAccess`.
	 * @param ctx the parse tree
	 */
	exitObjectPropertyAccess?: (ctx: ObjectPropertyAccessContext) => void;
}

