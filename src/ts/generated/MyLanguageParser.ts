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
} from 'antlr4'
import MyLanguageListener from './MyLanguageListener.js'
import MyLanguageVisitor from './MyLanguageVisitor.js'

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MyLanguageParser extends Parser {
    public static readonly T__0 = 1
    public static readonly T__1 = 2
    public static readonly T__2 = 3
    public static readonly T__3 = 4
    public static readonly T__4 = 5
    public static readonly T__5 = 6
    public static readonly T__6 = 7
    public static readonly T__7 = 8
    public static readonly T__8 = 9
    public static readonly T__9 = 10
    public static readonly T__10 = 11
    public static readonly T__11 = 12
    public static readonly T__12 = 13
    public static readonly T__13 = 14
    public static readonly T__14 = 15
    public static readonly T__15 = 16
    public static readonly T__16 = 17
    public static readonly T__17 = 18
    public static readonly T__18 = 19
    public static readonly T__19 = 20
    public static readonly T__20 = 21
    public static readonly T__21 = 22
    public static readonly T__22 = 23
    public static readonly T__23 = 24
    public static readonly T__24 = 25
    public static readonly T__25 = 26
    public static readonly T__26 = 27
    public static readonly T__27 = 28
    public static readonly BOOLEAN = 29
    public static readonly ID = 30
    public static readonly NUMBER = 31
    public static readonly STRING = 32
    public static readonly WS = 33
    public static readonly EOF = Token.EOF
    public static readonly RULE_file = 0
    public static readonly RULE_classDeclaration = 1
    public static readonly RULE_memberDeclaration = 2
    public static readonly RULE_variableDeclaration = 3
    public static readonly RULE_type = 4
    public static readonly RULE_expression = 5
    public static readonly RULE_functionDeclaration = 6
    public static readonly RULE_functionInvocation = 7
    public static readonly RULE_functionVarAssignment = 8
    public static readonly RULE_parameter = 9
    public static readonly RULE_parameterList = 10
    public static readonly RULE_jsx = 11
    public static readonly RULE_jsxContent = 12
    public static readonly RULE_literal = 13
    public static readonly RULE_booleanExpression = 14
    public static readonly RULE_argumentList = 15
    public static readonly literalNames: (string | null)[] = [ null, '\'class\'',
        '\'{\'', '\'}\'',
        '\'=\'', '\';\'',
        '\'int\'', '\'string\'',
        '\'boolean\'',
        '\'(\'', '\')\'',
        '\'*\'', '\'/\'',
        '\'%\'', '\'+\'',
        '\'-\'', '\'<\'',
        '\'>\'', '\'<=\'',
        '\'>=\'', '\'==\'',
        '\'!=\'', '\'&&\'',
        '\'||\'', '\'?\'',
        '\':\'', '\'function\'',
        '\',\'', '\'</\'' ]
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
        null, 'BOOLEAN',
        'ID', 'NUMBER',
        'STRING', 'WS' ]
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'file', 'classDeclaration', 'memberDeclaration', 'variableDeclaration',
        'type', 'expression', 'functionDeclaration', 'functionInvocation', 'functionVarAssignment',
        'parameter', 'parameterList', 'jsx', 'jsxContent', 'literal', 'booleanExpression',
        'argumentList'
    ]
    public get grammarFileName(): string { return 'MyLanguage.g4' }
    public get literalNames(): (string | null)[] { return MyLanguageParser.literalNames }
    public get symbolicNames(): (string | null)[] { return MyLanguageParser.symbolicNames }
    public get ruleNames(): string[] { return MyLanguageParser.ruleNames }
    public get serializedATN(): number[] { return MyLanguageParser._serializedATN }

    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message)
    }

    constructor(input: TokenStream) {
        super(input)
        this._interp = new ParserATNSimulator(this, MyLanguageParser._ATN, MyLanguageParser.DecisionsToDFA, new PredictionContextCache())
    }
    // @RuleVersion(0)
    public file(): FileContext {
        const localctx: FileContext = new FileContext(this, this._ctx, this.state)
        this.enterRule(localctx, 0, MyLanguageParser.RULE_file)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 32
                this.classDeclaration()
                this.state = 33
                this.match(MyLanguageParser.EOF)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public classDeclaration(): ClassDeclarationContext {
        const localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 2, MyLanguageParser.RULE_classDeclaration)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 35
                this.match(MyLanguageParser.T__0)
                this.state = 36
                this.match(MyLanguageParser.ID)
                this.state = 37
                this.match(MyLanguageParser.T__1)
                this.state = 41
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1140916672) !== 0)) {
                    {
                        {
                            this.state = 38
                            this.memberDeclaration()
                        }
                    }
                    this.state = 43
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 44
                this.match(MyLanguageParser.T__2)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public memberDeclaration(): MemberDeclarationContext {
        const localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 4, MyLanguageParser.RULE_memberDeclaration)
        try {
            this.state = 50
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case 6:
                case 7:
                case 8:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 46
                        this.variableDeclaration()
                    }
                    break
                case 26:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 47
                        this.functionDeclaration()
                    }
                    break
                case 30:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 48
                        this.functionInvocation()
                    }
                    break
                case 16:
                    this.enterOuterAlt(localctx, 4)
                    {
                        this.state = 49
                        this.jsx()
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public variableDeclaration(): VariableDeclarationContext {
        const localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 6, MyLanguageParser.RULE_variableDeclaration)
        try {
            this.state = 62
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 52
                        this.type_()
                        this.state = 53
                        this.match(MyLanguageParser.ID)
                        this.state = 54
                        this.match(MyLanguageParser.T__3)
                        this.state = 55
                        this.expression(0)
                        this.state = 56
                        this.match(MyLanguageParser.T__4)
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 58
                        this.type_()
                        this.state = 59
                        this.match(MyLanguageParser.ID)
                        this.state = 60
                        this.match(MyLanguageParser.T__4)
                    }
                    break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public type_(): TypeContext {
        const localctx: TypeContext = new TypeContext(this, this._ctx, this.state)
        this.enterRule(localctx, 8, MyLanguageParser.RULE_type)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 64
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
                    this._errHandler.recoverInline(this)
                }
                else {
                    this._errHandler.reportMatch(this)
			    this.consume()
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    // @RuleVersion(0)
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0
        }

        const _parentctx: ParserRuleContext = this._ctx
        const _parentState: number = this.state
        let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState)
        let _prevctx: ExpressionContext = localctx
        const _startState = 10
        this.enterRecursionRule(localctx, 10, MyLanguageParser.RULE_expression, _p)
        let _la: number
        try {
            let _alt: number
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 75
                this._errHandler.sync(this)
                switch (this._input.LA(1)) {
                    case 9:
                        {
                            this.state = 67
                            this.match(MyLanguageParser.T__8)
                            this.state = 68
                            this.expression(0)
                            this.state = 69
                            this.match(MyLanguageParser.T__9)
                        }
                        break
                    case 30:
                        {
                            this.state = 71
                            this.match(MyLanguageParser.ID)
                        }
                        break
                    case 31:
                        {
                            this.state = 72
                            this.match(MyLanguageParser.NUMBER)
                        }
                        break
                    case 32:
                        {
                            this.state = 73
                            this.match(MyLanguageParser.STRING)
                        }
                        break
                    case 29:
                        {
                            this.state = 74
                            this.match(MyLanguageParser.BOOLEAN)
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                }
                this._ctx.stop = this._input.LT(-1)
                this.state = 100
                this._errHandler.sync(this)
                _alt = this._interp.adaptivePredict(this._input, 5, this._ctx)
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent()
                        }
                        _prevctx = localctx
                        {
                            this.state = 98
                            this._errHandler.sync(this)
                            switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
                                case 1:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 77
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                                        }
                                        this.state = 78
                                        _la = this._input.LA(1)
                                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
                                            this._errHandler.recoverInline(this)
                                        }
                                        else {
                                            this._errHandler.reportMatch(this)
						    this.consume()
                                        }
                                        this.state = 79
                                        this.expression(11)
                                    }
                                    break
                                case 2:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 80
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                                        }
                                        this.state = 81
                                        _la = this._input.LA(1)
                                        if(!(_la===14 || _la===15)) {
                                            this._errHandler.recoverInline(this)
                                        }
                                        else {
                                            this._errHandler.reportMatch(this)
						    this.consume()
                                        }
                                        this.state = 82
                                        this.expression(10)
                                    }
                                    break
                                case 3:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 83
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                                        }
                                        this.state = 84
                                        _la = this._input.LA(1)
                                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 983040) !== 0))) {
                                            this._errHandler.recoverInline(this)
                                        }
                                        else {
                                            this._errHandler.reportMatch(this)
						    this.consume()
                                        }
                                        this.state = 85
                                        this.expression(9)
                                    }
                                    break
                                case 4:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 86
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                                        }
                                        this.state = 87
                                        _la = this._input.LA(1)
                                        if(!(_la===20 || _la===21)) {
                                            this._errHandler.recoverInline(this)
                                        }
                                        else {
                                            this._errHandler.reportMatch(this)
						    this.consume()
                                        }
                                        this.state = 88
                                        this.expression(8)
                                    }
                                    break
                                case 5:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 89
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                                        }
                                        this.state = 90
                                        _la = this._input.LA(1)
                                        if(!(_la===22 || _la===23)) {
                                            this._errHandler.recoverInline(this)
                                        }
                                        else {
                                            this._errHandler.reportMatch(this)
						    this.consume()
                                        }
                                        this.state = 91
                                        this.expression(7)
                                    }
                                    break
                                case 6:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState)
                                        this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression)
                                        this.state = 92
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                                        }
                                        this.state = 93
                                        this.match(MyLanguageParser.T__23)
                                        this.state = 94
                                        this.expression(0)
                                        this.state = 95
                                        this.match(MyLanguageParser.T__24)
                                        this.state = 96
                                        this.expression(6)
                                    }
                                    break
                            }
                        }
                    }
                    this.state = 102
                    this._errHandler.sync(this)
                    _alt = this._interp.adaptivePredict(this._input, 5, this._ctx)
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx)
        }
        return localctx
    }
    // @RuleVersion(0)
    public functionDeclaration(): FunctionDeclarationContext {
        const localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 12, MyLanguageParser.RULE_functionDeclaration)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 103
                this.match(MyLanguageParser.T__25)
                this.state = 104
                this.match(MyLanguageParser.ID)
                this.state = 105
                this.match(MyLanguageParser.T__8)
                this.state = 107
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0)) {
                    {
                        this.state = 106
                        this.parameterList()
                    }
                }

                this.state = 109
                this.match(MyLanguageParser.T__9)
                this.state = 110
                this.match(MyLanguageParser.T__1)
                this.state = 115
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073742272) !== 0)) {
                    {
                        this.state = 113
                        this._errHandler.sync(this)
                        switch (this._input.LA(1)) {
                            case 6:
                            case 7:
                            case 8:
                                {
                                    this.state = 111
                                    this.variableDeclaration()
                                }
                                break
                            case 30:
                                {
                                    this.state = 112
                                    this.functionVarAssignment()
                                }
                                break
                            default:
                                throw new NoViableAltException(this)
                        }
                    }
                    this.state = 117
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 118
                this.match(MyLanguageParser.T__2)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public functionInvocation(): FunctionInvocationContext {
        const localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 14, MyLanguageParser.RULE_functionInvocation)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 120
                this.match(MyLanguageParser.ID)
                this.state = 121
                this.match(MyLanguageParser.T__8)
                this.state = 123
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 13) !== 0)) {
                    {
                        this.state = 122
                        this.argumentList()
                    }
                }

                this.state = 125
                this.match(MyLanguageParser.T__9)
                this.state = 126
                this.match(MyLanguageParser.T__4)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public functionVarAssignment(): FunctionVarAssignmentContext {
        const localctx: FunctionVarAssignmentContext = new FunctionVarAssignmentContext(this, this._ctx, this.state)
        this.enterRule(localctx, 16, MyLanguageParser.RULE_functionVarAssignment)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 128
                this.match(MyLanguageParser.ID)
                this.state = 129
                this.match(MyLanguageParser.T__3)
                this.state = 130
                this.expression(0)
                this.state = 131
                this.match(MyLanguageParser.T__4)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public parameter(): ParameterContext {
        const localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state)
        this.enterRule(localctx, 18, MyLanguageParser.RULE_parameter)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 133
                this.type_()
                this.state = 134
                this.match(MyLanguageParser.ID)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public parameterList(): ParameterListContext {
        const localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state)
        this.enterRule(localctx, 20, MyLanguageParser.RULE_parameterList)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 136
                this.parameter()
                this.state = 141
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la===27) {
                    {
                        {
                            this.state = 137
                            this.match(MyLanguageParser.T__26)
                            this.state = 138
                            this.parameter()
                        }
                    }
                    this.state = 143
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public jsx(): JsxContext {
        const localctx: JsxContext = new JsxContext(this, this._ctx, this.state)
        this.enterRule(localctx, 22, MyLanguageParser.RULE_jsx)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 144
                this.match(MyLanguageParser.T__15)
                this.state = 145
                this.match(MyLanguageParser.ID)
                this.state = 146
                this.match(MyLanguageParser.T__16)
                this.state = 147
                this.jsxContent()
                this.state = 148
                this.match(MyLanguageParser.T__27)
                this.state = 149
                this.match(MyLanguageParser.ID)
                this.state = 150
                this.match(MyLanguageParser.T__16)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public jsxContent(): JsxContentContext {
        const localctx: JsxContentContext = new JsxContentContext(this, this._ctx, this.state)
        this.enterRule(localctx, 24, MyLanguageParser.RULE_jsxContent)
        try {
            this.state = 154
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case 16:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 152
                        this.jsx()
                    }
                    break
                case 32:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 153
                        this.match(MyLanguageParser.STRING)
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public literal(): LiteralContext {
        const localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state)
        this.enterRule(localctx, 26, MyLanguageParser.RULE_literal)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 156
                _la = this._input.LA(1)
                if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 13) !== 0))) {
                    this._errHandler.recoverInline(this)
                }
                else {
                    this._errHandler.reportMatch(this)
			    this.consume()
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public booleanExpression(): BooleanExpressionContext {
        const localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, this.state)
        this.enterRule(localctx, 28, MyLanguageParser.RULE_booleanExpression)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 158
                this.match(MyLanguageParser.BOOLEAN)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }
    // @RuleVersion(0)
    public argumentList(): ArgumentListContext {
        const localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state)
        this.enterRule(localctx, 30, MyLanguageParser.RULE_argumentList)
        let _la: number
        try {
            this.state = 169
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 160
                        this.literal()
                        this.state = 165
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                        while (_la===27) {
                            {
                                {
                                    this.state = 161
                                    this.match(MyLanguageParser.T__26)
                                    this.state = 162
                                    this.literal()
                                }
                            }
                            this.state = 167
                            this._errHandler.sync(this)
                            _la = this._input.LA(1)
                        }
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 168
                        this.booleanExpression()
                    }
                    break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return localctx
    }

    public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 5:
                return this.expression_sempred(localctx as ExpressionContext, predIndex)
        }
        return true
    }
    private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 10)
            case 1:
                return this.precpred(this._ctx, 9)
            case 2:
                return this.precpred(this._ctx, 8)
            case 3:
                return this.precpred(this._ctx, 7)
            case 4:
                return this.precpred(this._ctx, 6)
            case 5:
                return this.precpred(this._ctx, 5)
        }
        return true
    }

    public static readonly _serializedATN: number[] = [4,1,33,172,2,0,7,0,2,
        1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
        10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,
        1,1,1,1,1,1,1,5,1,40,8,1,10,1,12,1,43,9,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,51,
        8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,63,8,3,1,4,1,4,1,5,1,5,
        1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,76,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
        1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,99,8,5,10,5,12,
        5,102,9,5,1,6,1,6,1,6,1,6,3,6,108,8,6,1,6,1,6,1,6,1,6,5,6,114,8,6,10,6,
        12,6,117,9,6,1,6,1,6,1,7,1,7,1,7,3,7,124,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
        8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,5,10,140,8,10,10,10,12,10,143,9,10,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,3,12,155,8,12,1,13,1,13,1,
        14,1,14,1,15,1,15,1,15,5,15,164,8,15,10,15,12,15,167,9,15,1,15,3,15,170,
        8,15,1,15,0,1,10,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,7,1,0,
        6,8,1,0,11,13,1,0,14,15,1,0,16,19,1,0,20,21,1,0,22,23,2,0,29,29,31,32,178,
        0,32,1,0,0,0,2,35,1,0,0,0,4,50,1,0,0,0,6,62,1,0,0,0,8,64,1,0,0,0,10,75,
        1,0,0,0,12,103,1,0,0,0,14,120,1,0,0,0,16,128,1,0,0,0,18,133,1,0,0,0,20,
        136,1,0,0,0,22,144,1,0,0,0,24,154,1,0,0,0,26,156,1,0,0,0,28,158,1,0,0,0,
        30,169,1,0,0,0,32,33,3,2,1,0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,5,1,0,0,36,
        37,5,30,0,0,37,41,5,2,0,0,38,40,3,4,2,0,39,38,1,0,0,0,40,43,1,0,0,0,41,
        39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,3,0,0,45,3,
        1,0,0,0,46,51,3,6,3,0,47,51,3,12,6,0,48,51,3,14,7,0,49,51,3,22,11,0,50,
        46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,5,1,0,0,0,52,53,
        3,8,4,0,53,54,5,30,0,0,54,55,5,4,0,0,55,56,3,10,5,0,56,57,5,5,0,0,57,63,
        1,0,0,0,58,59,3,8,4,0,59,60,5,30,0,0,60,61,5,5,0,0,61,63,1,0,0,0,62,52,
        1,0,0,0,62,58,1,0,0,0,63,7,1,0,0,0,64,65,7,0,0,0,65,9,1,0,0,0,66,67,6,5,
        -1,0,67,68,5,9,0,0,68,69,3,10,5,0,69,70,5,10,0,0,70,76,1,0,0,0,71,76,5,
        30,0,0,72,76,5,31,0,0,73,76,5,32,0,0,74,76,5,29,0,0,75,66,1,0,0,0,75,71,
        1,0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,100,1,0,0,0,77,78,
        10,10,0,0,78,79,7,1,0,0,79,99,3,10,5,11,80,81,10,9,0,0,81,82,7,2,0,0,82,
        99,3,10,5,10,83,84,10,8,0,0,84,85,7,3,0,0,85,99,3,10,5,9,86,87,10,7,0,0,
        87,88,7,4,0,0,88,99,3,10,5,8,89,90,10,6,0,0,90,91,7,5,0,0,91,99,3,10,5,
        7,92,93,10,5,0,0,93,94,5,24,0,0,94,95,3,10,5,0,95,96,5,25,0,0,96,97,3,10,
        5,6,97,99,1,0,0,0,98,77,1,0,0,0,98,80,1,0,0,0,98,83,1,0,0,0,98,86,1,0,0,
        0,98,89,1,0,0,0,98,92,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,
        0,0,101,11,1,0,0,0,102,100,1,0,0,0,103,104,5,26,0,0,104,105,5,30,0,0,105,
        107,5,9,0,0,106,108,3,20,10,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,
        0,0,0,109,110,5,10,0,0,110,115,5,2,0,0,111,114,3,6,3,0,112,114,3,16,8,0,
        113,111,1,0,0,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,
        1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,3,0,0,119,13,1,0,0,0,
        120,121,5,30,0,0,121,123,5,9,0,0,122,124,3,30,15,0,123,122,1,0,0,0,123,
        124,1,0,0,0,124,125,1,0,0,0,125,126,5,10,0,0,126,127,5,5,0,0,127,15,1,0,
        0,0,128,129,5,30,0,0,129,130,5,4,0,0,130,131,3,10,5,0,131,132,5,5,0,0,132,
        17,1,0,0,0,133,134,3,8,4,0,134,135,5,30,0,0,135,19,1,0,0,0,136,141,3,18,
        9,0,137,138,5,27,0,0,138,140,3,18,9,0,139,137,1,0,0,0,140,143,1,0,0,0,141,
        139,1,0,0,0,141,142,1,0,0,0,142,21,1,0,0,0,143,141,1,0,0,0,144,145,5,16,
        0,0,145,146,5,30,0,0,146,147,5,17,0,0,147,148,3,24,12,0,148,149,5,28,0,
        0,149,150,5,30,0,0,150,151,5,17,0,0,151,23,1,0,0,0,152,155,3,22,11,0,153,
        155,5,32,0,0,154,152,1,0,0,0,154,153,1,0,0,0,155,25,1,0,0,0,156,157,7,6,
        0,0,157,27,1,0,0,0,158,159,5,29,0,0,159,29,1,0,0,0,160,165,3,26,13,0,161,
        162,5,27,0,0,162,164,3,26,13,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,
        1,0,0,0,165,166,1,0,0,0,166,170,1,0,0,0,167,165,1,0,0,0,168,170,3,28,14,
        0,169,160,1,0,0,0,169,168,1,0,0,0,170,31,1,0,0,0,14,41,50,62,75,98,100,
        107,113,115,123,141,154,165,169]

    private static __ATN: ATN
    public static get _ATN(): ATN {
        if (!MyLanguageParser.__ATN) {
            MyLanguageParser.__ATN = new ATNDeserializer().deserialize(MyLanguageParser._serializedATN)
        }

        return MyLanguageParser.__ATN
    }


    static DecisionsToDFA = MyLanguageParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) )

}

