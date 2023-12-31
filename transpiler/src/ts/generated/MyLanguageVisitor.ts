// Generated from ./src/g4/MyLanguage.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4'


import { RootContext } from './MyLanguageParser'
import { MemberDeclarationContext } from './MyLanguageParser'
import { VariableDeclarationContext } from './MyLanguageParser'
import { ReturnStatementContext } from './MyLanguageParser'
import { ReturnTypeContext } from './MyLanguageParser'
import { VarTypeContext } from './MyLanguageParser'
import { ExpressionContext } from './MyLanguageParser'
import { FunctionDeclarationContext } from './MyLanguageParser'
import { FunctionInvocationContext } from './MyLanguageParser'
import { FunctionVarAssignmentContext } from './MyLanguageParser'
import { ParameterContext } from './MyLanguageParser'
import { ParameterListContext } from './MyLanguageParser'
import { JsxContext } from './MyLanguageParser'
import { JsxOpenContext } from './MyLanguageParser'
import { JsxCloseContext } from './MyLanguageParser'
import { LiteralContext } from './MyLanguageParser'
import { ArgumentListContext } from './MyLanguageParser'
import { ObjectPropertyAccessContext } from './MyLanguageParser'


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyLanguageParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MyLanguageVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
	 * Visit a parse tree produced by `MyLanguageParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitRoot?: (ctx: RootContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitReturnType?: (ctx: ReturnTypeContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitVarType?: (ctx: VarTypeContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitExpression?: (ctx: ExpressionContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.functionInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFunctionInvocation?: (ctx: FunctionInvocationContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.functionVarAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFunctionVarAssignment?: (ctx: FunctionVarAssignmentContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitParameter?: (ctx: ParameterContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitParameterList?: (ctx: ParameterListContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.jsx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitJsx?: (ctx: JsxContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.jsxOpen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitJsxOpen?: (ctx: JsxOpenContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.jsxClose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitJsxClose?: (ctx: JsxCloseContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitLiteral?: (ctx: LiteralContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitArgumentList?: (ctx: ArgumentListContext) => Result
    /**
	 * Visit a parse tree produced by `MyLanguageParser.objectPropertyAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitObjectPropertyAccess?: (ctx: ObjectPropertyAccessContext) => Result
}

