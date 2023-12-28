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
	public static readonly BOOLEAN = 29;
	public static readonly ID = 30;
	public static readonly STRING = 31;
	public static readonly NUMBER = 32;
	public static readonly WS = 33;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_memberDeclaration = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_returnStatement = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_functionInvocation = 7;
	public static readonly RULE_functionVarAssignment = 8;
	public static readonly RULE_parameter = 9;
	public static readonly RULE_parameterList = 10;
	public static readonly RULE_jsx = 11;
	public static readonly RULE_jsxOpen = 12;
	public static readonly RULE_jsxClose = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_argumentList = 15;
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "';'", "'return'", 
                                                            "'int'", "'string'", 
                                                            "'boolean'", 
                                                            "'('", "')'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'+'", 
                                                            "'-'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'?'", 
                                                            "':'", "'function'", 
                                                            "'{'", "'}'", 
                                                            "','", "'</'" ];
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
                                                             null, "BOOLEAN", 
                                                             "ID", "STRING", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "memberDeclaration", "variableDeclaration", "returnStatement", 
		"type", "expression", "functionDeclaration", "functionInvocation", "functionVarAssignment", 
		"parameter", "parameterList", "jsx", "jsxOpen", "jsxClose", "literal", 
		"argumentList",
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
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.memberDeclaration();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1090535544) !== 0));
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
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 37;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 38;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 39;
				this.functionInvocation();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 40;
				this.returnStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 41;
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
			this.state = 44;
			this.type_();
			this.state = 45;
			this.match(MyLanguageParser.ID);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 46;
				this.match(MyLanguageParser.T__0);
				this.state = 47;
				this.literal();
				}
			}

			this.state = 50;
			this.match(MyLanguageParser.T__1);
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
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				this.match(MyLanguageParser.T__2);
				this.state = 53;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 54;
				this.functionInvocation();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 55;
				this.match(MyLanguageParser.ID);
				this.state = 56;
				this.match(MyLanguageParser.T__1);
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MyLanguageParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
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
		let _startState: number = 10;
		this.enterRecursionRule(localctx, 10, MyLanguageParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 62;
				this.match(MyLanguageParser.T__6);
				this.state = 63;
				this.expression(0);
				this.state = 64;
				this.match(MyLanguageParser.T__7);
				}
				break;
			case 30:
				{
				this.state = 66;
				this.match(MyLanguageParser.ID);
				}
				break;
			case 32:
				{
				this.state = 67;
				this.match(MyLanguageParser.NUMBER);
				}
				break;
			case 31:
				{
				this.state = 68;
				this.match(MyLanguageParser.STRING);
				}
				break;
			case 29:
				{
				this.state = 69;
				this.match(MyLanguageParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 95;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 93;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 72;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 73;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 74;
						this.expression(11);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 75;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 76;
						_la = this._input.LA(1);
						if(!(_la===12 || _la===13)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 77;
						this.expression(10);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 78;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 79;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 80;
						this.expression(9);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 81;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 82;
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 83;
						this.expression(8);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 84;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 85;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 86;
						this.expression(7);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 87;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 88;
						this.match(MyLanguageParser.T__21);
						this.state = 89;
						this.expression(0);
						this.state = 90;
						this.match(MyLanguageParser.T__22);
						this.state = 91;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
		this.enterRule(localctx, 12, MyLanguageParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(MyLanguageParser.T__23);
			this.state = 99;
			this.match(MyLanguageParser.ID);
			this.state = 100;
			this.match(MyLanguageParser.T__6);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0)) {
				{
				this.state = 101;
				this.parameterList();
				}
			}

			this.state = 104;
			this.match(MyLanguageParser.T__7);
			this.state = 105;
			this.match(MyLanguageParser.T__24);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073758320) !== 0)) {
				{
				this.state = 110;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 106;
					this.variableDeclaration();
					}
					break;
				case 2:
					{
					this.state = 107;
					this.functionVarAssignment();
					}
					break;
				case 3:
					{
					this.state = 108;
					this.functionInvocation();
					}
					break;
				case 4:
					{
					this.state = 109;
					this.jsx();
					}
					break;
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this.match(MyLanguageParser.T__25);
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
		this.enterRule(localctx, 14, MyLanguageParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(MyLanguageParser.ID);
			this.state = 118;
			this.match(MyLanguageParser.T__6);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 15) !== 0)) {
				{
				this.state = 119;
				this.argumentList();
				}
			}

			this.state = 122;
			this.match(MyLanguageParser.T__7);
			this.state = 123;
			this.match(MyLanguageParser.T__1);
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
		this.enterRule(localctx, 16, MyLanguageParser.RULE_functionVarAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(MyLanguageParser.ID);
			this.state = 126;
			this.match(MyLanguageParser.T__0);
			this.state = 127;
			this.expression(0);
			this.state = 128;
			this.match(MyLanguageParser.T__1);
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
		this.enterRule(localctx, 18, MyLanguageParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.type_();
			this.state = 131;
			this.match(MyLanguageParser.ID);
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
		this.enterRule(localctx, 20, MyLanguageParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.parameter();
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 134;
				this.match(MyLanguageParser.T__26);
				this.state = 135;
				this.parameter();
				}
				}
				this.state = 140;
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
		this.enterRule(localctx, 22, MyLanguageParser.RULE_jsx);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 141;
			this.jsxOpen();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 491521) !== 0)) {
				{
				this.state = 145;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 14:
					{
					this.state = 142;
					this.jsx();
					}
					break;
				case 29:
				case 31:
				case 32:
					{
					this.state = 143;
					this.literal();
					}
					break;
				case 30:
					{
					this.state = 144;
					this.match(MyLanguageParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
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
		this.enterRule(localctx, 24, MyLanguageParser.RULE_jsxOpen);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 152;
			this.match(MyLanguageParser.T__13);
			this.state = 153;
			this.match(MyLanguageParser.ID);
			this.state = 154;
			this.match(MyLanguageParser.T__14);
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
		this.enterRule(localctx, 26, MyLanguageParser.RULE_jsxClose);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(MyLanguageParser.T__27);
			this.state = 157;
			this.match(MyLanguageParser.ID);
			this.state = 158;
			this.match(MyLanguageParser.T__14);
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
		this.enterRule(localctx, 28, MyLanguageParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			_la = this._input.LA(1);
			if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 13) !== 0))) {
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
		this.enterRule(localctx, 30, MyLanguageParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
			case 31:
			case 32:
				{
				this.state = 162;
				this.literal();
				}
				break;
			case 30:
				{
				this.state = 163;
				this.match(MyLanguageParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 166;
				this.match(MyLanguageParser.T__26);
				this.state = 169;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 29:
				case 31:
				case 32:
					{
					this.state = 167;
					this.literal();
					}
					break;
				case 30:
					{
					this.state = 168;
					this.match(MyLanguageParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 175;
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
		case 5:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,33,177,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,
	0,11,0,12,0,35,1,1,1,1,1,1,1,1,1,1,3,1,43,8,1,1,2,1,2,1,2,1,2,3,2,49,8,
	2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,58,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,3,5,71,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,94,8,5,10,5,12,5,97,9,5,1,6,1,
	6,1,6,1,6,3,6,103,8,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,111,8,6,10,6,12,6,114,
	9,6,1,6,1,6,1,7,1,7,1,7,3,7,121,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,
	1,9,1,9,1,10,1,10,1,10,5,10,137,8,10,10,10,12,10,140,9,10,1,11,1,11,1,11,
	1,11,5,11,146,8,11,10,11,12,11,149,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
	13,1,13,1,13,1,13,1,14,1,14,1,15,1,15,3,15,165,8,15,1,15,1,15,1,15,3,15,
	170,8,15,5,15,172,8,15,10,15,12,15,175,9,15,1,15,0,1,10,16,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,0,7,1,0,4,6,1,0,9,11,1,0,12,13,1,0,14,17,
	1,0,18,19,1,0,20,21,2,0,29,29,31,32,191,0,33,1,0,0,0,2,42,1,0,0,0,4,44,
	1,0,0,0,6,57,1,0,0,0,8,59,1,0,0,0,10,70,1,0,0,0,12,98,1,0,0,0,14,117,1,
	0,0,0,16,125,1,0,0,0,18,130,1,0,0,0,20,133,1,0,0,0,22,141,1,0,0,0,24,152,
	1,0,0,0,26,156,1,0,0,0,28,160,1,0,0,0,30,164,1,0,0,0,32,34,3,2,1,0,33,32,
	1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,43,3,
	4,2,0,38,43,3,12,6,0,39,43,3,14,7,0,40,43,3,6,3,0,41,43,3,22,11,0,42,37,
	1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,3,1,
	0,0,0,44,45,3,8,4,0,45,48,5,30,0,0,46,47,5,1,0,0,47,49,3,28,14,0,48,46,
	1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,2,0,0,51,5,1,0,0,0,52,53,5,
	3,0,0,53,58,3,10,5,0,54,58,3,14,7,0,55,56,5,30,0,0,56,58,5,2,0,0,57,52,
	1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,58,7,1,0,0,0,59,60,7,0,0,0,60,9,1,0,
	0,0,61,62,6,5,-1,0,62,63,5,7,0,0,63,64,3,10,5,0,64,65,5,8,0,0,65,71,1,0,
	0,0,66,71,5,30,0,0,67,71,5,32,0,0,68,71,5,31,0,0,69,71,5,29,0,0,70,61,1,
	0,0,0,70,66,1,0,0,0,70,67,1,0,0,0,70,68,1,0,0,0,70,69,1,0,0,0,71,95,1,0,
	0,0,72,73,10,10,0,0,73,74,7,1,0,0,74,94,3,10,5,11,75,76,10,9,0,0,76,77,
	7,2,0,0,77,94,3,10,5,10,78,79,10,8,0,0,79,80,7,3,0,0,80,94,3,10,5,9,81,
	82,10,7,0,0,82,83,7,4,0,0,83,94,3,10,5,8,84,85,10,6,0,0,85,86,7,5,0,0,86,
	94,3,10,5,7,87,88,10,5,0,0,88,89,5,22,0,0,89,90,3,10,5,0,90,91,5,23,0,0,
	91,92,3,10,5,6,92,94,1,0,0,0,93,72,1,0,0,0,93,75,1,0,0,0,93,78,1,0,0,0,
	93,81,1,0,0,0,93,84,1,0,0,0,93,87,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,
	96,1,0,0,0,96,11,1,0,0,0,97,95,1,0,0,0,98,99,5,24,0,0,99,100,5,30,0,0,100,
	102,5,7,0,0,101,103,3,20,10,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,
	0,0,0,104,105,5,8,0,0,105,112,5,25,0,0,106,111,3,4,2,0,107,111,3,16,8,0,
	108,111,3,14,7,0,109,111,3,22,11,0,110,106,1,0,0,0,110,107,1,0,0,0,110,
	108,1,0,0,0,110,109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,
	0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,26,0,0,116,13,1,0,0,0,117,
	118,5,30,0,0,118,120,5,7,0,0,119,121,3,30,15,0,120,119,1,0,0,0,120,121,
	1,0,0,0,121,122,1,0,0,0,122,123,5,8,0,0,123,124,5,2,0,0,124,15,1,0,0,0,
	125,126,5,30,0,0,126,127,5,1,0,0,127,128,3,10,5,0,128,129,5,2,0,0,129,17,
	1,0,0,0,130,131,3,8,4,0,131,132,5,30,0,0,132,19,1,0,0,0,133,138,3,18,9,
	0,134,135,5,27,0,0,135,137,3,18,9,0,136,134,1,0,0,0,137,140,1,0,0,0,138,
	136,1,0,0,0,138,139,1,0,0,0,139,21,1,0,0,0,140,138,1,0,0,0,141,147,3,24,
	12,0,142,146,3,22,11,0,143,146,3,28,14,0,144,146,5,30,0,0,145,142,1,0,0,
	0,145,143,1,0,0,0,145,144,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,
	1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,3,26,13,0,151,23,1,0,0,
	0,152,153,5,14,0,0,153,154,5,30,0,0,154,155,5,15,0,0,155,25,1,0,0,0,156,
	157,5,28,0,0,157,158,5,30,0,0,158,159,5,15,0,0,159,27,1,0,0,0,160,161,7,
	6,0,0,161,29,1,0,0,0,162,165,3,28,14,0,163,165,5,30,0,0,164,162,1,0,0,0,
	164,163,1,0,0,0,165,173,1,0,0,0,166,169,5,27,0,0,167,170,3,28,14,0,168,
	170,5,30,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,172,1,0,0,0,171,166,1,
	0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,31,1,0,0,0,175,
	173,1,0,0,0,17,35,42,48,57,70,93,95,102,110,112,120,138,145,147,164,169,
	173];

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
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
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


export class TypeContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_type;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
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
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MyLanguageParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MyLanguageParser.STRING, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MyLanguageParser.BOOLEAN, 0);
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
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
	public functionVarAssignment_list(): FunctionVarAssignmentContext[] {
		return this.getTypedRuleContexts(FunctionVarAssignmentContext) as FunctionVarAssignmentContext[];
	}
	public functionVarAssignment(i: number): FunctionVarAssignmentContext {
		return this.getTypedRuleContext(FunctionVarAssignmentContext, i) as FunctionVarAssignmentContext;
	}
	public functionInvocation_list(): FunctionInvocationContext[] {
		return this.getTypedRuleContexts(FunctionInvocationContext) as FunctionInvocationContext[];
	}
	public functionInvocation(i: number): FunctionInvocationContext {
		return this.getTypedRuleContext(FunctionInvocationContext, i) as FunctionInvocationContext;
	}
	public jsx_list(): JsxContext[] {
		return this.getTypedRuleContexts(JsxContext) as JsxContext[];
	}
	public jsx(i: number): JsxContext {
		return this.getTypedRuleContext(JsxContext, i) as JsxContext;
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
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
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
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
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