export class FileContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public classDeclaration(): ClassDeclarationContext {
        return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext
    }
    public EOF(): TerminalNode {
        return this.getToken(MyLanguageParser.EOF, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_file
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitFile) {
            return visitor.visitFile(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ClassDeclarationContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public memberDeclaration_list(): MemberDeclarationContext[] {
        return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[]
    }
    public memberDeclaration(i: number): MemberDeclarationContext {
        return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_classDeclaration
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class MemberDeclarationContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public variableDeclaration(): VariableDeclarationContext {
        return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext
    }
    public functionDeclaration(): FunctionDeclarationContext {
        return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext
    }
    public functionInvocation(): FunctionInvocationContext {
        return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext
    }
    public jsx(): JsxContext {
        return this.getTypedRuleContext(JsxContext, 0) as JsxContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_memberDeclaration
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterMemberDeclaration) {
	 		listener.enterMemberDeclaration(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitMemberDeclaration) {
	 		listener.exitMemberDeclaration(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitMemberDeclaration) {
            return visitor.visitMemberDeclaration(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class VariableDeclarationContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public type_(): TypeContext {
        return this.getTypedRuleContext(TypeContext, 0) as TypeContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_variableDeclaration
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class TypeContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_type
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitType) {
            return visitor.visitType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ExpressionContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[]
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public NUMBER(): TerminalNode {
        return this.getToken(MyLanguageParser.NUMBER, 0)
    }
    public STRING(): TerminalNode {
        return this.getToken(MyLanguageParser.STRING, 0)
    }
    public BOOLEAN(): TerminalNode {
        return this.getToken(MyLanguageParser.BOOLEAN, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_expression
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class FunctionDeclarationContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public parameterList(): ParameterListContext {
        return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext
    }
    public variableDeclaration_list(): VariableDeclarationContext[] {
        return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[]
    }
    public variableDeclaration(i: number): VariableDeclarationContext {
        return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext
    }
    public functionVarAssignment_list(): FunctionVarAssignmentContext[] {
        return this.getTypedRuleContexts(FunctionVarAssignmentContext) as FunctionVarAssignmentContext[]
    }
    public functionVarAssignment(i: number): FunctionVarAssignmentContext {
        return this.getTypedRuleContext(FunctionVarAssignmentContext, i) as FunctionVarAssignmentContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionDeclaration
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class FunctionInvocationContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public argumentList(): ArgumentListContext {
        return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionInvocation
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionInvocation) {
	 		listener.enterFunctionInvocation(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionInvocation) {
	 		listener.exitFunctionInvocation(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitFunctionInvocation) {
            return visitor.visitFunctionInvocation(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class FunctionVarAssignmentContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_functionVarAssignment
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterFunctionVarAssignment) {
	 		listener.enterFunctionVarAssignment(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitFunctionVarAssignment) {
	 		listener.exitFunctionVarAssignment(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitFunctionVarAssignment) {
            return visitor.visitFunctionVarAssignment(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ParameterContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public type_(): TypeContext {
        return this.getTypedRuleContext(TypeContext, 0) as TypeContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_parameter
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ParameterListContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public parameter_list(): ParameterContext[] {
        return this.getTypedRuleContexts(ParameterContext) as ParameterContext[]
    }
    public parameter(i: number): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, i) as ParameterContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_parameterList
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class JsxContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID)
    }
    public ID(i: number): TerminalNode {
        return this.getToken(MyLanguageParser.ID, i)
    }
    public jsxContent(): JsxContentContext {
        return this.getTypedRuleContext(JsxContentContext, 0) as JsxContentContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsx
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsx) {
	 		listener.enterJsx(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsx) {
	 		listener.exitJsx(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitJsx) {
            return visitor.visitJsx(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class JsxContentContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public jsx(): JsxContext {
        return this.getTypedRuleContext(JsxContext, 0) as JsxContext
    }
    public STRING(): TerminalNode {
        return this.getToken(MyLanguageParser.STRING, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxContent
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxContent) {
	 		listener.enterJsxContent(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxContent) {
	 		listener.exitJsxContent(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitJsxContent) {
            return visitor.visitJsxContent(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class LiteralContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public NUMBER(): TerminalNode {
        return this.getToken(MyLanguageParser.NUMBER, 0)
    }
    public STRING(): TerminalNode {
        return this.getToken(MyLanguageParser.STRING, 0)
    }
    public BOOLEAN(): TerminalNode {
        return this.getToken(MyLanguageParser.BOOLEAN, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_literal
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class BooleanExpressionContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public BOOLEAN(): TerminalNode {
        return this.getToken(MyLanguageParser.BOOLEAN, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_booleanExpression
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterBooleanExpression) {
	 		listener.enterBooleanExpression(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitBooleanExpression) {
	 		listener.exitBooleanExpression(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitBooleanExpression) {
            return visitor.visitBooleanExpression(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ArgumentListContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public literal_list(): LiteralContext[] {
        return this.getTypedRuleContexts(LiteralContext) as LiteralContext[]
    }
    public literal(i: number): LiteralContext {
        return this.getTypedRuleContext(LiteralContext, i) as LiteralContext
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_argumentList
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
