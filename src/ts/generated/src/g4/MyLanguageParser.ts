// Generated from .//src//g4//MyLanguage.g4 by ANTLR 4.13.1
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
	public static readonly BOOLEAN = 16;
	public static readonly ID = 17;
	public static readonly NUMBER = 18;
	public static readonly STRING = 19;
	public static readonly WS = 20;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_classDeclaration = 0;
	public static readonly RULE_memberDeclaration = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_functionInvocation = 5;
	public static readonly RULE_functionVarAssignment = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_parameterList = 8;
	public static readonly RULE_jsx = 9;
	public static readonly RULE_jsxContent = 10;
	public static readonly RULE_literal = 11;
	public static readonly RULE_booleanExpression = 12;
	public static readonly RULE_argumentList = 13;
	public static readonly literalNames: (string | null)[] = [ null, "'class'", 
                                                            "'{'", "'}'", 
                                                            "'='", "';'", 
                                                            "'int'", "'string'", 
                                                            "'boolean'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'<'", 
                                                            "'>'", "'</'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "BOOLEAN", 
                                                             "ID", "NUMBER", 
                                                             "STRING", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"classDeclaration", "memberDeclaration", "variableDeclaration", "type", 
		"functionDeclaration", "functionInvocation", "functionVarAssignment", 
		"parameter", "parameterList", "jsx", "jsxContent", "literal", "booleanExpression", 
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
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyLanguageParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.match(MyLanguageParser.T__0);
			this.state = 29;
			this.match(MyLanguageParser.ID);
			this.state = 30;
			this.match(MyLanguageParser.T__1);
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 140224) !== 0)) {
				{
				{
				this.state = 31;
				this.memberDeclaration();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
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
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 39;
				this.variableDeclaration();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 40;
				this.functionDeclaration();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 41;
				this.functionInvocation();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 42;
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
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 45;
				this.type_();
				this.state = 46;
				this.match(MyLanguageParser.ID);
				this.state = 47;
				this.match(MyLanguageParser.T__3);
				this.state = 48;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 851968) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 49;
				this.match(MyLanguageParser.T__4);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 51;
				this.type_();
				this.state = 52;
				this.match(MyLanguageParser.ID);
				this.state = 53;
				this.match(MyLanguageParser.T__4);
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
		this.enterRule(localctx, 6, MyLanguageParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
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
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MyLanguageParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(MyLanguageParser.T__8);
			this.state = 60;
			this.match(MyLanguageParser.ID);
			this.state = 61;
			this.match(MyLanguageParser.T__9);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0)) {
				{
				this.state = 62;
				this.parameterList();
				}
			}

			this.state = 65;
			this.match(MyLanguageParser.T__10);
			this.state = 66;
			this.match(MyLanguageParser.T__1);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131520) !== 0)) {
				{
				this.state = 69;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
				case 7:
				case 8:
					{
					this.state = 67;
					this.variableDeclaration();
					}
					break;
				case 17:
					{
					this.state = 68;
					this.functionVarAssignment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 74;
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
		this.enterRule(localctx, 10, MyLanguageParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(MyLanguageParser.ID);
			this.state = 77;
			this.match(MyLanguageParser.T__9);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 851968) !== 0)) {
				{
				this.state = 78;
				this.argumentList();
				}
			}

			this.state = 81;
			this.match(MyLanguageParser.T__10);
			this.state = 82;
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
		this.enterRule(localctx, 12, MyLanguageParser.RULE_functionVarAssignment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(MyLanguageParser.ID);
			this.state = 85;
			this.match(MyLanguageParser.T__3);
			this.state = 86;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 458752) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 87;
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
		this.enterRule(localctx, 14, MyLanguageParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			this.type_();
			this.state = 90;
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
		this.enterRule(localctx, 16, MyLanguageParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.parameter();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 93;
				this.match(MyLanguageParser.T__11);
				this.state = 94;
				this.parameter();
				}
				}
				this.state = 99;
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
		this.enterRule(localctx, 18, MyLanguageParser.RULE_jsx);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
			this.match(MyLanguageParser.T__12);
			this.state = 101;
			this.match(MyLanguageParser.ID);
			this.state = 102;
			this.match(MyLanguageParser.T__13);
			this.state = 103;
			this.jsxContent();
			this.state = 104;
			this.match(MyLanguageParser.T__14);
			this.state = 105;
			this.match(MyLanguageParser.ID);
			this.state = 106;
			this.match(MyLanguageParser.T__13);
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
	public jsxContent(): JsxContentContext {
		let localctx: JsxContentContext = new JsxContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MyLanguageParser.RULE_jsxContent);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 108;
				this.jsx();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 109;
				this.match(MyLanguageParser.STRING);
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
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MyLanguageParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 851968) !== 0))) {
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
	public booleanExpression(): BooleanExpressionContext {
		let localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MyLanguageParser.RULE_booleanExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this.match(MyLanguageParser.BOOLEAN);
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
		this.enterRule(localctx, 26, MyLanguageParser.RULE_argumentList);
		let _la: number;
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 116;
				this.literal();
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 117;
					this.match(MyLanguageParser.T__11);
					this.state = 118;
					this.literal();
					}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 124;
				this.booleanExpression();
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

	public static readonly _serializedATN: number[] = [4,1,20,128,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,1,0,1,0,1,0,5,0,33,8,0,10,0,12,
	0,36,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,3,2,56,8,2,1,3,1,3,1,4,1,4,1,4,1,4,3,4,64,8,4,1,4,1,4,1,4,1,
	4,5,4,70,8,4,10,4,12,4,73,9,4,1,4,1,4,1,5,1,5,1,5,3,5,80,8,5,1,5,1,5,1,
	5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,5,8,96,8,8,10,8,12,8,99,9,
	8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,111,8,10,1,11,1,11,1,12,
	1,12,1,13,1,13,1,13,5,13,120,8,13,10,13,12,13,123,9,13,1,13,3,13,126,8,
	13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,3,2,0,16,16,18,19,
	1,0,6,8,1,0,16,18,126,0,28,1,0,0,0,2,43,1,0,0,0,4,55,1,0,0,0,6,57,1,0,0,
	0,8,59,1,0,0,0,10,76,1,0,0,0,12,84,1,0,0,0,14,89,1,0,0,0,16,92,1,0,0,0,
	18,100,1,0,0,0,20,110,1,0,0,0,22,112,1,0,0,0,24,114,1,0,0,0,26,125,1,0,
	0,0,28,29,5,1,0,0,29,30,5,17,0,0,30,34,5,2,0,0,31,33,3,2,1,0,32,31,1,0,
	0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,
	0,37,38,5,3,0,0,38,1,1,0,0,0,39,44,3,4,2,0,40,44,3,8,4,0,41,44,3,10,5,0,
	42,44,3,18,9,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,
	44,3,1,0,0,0,45,46,3,6,3,0,46,47,5,17,0,0,47,48,5,4,0,0,48,49,7,0,0,0,49,
	50,5,5,0,0,50,56,1,0,0,0,51,52,3,6,3,0,52,53,5,17,0,0,53,54,5,5,0,0,54,
	56,1,0,0,0,55,45,1,0,0,0,55,51,1,0,0,0,56,5,1,0,0,0,57,58,7,1,0,0,58,7,
	1,0,0,0,59,60,5,9,0,0,60,61,5,17,0,0,61,63,5,10,0,0,62,64,3,16,8,0,63,62,
	1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,11,0,0,66,71,5,2,0,0,67,70,
	3,4,2,0,68,70,3,12,6,0,69,67,1,0,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,
	1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,3,0,0,75,9,1,
	0,0,0,76,77,5,17,0,0,77,79,5,10,0,0,78,80,3,26,13,0,79,78,1,0,0,0,79,80,
	1,0,0,0,80,81,1,0,0,0,81,82,5,11,0,0,82,83,5,5,0,0,83,11,1,0,0,0,84,85,
	5,17,0,0,85,86,5,4,0,0,86,87,7,2,0,0,87,88,5,5,0,0,88,13,1,0,0,0,89,90,
	3,6,3,0,90,91,5,17,0,0,91,15,1,0,0,0,92,97,3,14,7,0,93,94,5,12,0,0,94,96,
	3,14,7,0,95,93,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,17,
	1,0,0,0,99,97,1,0,0,0,100,101,5,13,0,0,101,102,5,17,0,0,102,103,5,14,0,
	0,103,104,3,20,10,0,104,105,5,15,0,0,105,106,5,17,0,0,106,107,5,14,0,0,
	107,19,1,0,0,0,108,111,3,18,9,0,109,111,5,19,0,0,110,108,1,0,0,0,110,109,
	1,0,0,0,111,21,1,0,0,0,112,113,7,0,0,0,113,23,1,0,0,0,114,115,5,16,0,0,
	115,25,1,0,0,0,116,121,3,22,11,0,117,118,5,12,0,0,118,120,3,22,11,0,119,
	117,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,126,1,0,
	0,0,123,121,1,0,0,0,124,126,3,24,12,0,125,116,1,0,0,0,125,124,1,0,0,0,126,
	27,1,0,0,0,11,34,43,55,63,69,71,79,97,110,121,125];

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
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyLanguageParser.ID, i);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MyLanguageParser.NUMBER, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MyLanguageParser.BOOLEAN, 0);
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
	public jsxContent(): JsxContentContext {
		return this.getTypedRuleContext(JsxContentContext, 0) as JsxContentContext;
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


export class JsxContentContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx(): JsxContext {
		return this.getTypedRuleContext(JsxContext, 0) as JsxContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(MyLanguageParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxContent;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxContent) {
	 		listener.enterJsxContent(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxContent) {
	 		listener.exitJsxContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitJsxContent) {
			return visitor.visitJsxContent(this);
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


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MyLanguageParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_booleanExpression;
	}
	public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterBooleanExpression) {
	 		listener.enterBooleanExpression(this);
		}
	}
	public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitBooleanExpression) {
	 		listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
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
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
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
