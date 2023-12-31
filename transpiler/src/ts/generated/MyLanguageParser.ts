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
    public static readonly BOOLEAN = 20
    public static readonly ID = 21
    public static readonly STRING = 22
    public static readonly NUMBER = 23
    public static readonly WS = 24
    public static readonly EOF = Token.EOF
    public static readonly RULE_root = 0
    public static readonly RULE_memberDeclaration = 1
    public static readonly RULE_variableDeclaration = 2
    public static readonly RULE_returnStatement = 3
    public static readonly RULE_returnType = 4
    public static readonly RULE_varType = 5
    public static readonly RULE_expression = 6
    public static readonly RULE_functionDeclaration = 7
    public static readonly RULE_functionInvocation = 8
    public static readonly RULE_functionVarAssignment = 9
    public static readonly RULE_parameter = 10
    public static readonly RULE_parameterList = 11
    public static readonly RULE_jsx = 12
    public static readonly RULE_jsxOpen = 13
    public static readonly RULE_jsxClose = 14
    public static readonly RULE_literal = 15
    public static readonly RULE_argumentList = 16
    public static readonly RULE_objectPropertyAccess = 17
    public static readonly literalNames: (string | null)[] = [ null, '\':\'',
        '\'=\'', '\'return\'',
        '\'number\'',
        '\'string\'',
        '\'boolean\'',
        '\'const\'', '\'let\'',
        '\'var\'', '\'(\'',
        '\')\'', '\'function\'',
        '\'{\'', '\'}\'',
        '\'.\'', '\',\'',
        '\'<\'', '\'>\'',
        '\'</\'' ]
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
        'BOOLEAN',
        'ID', 'STRING',
        'NUMBER', 'WS' ]
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'root', 'memberDeclaration', 'variableDeclaration', 'returnStatement',
        'returnType', 'varType', 'expression', 'functionDeclaration', 'functionInvocation',
        'functionVarAssignment', 'parameter', 'parameterList', 'jsx', 'jsxOpen',
        'jsxClose', 'literal', 'argumentList', 'objectPropertyAccess'
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
    public root(): RootContext {
        const localctx: RootContext = new RootContext(this, this._ctx, this.state)
        this.enterRule(localctx, 0, MyLanguageParser.RULE_root)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 37
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 36
                            this.memberDeclaration()
                        }
                    }
                    this.state = 39
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2233224) !== 0))
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
        this.enterRule(localctx, 2, MyLanguageParser.RULE_memberDeclaration)
        try {
            this.state = 47
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 41
                        this.variableDeclaration()
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 42
                        this.functionDeclaration()
                    }
                    break
                case 3:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 43
                        this.functionInvocation()
                    }
                    break
                case 4:
                    this.enterOuterAlt(localctx, 4)
                    {
                        this.state = 44
                        this.returnStatement()
                    }
                    break
                case 5:
                    this.enterOuterAlt(localctx, 5)
                    {
                        this.state = 45
                        this.functionVarAssignment()
                    }
                    break
                case 6:
                    this.enterOuterAlt(localctx, 6)
                    {
                        this.state = 46
                        this.jsx()
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
    public variableDeclaration(): VariableDeclarationContext {
        const localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 4, MyLanguageParser.RULE_variableDeclaration)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 49
                this.varType()
                this.state = 50
                this.match(MyLanguageParser.ID)
                this.state = 53
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===1) {
                    {
                        this.state = 51
                        this.match(MyLanguageParser.T__0)
                        this.state = 52
                        this.returnType()
                    }
                }

                this.state = 61
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===2) {
                    {
                        this.state = 55
                        this.match(MyLanguageParser.T__1)
                        this.state = 59
                        this._errHandler.sync(this)
                        switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
                            case 1:
                                {
                                    this.state = 56
                                    this.literal()
                                }
                                break
                            case 2:
                                {
                                    this.state = 57
                                    this.match(MyLanguageParser.ID)
                                }
                                break
                            case 3:
                                {
                                    this.state = 58
                                    this.functionInvocation()
                                }
                                break
                        }
                    }
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
    public returnStatement(): ReturnStatementContext {
        const localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state)
        this.enterRule(localctx, 6, MyLanguageParser.RULE_returnStatement)
        try {
            this.state = 67
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 63
                        this.match(MyLanguageParser.T__2)
                        this.state = 64
                        this.expression()
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 65
                        this.functionInvocation()
                    }
                    break
                case 3:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 66
                        this.match(MyLanguageParser.ID)
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
    public returnType(): ReturnTypeContext {
        const localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state)
        this.enterRule(localctx, 8, MyLanguageParser.RULE_returnType)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 69
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
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
    public varType(): VarTypeContext {
        const localctx: VarTypeContext = new VarTypeContext(this, this._ctx, this.state)
        this.enterRule(localctx, 10, MyLanguageParser.RULE_varType)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 71
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
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
    public expression(): ExpressionContext {
        const localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state)
        this.enterRule(localctx, 12, MyLanguageParser.RULE_expression)
        try {
            this.state = 81
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 73
                        this.match(MyLanguageParser.T__9)
                        this.state = 74
                        this.expression()
                        this.state = 75
                        this.match(MyLanguageParser.T__10)
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 77
                        this.match(MyLanguageParser.ID)
                    }
                    break
                case 3:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 78
                        this.literal()
                    }
                    break
                case 4:
                    this.enterOuterAlt(localctx, 4)
                    {
                        this.state = 79
                        this.objectPropertyAccess()
                    }
                    break
                case 5:
                    this.enterOuterAlt(localctx, 5)
                    {
                        this.state = 80
                        this.jsx()
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
    public functionDeclaration(): FunctionDeclarationContext {
        const localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 14, MyLanguageParser.RULE_functionDeclaration)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 83
                this.match(MyLanguageParser.T__11)
                this.state = 84
                this.match(MyLanguageParser.ID)
                this.state = 85
                this.match(MyLanguageParser.T__9)
                this.state = 87
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===21) {
                    {
                        this.state = 86
                        this.parameterList()
                    }
                }

                this.state = 89
                this.match(MyLanguageParser.T__10)
                this.state = 90
                this.match(MyLanguageParser.T__12)
                this.state = 92
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 91
                            this.memberDeclaration()
                        }
                    }
                    this.state = 94
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2233224) !== 0))
                this.state = 96
                this.match(MyLanguageParser.T__13)
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
        this.enterRule(localctx, 16, MyLanguageParser.RULE_functionInvocation)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 100
                this._errHandler.sync(this)
                switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
                    case 1:
                        {
                            this.state = 98
                            this.match(MyLanguageParser.ID)
                            this.state = 99
                            this.match(MyLanguageParser.T__14)
                        }
                        break
                }
                this.state = 102
                this.match(MyLanguageParser.ID)
                this.state = 103
                this.match(MyLanguageParser.T__9)
                this.state = 105
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728640) !== 0)) {
                    {
                        this.state = 104
                        this.argumentList()
                    }
                }

                this.state = 107
                this.match(MyLanguageParser.T__10)
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
        this.enterRule(localctx, 18, MyLanguageParser.RULE_functionVarAssignment)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 111
                this._errHandler.sync(this)
                switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
                    case 1:
                        {
                            this.state = 109
                            this.match(MyLanguageParser.ID)
                        }
                        break
                    case 2:
                        {
                            this.state = 110
                            this.objectPropertyAccess()
                        }
                        break
                }
                this.state = 113
                this.match(MyLanguageParser.T__1)
                this.state = 114
                this.expression()
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
        this.enterRule(localctx, 20, MyLanguageParser.RULE_parameter)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 116
                this.match(MyLanguageParser.ID)
                this.state = 117
                this.match(MyLanguageParser.T__0)
                this.state = 118
                this.returnType()
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
        this.enterRule(localctx, 22, MyLanguageParser.RULE_parameterList)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 120
                this.parameter()
                this.state = 125
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la===16) {
                    {
                        {
                            this.state = 121
                            this.match(MyLanguageParser.T__15)
                            this.state = 122
                            this.parameter()
                        }
                    }
                    this.state = 127
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
        this.enterRule(localctx, 24, MyLanguageParser.RULE_jsx)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 128
                this.jsxOpen()
                this.state = 134
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15859712) !== 0)) {
                    {
                        this.state = 132
                        this._errHandler.sync(this)
                        switch (this._input.LA(1)) {
                            case 17:
                                {
                                    this.state = 129
                                    this.jsx()
                                }
                                break
                            case 20:
                            case 22:
                            case 23:
                                {
                                    this.state = 130
                                    this.literal()
                                }
                                break
                            case 21:
                                {
                                    this.state = 131
                                    this.match(MyLanguageParser.ID)
                                }
                                break
                            default:
                                throw new NoViableAltException(this)
                        }
                    }
                    this.state = 136
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 137
                this.jsxClose()
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
    public jsxOpen(): JsxOpenContext {
        const localctx: JsxOpenContext = new JsxOpenContext(this, this._ctx, this.state)
        this.enterRule(localctx, 26, MyLanguageParser.RULE_jsxOpen)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 139
                this.match(MyLanguageParser.T__16)
                this.state = 140
                this.match(MyLanguageParser.ID)
                this.state = 141
                this.match(MyLanguageParser.T__17)
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
    public jsxClose(): JsxCloseContext {
        const localctx: JsxCloseContext = new JsxCloseContext(this, this._ctx, this.state)
        this.enterRule(localctx, 28, MyLanguageParser.RULE_jsxClose)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 143
                this.match(MyLanguageParser.T__18)
                this.state = 144
                this.match(MyLanguageParser.ID)
                this.state = 145
                this.match(MyLanguageParser.T__17)
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
        this.enterRule(localctx, 30, MyLanguageParser.RULE_literal)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 147
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 13631488) !== 0))) {
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
    public argumentList(): ArgumentListContext {
        const localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state)
        this.enterRule(localctx, 32, MyLanguageParser.RULE_argumentList)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 151
                this._errHandler.sync(this)
                switch (this._input.LA(1)) {
                    case 20:
                    case 22:
                    case 23:
                        {
                            this.state = 149
                            this.literal()
                        }
                        break
                    case 21:
                        {
                            this.state = 150
                            this.match(MyLanguageParser.ID)
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                }
                this.state = 160
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la===16) {
                    {
                        {
                            this.state = 153
                            this.match(MyLanguageParser.T__15)
                            this.state = 156
                            this._errHandler.sync(this)
                            switch (this._input.LA(1)) {
                                case 20:
                                case 22:
                                case 23:
                                    {
                                        this.state = 154
                                        this.literal()
                                    }
                                    break
                                case 21:
                                    {
                                        this.state = 155
                                        this.match(MyLanguageParser.ID)
                                    }
                                    break
                                default:
                                    throw new NoViableAltException(this)
                            }
                        }
                    }
                    this.state = 162
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
    public objectPropertyAccess(): ObjectPropertyAccessContext {
        const localctx: ObjectPropertyAccessContext = new ObjectPropertyAccessContext(this, this._ctx, this.state)
        this.enterRule(localctx, 34, MyLanguageParser.RULE_objectPropertyAccess)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 163
                this.match(MyLanguageParser.ID)
                this.state = 166
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 164
                            this.match(MyLanguageParser.T__14)
                            this.state = 165
                            this.match(MyLanguageParser.ID)
                        }
                    }
                    this.state = 168
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while (_la===15)
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

    public static readonly _serializedATN: number[] = [4,1,24,171,2,0,7,0,2,
        1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
        10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
        7,17,1,0,4,0,38,8,0,11,0,12,0,39,1,1,1,1,1,1,1,1,1,1,1,1,3,1,48,8,1,1,2,
        1,2,1,2,1,2,3,2,54,8,2,1,2,1,2,1,2,1,2,3,2,60,8,2,3,2,62,8,2,1,3,1,3,1,
        3,1,3,3,3,68,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,82,
        8,6,1,7,1,7,1,7,1,7,3,7,88,8,7,1,7,1,7,1,7,4,7,93,8,7,11,7,12,7,94,1,7,
        1,7,1,8,1,8,3,8,101,8,8,1,8,1,8,1,8,3,8,106,8,8,1,8,1,8,1,9,1,9,3,9,112,
        8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,124,8,11,10,11,
        12,11,127,9,11,1,12,1,12,1,12,1,12,5,12,133,8,12,10,12,12,12,136,9,12,1,
        12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,3,16,
        152,8,16,1,16,1,16,1,16,3,16,157,8,16,5,16,159,8,16,10,16,12,16,162,9,16,
        1,17,1,17,1,17,4,17,167,8,17,11,17,12,17,168,1,17,0,0,18,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,0,3,1,0,4,6,1,0,7,9,2,0,20,20,22,23,181,
        0,37,1,0,0,0,2,47,1,0,0,0,4,49,1,0,0,0,6,67,1,0,0,0,8,69,1,0,0,0,10,71,
        1,0,0,0,12,81,1,0,0,0,14,83,1,0,0,0,16,100,1,0,0,0,18,111,1,0,0,0,20,116,
        1,0,0,0,22,120,1,0,0,0,24,128,1,0,0,0,26,139,1,0,0,0,28,143,1,0,0,0,30,
        147,1,0,0,0,32,151,1,0,0,0,34,163,1,0,0,0,36,38,3,2,1,0,37,36,1,0,0,0,38,
        39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,1,1,0,0,0,41,48,3,4,2,0,42,48,
        3,14,7,0,43,48,3,16,8,0,44,48,3,6,3,0,45,48,3,18,9,0,46,48,3,24,12,0,47,
        41,1,0,0,0,47,42,1,0,0,0,47,43,1,0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,
        1,0,0,0,48,3,1,0,0,0,49,50,3,10,5,0,50,53,5,21,0,0,51,52,5,1,0,0,52,54,
        3,8,4,0,53,51,1,0,0,0,53,54,1,0,0,0,54,61,1,0,0,0,55,59,5,2,0,0,56,60,3,
        30,15,0,57,60,5,21,0,0,58,60,3,16,8,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,
        1,0,0,0,60,62,1,0,0,0,61,55,1,0,0,0,61,62,1,0,0,0,62,5,1,0,0,0,63,64,5,
        3,0,0,64,68,3,12,6,0,65,68,3,16,8,0,66,68,5,21,0,0,67,63,1,0,0,0,67,65,
        1,0,0,0,67,66,1,0,0,0,68,7,1,0,0,0,69,70,7,0,0,0,70,9,1,0,0,0,71,72,7,1,
        0,0,72,11,1,0,0,0,73,74,5,10,0,0,74,75,3,12,6,0,75,76,5,11,0,0,76,82,1,
        0,0,0,77,82,5,21,0,0,78,82,3,30,15,0,79,82,3,34,17,0,80,82,3,24,12,0,81,
        73,1,0,0,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,13,
        1,0,0,0,83,84,5,12,0,0,84,85,5,21,0,0,85,87,5,10,0,0,86,88,3,22,11,0,87,
        86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,11,0,0,90,92,5,13,0,0,91,
        93,3,2,1,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,
        1,0,0,0,96,97,5,14,0,0,97,15,1,0,0,0,98,99,5,21,0,0,99,101,5,15,0,0,100,
        98,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,21,0,0,103,105,5,10,
        0,0,104,106,3,32,16,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,
        108,5,11,0,0,108,17,1,0,0,0,109,112,5,21,0,0,110,112,3,34,17,0,111,109,
        1,0,0,0,111,110,1,0,0,0,112,113,1,0,0,0,113,114,5,2,0,0,114,115,3,12,6,
        0,115,19,1,0,0,0,116,117,5,21,0,0,117,118,5,1,0,0,118,119,3,8,4,0,119,21,
        1,0,0,0,120,125,3,20,10,0,121,122,5,16,0,0,122,124,3,20,10,0,123,121,1,
        0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,23,1,0,0,0,127,
        125,1,0,0,0,128,134,3,26,13,0,129,133,3,24,12,0,130,133,3,30,15,0,131,133,
        5,21,0,0,132,129,1,0,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,136,1,0,0,
        0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,0,0,137,138,
        3,28,14,0,138,25,1,0,0,0,139,140,5,17,0,0,140,141,5,21,0,0,141,142,5,18,
        0,0,142,27,1,0,0,0,143,144,5,19,0,0,144,145,5,21,0,0,145,146,5,18,0,0,146,
        29,1,0,0,0,147,148,7,2,0,0,148,31,1,0,0,0,149,152,3,30,15,0,150,152,5,21,
        0,0,151,149,1,0,0,0,151,150,1,0,0,0,152,160,1,0,0,0,153,156,5,16,0,0,154,
        157,3,30,15,0,155,157,5,21,0,0,156,154,1,0,0,0,156,155,1,0,0,0,157,159,
        1,0,0,0,158,153,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,
        161,33,1,0,0,0,162,160,1,0,0,0,163,166,5,21,0,0,164,165,5,15,0,0,165,167,
        5,21,0,0,166,164,1,0,0,0,167,168,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,
        0,169,35,1,0,0,0,19,39,47,53,59,61,67,81,87,94,100,105,111,125,132,134,
        151,156,160,168]

    private static __ATN: ATN
    public static get _ATN(): ATN {
        if (!MyLanguageParser.__ATN) {
            MyLanguageParser.__ATN = new ATNDeserializer().deserialize(MyLanguageParser._serializedATN)
        }

        return MyLanguageParser.__ATN
    }


    static DecisionsToDFA = MyLanguageParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) )

}

