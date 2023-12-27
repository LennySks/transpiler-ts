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
	public static readonly RULE_classDeclaration = 0;
	public static readonly RULE_memberDeclaration = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_functionDeclaration = 5;
	public static readonly RULE_functionInvocation = 6;
	public static readonly RULE_functionVarAssignment = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_jsx = 10;
	public static readonly RULE_literal = 11;
	public static readonly RULE_argumentList = 12;
	public static readonly literalNames: (string | null)[] = [ null, "'class'", 
                                                            "'{'", "'}'", 
                                                            "'='", "';'", 
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
		"classDeclaration", "memberDeclaration", "variableDeclaration", "type", 
		"expression", "functionDeclaration", "functionInvocation", "functionVarAssignment", 
		"parameter", "parameterList", "jsx", "literal", "argumentList",
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
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyLanguageParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this.match(MyLanguageParser.T__0);
			this.state = 27;
			this.match(MyLanguageParser.ID);
			this.state = 28;
			this.match(MyLanguageParser.T__1);
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1140916672) !== 0)) {
				{
				{
				this.state = 29;
				this.memberDeclaration();
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
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
	public memberDeclaration(): MemberDeclarationContext {
		let localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MyLanguageParser.RULE_memberDeclaration);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 37;
				this.variableDeclaration();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 38;
				this.functionDeclaration();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 39;
				this.functionInvocation();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 40;
				this.jsx();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
			this.state = 43;
			this.type_();
			this.state = 44;
			this.match(MyLanguageParser.ID);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 45;
				this.match(MyLanguageParser.T__3);
				this.state = 46;
				this.literal();
				}
			}

			this.state = 49;
			this.match(MyLanguageParser.T__4);
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
		this.enterRule(localctx, 6, MyLanguageParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
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
		let _startState: number = 8;
		this.enterRecursionRule(localctx, 8, MyLanguageParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				{
				this.state = 54;
				this.match(MyLanguageParser.T__8);
				this.state = 55;
				this.expression(0);
				this.state = 56;
				this.match(MyLanguageParser.T__9);
				}
				break;
			case 30:
				{
				this.state = 58;
				this.match(MyLanguageParser.ID);
				}
				break;
			case 32:
				{
				this.state = 59;
				this.match(MyLanguageParser.NUMBER);
				}
				break;
			case 31:
				{
				this.state = 60;
				this.match(MyLanguageParser.STRING);
				}
				break;
			case 29:
				{
				this.state = 61;
				this.match(MyLanguageParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 87;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 85;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 64;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 65;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 66;
						this.expression(11);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 67;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 68;
						_la = this._input.LA(1);
						if(!(_la===14 || _la===15)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 69;
						this.expression(10);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 70;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 71;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 983040) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 72;
						this.expression(9);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 73;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 74;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 75;
						this.expression(8);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 76;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 77;
						_la = this._input.LA(1);
						if(!(_la===22 || _la===23)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 78;
						this.expression(7);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
						this.state = 79;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 80;
						this.match(MyLanguageParser.T__23);
						this.state = 81;
						this.expression(0);
						this.state = 82;
						this.match(MyLanguageParser.T__24);
						this.state = 83;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
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
		this.enterRule(localctx, 10, MyLanguageParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.match(MyLanguageParser.T__25);
			this.state = 91;
			this.match(MyLanguageParser.ID);
			this.state = 92;
			this.match(MyLanguageParser.T__8);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0)) {
				{
				this.state = 93;
				this.parameterList();
				}
			}

			this.state = 96;
			this.match(MyLanguageParser.T__9);
			this.state = 97;
			this.match(MyLanguageParser.T__1);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073807808) !== 0)) {
				{
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 98;
					this.variableDeclaration();
					}
					break;
				case 2:
					{
					this.state = 99;
					this.functionVarAssignment();
					}
					break;
				case 3:
					{
					this.state = 100;
					this.functionInvocation();
					}
					break;
				case 4:
					{
					this.state = 101;
					this.jsx();
					}
					break;
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
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
	public functionInvocation(): FunctionInvocationContext {
		let localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MyLanguageParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(MyLanguageParser.ID);
			this.state = 110;
			this.match(MyLanguageParser.T__8);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 13) !== 0)) {
				{
				this.state = 111;
				this.argumentList();
				}
			}

			this.state = 114;
			this.match(MyLanguageParser.T__9);
			this.state = 115;
			this.match(MyLanguageParser.T__4);
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
		this.enterRule(localctx, 14, MyLanguageParser.RULE_functionVarAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(MyLanguageParser.ID);
			this.state = 118;
			this.match(MyLanguageParser.T__3);
			this.state = 119;
			this.expression(0);
			this.state = 120;
			this.match(MyLanguageParser.T__4);
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
		this.enterRule(localctx, 16, MyLanguageParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.type_();
			this.state = 123;
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
		this.enterRule(localctx, 18, MyLanguageParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.parameter();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 126;
				this.match(MyLanguageParser.T__26);
				this.state = 127;
				this.parameter();
				}
				}
				this.state = 132;
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
		this.enterRule(localctx, 20, MyLanguageParser.RULE_jsx);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(MyLanguageParser.T__15);
			this.state = 134;
			this.match(MyLanguageParser.ID);
			this.state = 135;
			this.match(MyLanguageParser.T__16);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===30) {
				{
				this.state = 138;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 16:
					{
					this.state = 136;
					this.jsx();
					}
					break;
				case 30:
					{
					this.state = 137;
					this.match(MyLanguageParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(MyLanguageParser.T__27);
			this.state = 144;
			this.match(MyLanguageParser.ID);
			this.state = 145;
			this.match(MyLanguageParser.T__16);
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
		this.enterRule(localctx, 22, MyLanguageParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
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
		this.enterRule(localctx, 24, MyLanguageParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.literal();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 150;
				this.match(MyLanguageParser.T__26);
				this.state = 151;
				this.literal();
				}
				}
				this.state = 156;
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
		case 4:
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

	public static readonly _serializedATN: number[] = [4,1,33,158,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,
	1,0,1,0,1,1,1,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,1,
	3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,63,8,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,86,
	8,4,10,4,12,4,89,9,4,1,5,1,5,1,5,1,5,3,5,95,8,5,1,5,1,5,1,5,1,5,1,5,1,5,
	5,5,103,8,5,10,5,12,5,106,9,5,1,5,1,5,1,6,1,6,1,6,3,6,113,8,6,1,6,1,6,1,
	6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,5,9,129,8,9,10,9,12,9,132,
	9,9,1,10,1,10,1,10,1,10,1,10,5,10,139,8,10,10,10,12,10,142,9,10,1,10,1,
	10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,5,12,153,8,12,10,12,12,12,156,9,12,
	1,12,0,1,8,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,7,1,0,6,8,1,0,11,13,1,
	0,14,15,1,0,16,19,1,0,20,21,1,0,22,23,2,0,29,29,31,32,169,0,26,1,0,0,0,
	2,41,1,0,0,0,4,43,1,0,0,0,6,51,1,0,0,0,8,62,1,0,0,0,10,90,1,0,0,0,12,109,
	1,0,0,0,14,117,1,0,0,0,16,122,1,0,0,0,18,125,1,0,0,0,20,133,1,0,0,0,22,
	147,1,0,0,0,24,149,1,0,0,0,26,27,5,1,0,0,27,28,5,30,0,0,28,32,5,2,0,0,29,
	31,3,2,1,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,
	1,0,0,0,34,32,1,0,0,0,35,36,5,3,0,0,36,1,1,0,0,0,37,42,3,4,2,0,38,42,3,
	10,5,0,39,42,3,12,6,0,40,42,3,20,10,0,41,37,1,0,0,0,41,38,1,0,0,0,41,39,
	1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,3,6,3,0,44,47,5,30,0,0,45,46,5,
	4,0,0,46,48,3,22,11,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,
	5,0,0,50,5,1,0,0,0,51,52,7,0,0,0,52,7,1,0,0,0,53,54,6,4,-1,0,54,55,5,9,
	0,0,55,56,3,8,4,0,56,57,5,10,0,0,57,63,1,0,0,0,58,63,5,30,0,0,59,63,5,32,
	0,0,60,63,5,31,0,0,61,63,5,29,0,0,62,53,1,0,0,0,62,58,1,0,0,0,62,59,1,0,
	0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,87,1,0,0,0,64,65,10,10,0,0,65,66,7,1,
	0,0,66,86,3,8,4,11,67,68,10,9,0,0,68,69,7,2,0,0,69,86,3,8,4,10,70,71,10,
	8,0,0,71,72,7,3,0,0,72,86,3,8,4,9,73,74,10,7,0,0,74,75,7,4,0,0,75,86,3,
	8,4,8,76,77,10,6,0,0,77,78,7,5,0,0,78,86,3,8,4,7,79,80,10,5,0,0,80,81,5,
	24,0,0,81,82,3,8,4,0,82,83,5,25,0,0,83,84,3,8,4,6,84,86,1,0,0,0,85,64,1,
	0,0,0,85,67,1,0,0,0,85,70,1,0,0,0,85,73,1,0,0,0,85,76,1,0,0,0,85,79,1,0,
	0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,9,1,0,0,0,89,87,1,0,0,
	0,90,91,5,26,0,0,91,92,5,30,0,0,92,94,5,9,0,0,93,95,3,18,9,0,94,93,1,0,
	0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,10,0,0,97,104,5,2,0,0,98,103,3,
	4,2,0,99,103,3,14,7,0,100,103,3,12,6,0,101,103,3,20,10,0,102,98,1,0,0,0,
	102,99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,
	1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,107,108,5,3,0,0,
	108,11,1,0,0,0,109,110,5,30,0,0,110,112,5,9,0,0,111,113,3,24,12,0,112,111,
	1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,115,5,10,0,0,115,116,5,5,0,
	0,116,13,1,0,0,0,117,118,5,30,0,0,118,119,5,4,0,0,119,120,3,8,4,0,120,121,
	5,5,0,0,121,15,1,0,0,0,122,123,3,6,3,0,123,124,5,30,0,0,124,17,1,0,0,0,
	125,130,3,16,8,0,126,127,5,27,0,0,127,129,3,16,8,0,128,126,1,0,0,0,129,
	132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,19,1,0,0,0,132,130,1,0,
	0,0,133,134,5,16,0,0,134,135,5,30,0,0,135,140,5,17,0,0,136,139,3,20,10,
	0,137,139,5,30,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,142,1,0,0,0,140,
	138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,144,5,28,
	0,0,144,145,5,30,0,0,145,146,5,17,0,0,146,21,1,0,0,0,147,148,7,6,0,0,148,
	23,1,0,0,0,149,154,3,22,11,0,150,151,5,27,0,0,151,153,3,22,11,0,152,150,
	1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,25,1,0,0,0,
	156,154,1,0,0,0,14,32,41,47,62,85,87,94,102,104,112,130,138,140,154];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyLanguageParser.__ATN) {
			MyLanguageParser.__ATN = new ATNDeserializer().deserialize(MyLanguageParser._serializedATN);
		}

		return MyLanguageParser.__ATN;
	}


	static DecisionsToDFA = MyLanguageParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyLanguageParser.ID, 0);
	}
	public memberDeclaration_list(): MemberDeclarationContext[] {
		return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[];
	}
	public memberDeclaration(i: number): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_classDeclaration;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
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
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyLanguageParser.ID, i);
	}
	public jsx_list(): JsxContext[] {
		return this.getTypedRuleContexts(JsxContext) as JsxContext[];
	}
	public jsx(i: number): JsxContext {
		return this.getTypedRuleContext(JsxContext, i) as JsxContext;
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
