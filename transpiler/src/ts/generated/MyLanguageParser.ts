// Generated from ./src/g4/MyLanguage.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MyLanguageListener from "./MyLanguageListener.js";
import MyLanguageVisitor from "./MyLanguageVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MyLanguageParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly BOOLEAN = 33;
	public static readonly ID = 34;
	public static readonly STRING = 35;
	public static readonly NUMBER = 36;
	public static readonly WS = 37;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_memberDeclaration = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_returnStatement = 3;
	public static readonly RULE_returnType = 4;
	public static readonly RULE_varType = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_functionDeclaration = 7;
	public static readonly RULE_functionInvocation = 8;
	public static readonly RULE_functionVarAssignment = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_parameterList = 11;
	public static readonly RULE_jsx = 12;
	public static readonly RULE_jsxOpen = 13;
	public static readonly RULE_jsxClose = 14;
	public static readonly RULE_literal = 15;
	public static readonly RULE_argumentList = 16;
	public static readonly literalNames: (string | null)[] = [ null, "':'", 
                                                            "'='", "';'", 
                                                            "'return'", 
                                                            "'number'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'const'", "'let'", 
                                                            "'var'", "'('", 
                                                            "')'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'+'", "'-'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'&&'", "'||'", 
                                                            "'?'", "'function'", 
                                                            "'{'", "'}'", 
                                                            "'.'", "','", 
                                                            "'</'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "BOOLEAN", 
                                                             "ID", "STRING", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "memberDeclaration", "variableDeclaration", "returnStatement", 
		"returnType", "varType", "expression", "functionDeclaration", "functionInvocation", 
		"functionVarAssignment", "parameter", "parameterList", "jsx", "jsxOpen", 
		"jsxClose", "literal", "argumentList",
	];
	public get grammarFileName(): string { return "MyLanguage.g4"; }
	public get literalNames(): (string | null)[] { return MyLanguageParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MyLanguageParser.symbolicNames; }
	public get ruleNames(): string[] { return MyLanguageParser.ruleNames; }
	public get serializedATN(): number[] { return MyLanguageParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MyLanguageParser._ATN, MyLanguageParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyLanguageParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 34;
				this.memberDeclaration();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 1082146929) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MyLanguageParser.RULE_memberDeclaration);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 39;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 40;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 41;
				this.functionInvocation();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 42;
				this.returnStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 43;
				this.functionVarAssignment();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 44;
				this.jsx();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MyLanguageParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.varType();
			this.state = 48;
			this.match(MyLanguageParser.ID);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 49;
				this.match(MyLanguageParser.T__0);
				this.state = 50;
				this.returnType();
				}
			}

			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 53;
				this.match(MyLanguageParser.T__1);
				this.state = 54;
				this.literal();
				}
			}

			this.state = 57;
			this.match(MyLanguageParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MyLanguageParser.RULE_returnStatement);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 59;
				this.match(MyLanguageParser.T__3);
				this.state = 60;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 61;
				this.functionInvocation();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 62;
				this.jsx();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 63;
				this.match(MyLanguageParser.ID);
				this.state = 64;
				this.match(MyLanguageParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnType(): ReturnTypeContext {
		let localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MyLanguageParser.RULE_returnType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varType(): VarTypeContext {
		let localctx: VarTypeContext = new VarTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MyLanguageParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, MyLanguageParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				{
				this.state = 72;
				this.match(MyLanguageParser.T__10);
				this.state = 73;
				this.expression(0);
				this.state = 74;
				this.match(MyLanguageParser.T__11);
				}
				break;
			case 18:
				{
				this.state = 76;
				this.jsx();
				}
				break;
			case 34:
				{
				this.state = 77;
				this.match(MyLanguageParser.ID);
				}
				break;
			case 33:
			case 35:
			case 36:
				{
				this.state = 78;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 102;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 81;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 82;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 57344) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 83;
						this.expression(10);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 84;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 85;
						_la = this._input.LA(1);
						if(!(_la===16 || _la===17)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 86;
						this.expression(9);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 87;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 88;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 89;
						this.expression(8);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 90;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 91;
						_la = this._input.LA(1);
						if(!(_la===22 || _la===23)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 92;
						this.expression(7);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 93;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 94;
						_la = this._input.LA(1);
						if(!(_la===24 || _la===25)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 95;
						this.expression(6);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 96;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 97;
						this.match(MyLanguageParser.T__25);
						this.state = 98;
						this.expression(0);
						this.state = 99;
						this.match(MyLanguageParser.T__0);
						this.state = 100;
						this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MyLanguageParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			this.match(MyLanguageParser.T__26);
			this.state = 108;
			this.match(MyLanguageParser.ID);
			this.state = 109;
			this.match(MyLanguageParser.T__10);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 110;
				this.parameterList();
				}
			}

			this.state = 113;
			this.match(MyLanguageParser.T__11);
			this.state = 114;
			this.match(MyLanguageParser.T__27);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 115;
				this.memberDeclaration();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 1082146929) !== 0));
			this.state = 120;
			this.match(MyLanguageParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionInvocation(): FunctionInvocationContext {
		let localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MyLanguageParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 122;
				this.match(MyLanguageParser.ID);
				this.state = 123;
				this.match(MyLanguageParser.T__29);
				}
				break;
			}
			this.state = 126;
			this.match(MyLanguageParser.ID);
			this.state = 127;
			this.match(MyLanguageParser.T__10);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15) !== 0)) {
				{
				this.state = 128;
				this.argumentList();
				}
			}

			this.state = 131;
			this.match(MyLanguageParser.T__11);
			this.state = 132;
			this.match(MyLanguageParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionVarAssignment(): FunctionVarAssignmentContext {
		let localctx: FunctionVarAssignmentContext = new FunctionVarAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MyLanguageParser.RULE_functionVarAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			this.match(MyLanguageParser.ID);
			this.state = 135;
			this.match(MyLanguageParser.T__1);
			this.state = 136;
			this.expression(0);
			this.state = 137;
			this.match(MyLanguageParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MyLanguageParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.match(MyLanguageParser.ID);
			this.state = 140;
			this.match(MyLanguageParser.T__0);
			this.state = 141;
			this.returnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MyLanguageParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this.parameter();
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 144;
				this.match(MyLanguageParser.T__30);
				this.state = 145;
				this.parameter();
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx(): JsxContext {
		let localctx: JsxContext = new JsxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MyLanguageParser.RULE_jsx);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.jsxOpen();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 491521) !== 0)) {
				{
				this.state = 155;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 18:
					{
					this.state = 152;
					this.jsx();
					}
					break;
				case 33:
				case 35:
				case 36:
					{
					this.state = 153;
					this.literal();
					}
					break;
				case 34:
					{
					this.state = 154;
					this.match(MyLanguageParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
			this.jsxClose();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsxOpen(): JsxOpenContext {
		let localctx: JsxOpenContext = new JsxOpenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MyLanguageParser.RULE_jsxOpen);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(MyLanguageParser.T__17);
			this.state = 163;
			this.match(MyLanguageParser.ID);
			this.state = 164;
			this.match(MyLanguageParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsxClose(): JsxCloseContext {
		let localctx: JsxCloseContext = new JsxCloseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MyLanguageParser.RULE_jsxClose);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.match(MyLanguageParser.T__31);
			this.state = 167;
			this.match(MyLanguageParser.ID);
			this.state = 168;
			this.match(MyLanguageParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MyLanguageParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			_la = this._input.LA(1);
			if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 13) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MyLanguageParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
			case 35:
			case 36:
				{
				this.state = 172;
				this.literal();
				}
				break;
			case 34:
				{
				this.state = 173;
				this.match(MyLanguageParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 176;
				this.match(MyLanguageParser.T__30);
				this.state = 179;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 33:
				case 35:
				case 36:
					{
					this.state = 177;
					this.literal();
					}
					break;
				case 34:
					{
					this.state = 178;
					this.match(MyLanguageParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,37,187,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	4,0,36,8,0,11,0,12,0,37,1,1,1,1,1,1,1,1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,2,
	1,2,3,2,52,8,2,1,2,1,2,3,2,56,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,66,
	8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,80,8,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,5,6,103,8,6,10,6,12,6,106,9,6,1,7,1,7,1,7,1,7,3,7,112,8,7,1,7,1,7,1,
	7,4,7,117,8,7,11,7,12,7,118,1,7,1,7,1,8,1,8,3,8,125,8,8,1,8,1,8,1,8,3,8,
	130,8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,
	11,5,11,147,8,11,10,11,12,11,150,9,11,1,12,1,12,1,12,1,12,5,12,156,8,12,
	10,12,12,12,159,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
	1,15,1,15,1,16,1,16,3,16,175,8,16,1,16,1,16,1,16,3,16,180,8,16,5,16,182,
	8,16,10,16,12,16,185,9,16,1,16,0,1,12,17,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,0,8,1,0,5,7,1,0,8,10,1,0,13,15,1,0,16,17,1,0,18,21,1,0,22,
	23,1,0,24,25,2,0,33,33,35,36,200,0,35,1,0,0,0,2,45,1,0,0,0,4,47,1,0,0,0,
	6,65,1,0,0,0,8,67,1,0,0,0,10,69,1,0,0,0,12,79,1,0,0,0,14,107,1,0,0,0,16,
	124,1,0,0,0,18,134,1,0,0,0,20,139,1,0,0,0,22,143,1,0,0,0,24,151,1,0,0,0,
	26,162,1,0,0,0,28,166,1,0,0,0,30,170,1,0,0,0,32,174,1,0,0,0,34,36,3,2,1,
	0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,1,1,0,0,0,
	39,46,3,4,2,0,40,46,3,14,7,0,41,46,3,16,8,0,42,46,3,6,3,0,43,46,3,18,9,
	0,44,46,3,24,12,0,45,39,1,0,0,0,45,40,1,0,0,0,45,41,1,0,0,0,45,42,1,0,0,
	0,45,43,1,0,0,0,45,44,1,0,0,0,46,3,1,0,0,0,47,48,3,10,5,0,48,51,5,34,0,
	0,49,50,5,1,0,0,50,52,3,8,4,0,51,49,1,0,0,0,51,52,1,0,0,0,52,55,1,0,0,0,
	53,54,5,2,0,0,54,56,3,30,15,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,
	57,58,5,3,0,0,58,5,1,0,0,0,59,60,5,4,0,0,60,66,3,12,6,0,61,66,3,16,8,0,
	62,66,3,24,12,0,63,64,5,34,0,0,64,66,5,3,0,0,65,59,1,0,0,0,65,61,1,0,0,
	0,65,62,1,0,0,0,65,63,1,0,0,0,66,7,1,0,0,0,67,68,7,0,0,0,68,9,1,0,0,0,69,
	70,7,1,0,0,70,11,1,0,0,0,71,72,6,6,-1,0,72,73,5,11,0,0,73,74,3,12,6,0,74,
	75,5,12,0,0,75,80,1,0,0,0,76,80,3,24,12,0,77,80,5,34,0,0,78,80,3,30,15,
	0,79,71,1,0,0,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,104,1,0,0,
	0,81,82,10,9,0,0,82,83,7,2,0,0,83,103,3,12,6,10,84,85,10,8,0,0,85,86,7,
	3,0,0,86,103,3,12,6,9,87,88,10,7,0,0,88,89,7,4,0,0,89,103,3,12,6,8,90,91,
	10,6,0,0,91,92,7,5,0,0,92,103,3,12,6,7,93,94,10,5,0,0,94,95,7,6,0,0,95,
	103,3,12,6,6,96,97,10,4,0,0,97,98,5,26,0,0,98,99,3,12,6,0,99,100,5,1,0,
	0,100,101,3,12,6,5,101,103,1,0,0,0,102,81,1,0,0,0,102,84,1,0,0,0,102,87,
	1,0,0,0,102,90,1,0,0,0,102,93,1,0,0,0,102,96,1,0,0,0,103,106,1,0,0,0,104,
	102,1,0,0,0,104,105,1,0,0,0,105,13,1,0,0,0,106,104,1,0,0,0,107,108,5,27,
	0,0,108,109,5,34,0,0,109,111,5,11,0,0,110,112,3,22,11,0,111,110,1,0,0,0,
	111,112,1,0,0,0,112,113,1,0,0,0,113,114,5,12,0,0,114,116,5,28,0,0,115,117,
	3,2,1,0,116,115,1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,
	119,120,1,0,0,0,120,121,5,29,0,0,121,15,1,0,0,0,122,123,5,34,0,0,123,125,
	5,30,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,5,34,0,
	0,127,129,5,11,0,0,128,130,3,32,16,0,129,128,1,0,0,0,129,130,1,0,0,0,130,
	131,1,0,0,0,131,132,5,12,0,0,132,133,5,3,0,0,133,17,1,0,0,0,134,135,5,34,
	0,0,135,136,5,2,0,0,136,137,3,12,6,0,137,138,5,3,0,0,138,19,1,0,0,0,139,
	140,5,34,0,0,140,141,5,1,0,0,141,142,3,8,4,0,142,21,1,0,0,0,143,148,3,20,
	10,0,144,145,5,31,0,0,145,147,3,20,10,0,146,144,1,0,0,0,147,150,1,0,0,0,
	148,146,1,0,0,0,148,149,1,0,0,0,149,23,1,0,0,0,150,148,1,0,0,0,151,157,
	3,26,13,0,152,156,3,24,12,0,153,156,3,30,15,0,154,156,5,34,0,0,155,152,
	1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,
	157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,3,28,14,0,161,25,
	1,0,0,0,162,163,5,18,0,0,163,164,5,34,0,0,164,165,5,19,0,0,165,27,1,0,0,
	0,166,167,5,32,0,0,167,168,5,34,0,0,168,169,5,19,0,0,169,29,1,0,0,0,170,
	171,7,7,0,0,171,31,1,0,0,0,172,175,3,30,15,0,173,175,5,34,0,0,174,172,1,
	0,0,0,174,173,1,0,0,0,175,183,1,0,0,0,176,179,5,31,0,0,177,180,3,30,15,
	0,178,180,5,34,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,182,1,0,0,0,181,
	176,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,33,1,0,
	0,0,185,183,1,0,0,0,18,37,45,51,55,65,79,102,104,111,118,124,129,148,155,
	157,174,179,183];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyLanguageParser.__ATN) {
			MyLanguageParser.__ATN = new ATNDeserializer().deserialize(MyLanguageParser._serializedATN);
		}

		return MyLanguageParser.__ATN;
	}


	static DecisionsToDFA = MyLanguageParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public memberDeclaration_list(): MemberDeclarationContext[] {
		return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[];
	}
	public memberDeclaration(i: number): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_root;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public functionInvocation(): FunctionInvocationContext {
		return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public functionVarAssignment(): FunctionVarAssignmentContext {
		return this.getTypedRuleContext(FunctionVarAssignmentContext, 0) as FunctionVarAssignmentContext;
	}
	public jsx(): JsxContext {
		return this.getTypedRuleContext(JsxContext, 0) as JsxContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_memberDeclaration;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterMemberDeclaration) {
	 		listener.enterMemberDeclaration(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitMemberDeclaration) {
	 		listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_variableDeclaration;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionInvocation(): FunctionInvocationContext {
		return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext;
	}
	public jsx(): JsxContext {
		return this.getTypedRuleContext(JsxContext, 0) as JsxContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_returnStatement;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_returnType;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterReturnType) {
	 		listener.enterReturnType(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitReturnType) {
	 		listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_varType;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterVarType) {
	 		listener.enterVarType(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitVarType) {
	 		listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public jsx(): JsxContext {
		return this.getTypedRuleContext(JsxContext, 0) as JsxContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_expression;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public memberDeclaration_list(): MemberDeclarationContext[] {
		return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[];
	}
	public memberDeclaration(i: number): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionDeclaration;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionInvocationContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyLanguageParser.ID, i);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionInvocation;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionInvocation) {
	 		listener.enterFunctionInvocation(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionInvocation) {
	 		listener.exitFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitFunctionInvocation) {
			return visitor.visitFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionVarAssignmentContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionVarAssignment;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionVarAssignment) {
	 		listener.enterFunctionVarAssignment(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionVarAssignment) {
	 		listener.exitFunctionVarAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitFunctionVarAssignment) {
			return visitor.visitFunctionVarAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_parameter;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_parameterList;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxOpen(): JsxOpenContext {
		return this.getTypedRuleContext(JsxOpenContext, 0) as JsxOpenContext;
	}
	public jsxClose(): JsxCloseContext {
		return this.getTypedRuleContext(JsxCloseContext, 0) as JsxCloseContext;
	}
	public jsx_list(): JsxContext[] {
		return this.getTypedRuleContexts(JsxContext) as JsxContext[];
	}
	public jsx(i: number): JsxContext {
		return this.getTypedRuleContext(JsxContext, i) as JsxContext;
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyLanguageParser.ID, i);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsx;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsx) {
	 		listener.enterJsx(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsx) {
	 		listener.exitJsx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitJsx) {
			return visitor.visitJsx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxOpenContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxOpen;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxOpen) {
	 		listener.enterJsxOpen(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxOpen) {
	 		listener.exitJsxOpen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitJsxOpen) {
			return visitor.visitJsxOpen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxCloseContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxClose;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxClose) {
	 		listener.enterJsxClose(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxClose) {
	 		listener.exitJsxClose(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitJsxClose) {
			return visitor.visitJsxClose(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MyLanguageParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MyLanguageParser.NUMBER, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MyLanguageParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_literal;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyLanguageParser.ID, i);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_argumentList;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