export class RootContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public memberDeclaration_list(): MemberDeclarationContext[] {
        return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[]
    }
    public memberDeclaration(i: number): MemberDeclarationContext {
        return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_root
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this)
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
    public returnStatement(): ReturnStatementContext {
        return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext
    }
    public functionVarAssignment(): FunctionVarAssignmentContext {
        return this.getTypedRuleContext(FunctionVarAssignmentContext, 0) as FunctionVarAssignmentContext
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
    public varType(): VarTypeContext {
        return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext
    }
    public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID)
    }
    public ID(i: number): TerminalNode {
        return this.getToken(MyLanguageParser.ID, i)
    }
    public returnType(): ReturnTypeContext {
        return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext
    }
    public literal(): LiteralContext {
        return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext
    }
    public functionInvocation(): FunctionInvocationContext {
        return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext
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


export class ReturnStatementContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
    }
    public functionInvocation(): FunctionInvocationContext {
        return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_returnStatement
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ReturnTypeContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_returnType
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterReturnType) {
	 		listener.enterReturnType(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitReturnType) {
	 		listener.exitReturnType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class VarTypeContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_varType
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterVarType) {
	 		listener.enterVarType(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitVarType) {
	 		listener.exitVarType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitVarType) {
            return visitor.visitVarType(this)
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
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public literal(): LiteralContext {
        return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext
    }
    public objectPropertyAccess(): ObjectPropertyAccessContext {
        return this.getTypedRuleContext(ObjectPropertyAccessContext, 0) as ObjectPropertyAccessContext
    }
    public jsx(): JsxContext {
        return this.getTypedRuleContext(JsxContext, 0) as JsxContext
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
    public memberDeclaration_list(): MemberDeclarationContext[] {
        return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[]
    }
    public memberDeclaration(i: number): MemberDeclarationContext {
        return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext
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
    public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID)
    }
    public ID(i: number): TerminalNode {
        return this.getToken(MyLanguageParser.ID, i)
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
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public objectPropertyAccess(): ObjectPropertyAccessContext {
        return this.getTypedRuleContext(ObjectPropertyAccessContext, 0) as ObjectPropertyAccessContext
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
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public returnType(): ReturnTypeContext {
        return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext
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
    public jsxOpen(): JsxOpenContext {
        return this.getTypedRuleContext(JsxOpenContext, 0) as JsxOpenContext
    }
    public jsxClose(): JsxCloseContext {
        return this.getTypedRuleContext(JsxCloseContext, 0) as JsxCloseContext
    }
    public jsx_list(): JsxContext[] {
        return this.getTypedRuleContexts(JsxContext) as JsxContext[]
    }
    public jsx(i: number): JsxContext {
        return this.getTypedRuleContext(JsxContext, i) as JsxContext
    }
    public literal_list(): LiteralContext[] {
        return this.getTypedRuleContexts(LiteralContext) as LiteralContext[]
    }
    public literal(i: number): LiteralContext {
        return this.getTypedRuleContext(LiteralContext, i) as LiteralContext
    }
    public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID)
    }
    public ID(i: number): TerminalNode {
        return this.getToken(MyLanguageParser.ID, i)
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


export class JsxOpenContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxOpen
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxOpen) {
	 		listener.enterJsxOpen(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxOpen) {
	 		listener.exitJsxOpen(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitJsxOpen) {
            return visitor.visitJsxOpen(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class JsxCloseContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_jsxClose
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterJsxClose) {
	 		listener.enterJsxClose(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitJsxClose) {
	 		listener.exitJsxClose(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitJsxClose) {
            return visitor.visitJsxClose(this)
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
    public STRING(): TerminalNode {
        return this.getToken(MyLanguageParser.STRING, 0)
    }
    public NUMBER(): TerminalNode {
        return this.getToken(MyLanguageParser.NUMBER, 0)
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
    public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyLanguageParser.ID)
    }
    public ID(i: number): TerminalNode {
        return this.getToken(MyLanguageParser.ID, i)
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


export class ObjectPropertyAccessContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_objectPropertyAccess
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterObjectPropertyAccess) {
	 		listener.enterObjectPropertyAccess(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitObjectPropertyAccess) {
	 		listener.exitObjectPropertyAccess(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitObjectPropertyAccess) {
            return visitor.visitObjectPropertyAccess(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
