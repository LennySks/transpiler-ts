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
    public static readonly BOOLEAN = 24
    public static readonly ID = 25
    public static readonly STRING = 26
    public static readonly NUMBER = 27
    public static readonly WS = 28
    public static readonly EOF = Token.EOF
    public static readonly RULE_root = 0
    public static readonly RULE_memberDeclaration = 1
    public static readonly RULE_importStatement = 2
    public static readonly RULE_variableDeclaration = 3
    public static readonly RULE_returnStatement = 4
    public static readonly RULE_returnType = 5
    public static readonly RULE_varType = 6
    public static readonly RULE_expression = 7
    public static readonly RULE_functionDeclaration = 8
    public static readonly RULE_functionInvocation = 9
    public static readonly RULE_functionVarAssignment = 10
    public static readonly RULE_parameter = 11
    public static readonly RULE_parameterList = 12
    public static readonly RULE_jsx = 13
    public static readonly RULE_jsxOpen = 14
    public static readonly RULE_jsxClose = 15
    public static readonly RULE_literal = 16
    public static readonly RULE_argumentList = 17
    public static readonly RULE_objectPropertyAccess = 18
    public static readonly literalNames: (string | null)[] = [ null, '\'import\'',
        '\'*\'', '\'as\'',
        '\'from\'', '\':\'',
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
        null, null,
        null, null,
        'BOOLEAN',
        'ID', 'STRING',
        'NUMBER', 'WS' ]
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'root', 'memberDeclaration', 'importStatement', 'variableDeclaration',
        'returnStatement', 'returnType', 'varType', 'expression', 'functionDeclaration',
        'functionInvocation', 'functionVarAssignment', 'parameter', 'parameterList',
        'jsx', 'jsxOpen', 'jsxClose', 'literal', 'argumentList', 'objectPropertyAccess'
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
                this.state = 39
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 38
                            this.memberDeclaration()
                        }
                    }
                    this.state = 41
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 35731586) !== 0))
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
            this.state = 50
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 43
                        this.importStatement()
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 44
                        this.variableDeclaration()
                    }
                    break
                case 3:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 45
                        this.functionDeclaration()
                    }
                    break
                case 4:
                    this.enterOuterAlt(localctx, 4)
                    {
                        this.state = 46
                        this.functionInvocation()
                    }
                    break
                case 5:
                    this.enterOuterAlt(localctx, 5)
                    {
                        this.state = 47
                        this.returnStatement()
                    }
                    break
                case 6:
                    this.enterOuterAlt(localctx, 6)
                    {
                        this.state = 48
                        this.functionVarAssignment()
                    }
                    break
                case 7:
                    this.enterOuterAlt(localctx, 7)
                    {
                        this.state = 49
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
    public importStatement(): ImportStatementContext {
        const localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state)
        this.enterRule(localctx, 4, MyLanguageParser.RULE_importStatement)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 52
                this.match(MyLanguageParser.T__0)
                this.state = 53
                this.match(MyLanguageParser.T__1)
                this.state = 54
                this.match(MyLanguageParser.T__2)
                this.state = 55
                this.match(MyLanguageParser.ID)
                this.state = 56
                this.match(MyLanguageParser.T__3)
                this.state = 57
                this.match(MyLanguageParser.STRING)
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
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 59
                this.varType()
                this.state = 60
                this.match(MyLanguageParser.ID)
                this.state = 63
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===5) {
                    {
                        this.state = 61
                        this.match(MyLanguageParser.T__4)
                        this.state = 62
                        this.returnType()
                    }
                }

                this.state = 71
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===6) {
                    {
                        this.state = 65
                        this.match(MyLanguageParser.T__5)
                        this.state = 69
                        this._errHandler.sync(this)
                        switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
                            case 1:
                                {
                                    this.state = 66
                                    this.literal()
                                }
                                break
                            case 2:
                                {
                                    this.state = 67
                                    this.match(MyLanguageParser.ID)
                                }
                                break
                            case 3:
                                {
                                    this.state = 68
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
        this.enterRule(localctx, 8, MyLanguageParser.RULE_returnStatement)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 73
                this.match(MyLanguageParser.T__6)
                this.state = 77
                this._errHandler.sync(this)
                switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
                    case 1:
                        {
                            this.state = 74
                            this.expression()
                        }
                        break
                    case 2:
                        {
                            this.state = 75
                            this.functionInvocation()
                        }
                        break
                    case 3:
                        {
                            this.state = 76
                            this.match(MyLanguageParser.ID)
                        }
                        break
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
    public returnType(): ReturnTypeContext {
        const localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state)
        this.enterRule(localctx, 10, MyLanguageParser.RULE_returnType)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 79
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
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
        this.enterRule(localctx, 12, MyLanguageParser.RULE_varType)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 81
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
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
        this.enterRule(localctx, 14, MyLanguageParser.RULE_expression)
        try {
            this.state = 91
            this._errHandler.sync(this)
            switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(localctx, 1)
                    {
                        this.state = 83
                        this.match(MyLanguageParser.T__13)
                        this.state = 84
                        this.expression()
                        this.state = 85
                        this.match(MyLanguageParser.T__14)
                    }
                    break
                case 2:
                    this.enterOuterAlt(localctx, 2)
                    {
                        this.state = 87
                        this.match(MyLanguageParser.ID)
                    }
                    break
                case 3:
                    this.enterOuterAlt(localctx, 3)
                    {
                        this.state = 88
                        this.literal()
                    }
                    break
                case 4:
                    this.enterOuterAlt(localctx, 4)
                    {
                        this.state = 89
                        this.objectPropertyAccess()
                    }
                    break
                case 5:
                    this.enterOuterAlt(localctx, 5)
                    {
                        this.state = 90
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
        this.enterRule(localctx, 16, MyLanguageParser.RULE_functionDeclaration)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 93
                this.match(MyLanguageParser.T__15)
                this.state = 94
                this.match(MyLanguageParser.ID)
                this.state = 95
                this.match(MyLanguageParser.T__13)
                this.state = 97
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la===25) {
                    {
                        this.state = 96
                        this.parameterList()
                    }
                }

                this.state = 99
                this.match(MyLanguageParser.T__14)
                this.state = 100
                this.match(MyLanguageParser.T__16)
                this.state = 102
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 101
                            this.memberDeclaration()
                        }
                    }
                    this.state = 104
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 35731586) !== 0))
                this.state = 106
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
    public functionInvocation(): FunctionInvocationContext {
        const localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state)
        this.enterRule(localctx, 18, MyLanguageParser.RULE_functionInvocation)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 110
                this._errHandler.sync(this)
                switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
                    case 1:
                        {
                            this.state = 108
                            this.match(MyLanguageParser.ID)
                            this.state = 109
                            this.match(MyLanguageParser.T__18)
                        }
                        break
                }
                this.state = 112
                this.match(MyLanguageParser.ID)
                this.state = 113
                this.match(MyLanguageParser.T__13)
                this.state = 115
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 251658240) !== 0)) {
                    {
                        this.state = 114
                        this.argumentList()
                    }
                }

                this.state = 117
                this.match(MyLanguageParser.T__14)
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
        this.enterRule(localctx, 20, MyLanguageParser.RULE_functionVarAssignment)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 121
                this._errHandler.sync(this)
                switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
                    case 1:
                        {
                            this.state = 119
                            this.match(MyLanguageParser.ID)
                        }
                        break
                    case 2:
                        {
                            this.state = 120
                            this.objectPropertyAccess()
                        }
                        break
                }
                this.state = 123
                this.match(MyLanguageParser.T__5)
                this.state = 124
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
        this.enterRule(localctx, 22, MyLanguageParser.RULE_parameter)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 126
                this.match(MyLanguageParser.ID)
                this.state = 127
                this.match(MyLanguageParser.T__4)
                this.state = 128
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
        this.enterRule(localctx, 24, MyLanguageParser.RULE_parameterList)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 130
                this.parameter()
                this.state = 135
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la===20) {
                    {
                        {
                            this.state = 131
                            this.match(MyLanguageParser.T__19)
                            this.state = 132
                            this.parameter()
                        }
                    }
                    this.state = 137
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
        this.enterRule(localctx, 26, MyLanguageParser.RULE_jsx)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 138
                this.jsxOpen()
                this.state = 144
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 253755392) !== 0)) {
                    {
                        this.state = 142
                        this._errHandler.sync(this)
                        switch (this._input.LA(1)) {
                            case 21:
                                {
                                    this.state = 139
                                    this.jsx()
                                }
                                break
                            case 24:
                            case 26:
                            case 27:
                                {
                                    this.state = 140
                                    this.literal()
                                }
                                break
                            case 25:
                                {
                                    this.state = 141
                                    this.match(MyLanguageParser.ID)
                                }
                                break
                            default:
                                throw new NoViableAltException(this)
                        }
                    }
                    this.state = 146
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 147
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
        this.enterRule(localctx, 28, MyLanguageParser.RULE_jsxOpen)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 149
                this.match(MyLanguageParser.T__20)
                this.state = 150
                this.match(MyLanguageParser.ID)
                this.state = 151
                this.match(MyLanguageParser.T__21)
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
        this.enterRule(localctx, 30, MyLanguageParser.RULE_jsxClose)
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 153
                this.match(MyLanguageParser.T__22)
                this.state = 154
                this.match(MyLanguageParser.ID)
                this.state = 155
                this.match(MyLanguageParser.T__21)
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
        this.enterRule(localctx, 32, MyLanguageParser.RULE_literal)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 157
                _la = this._input.LA(1)
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 218103808) !== 0))) {
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
        this.enterRule(localctx, 34, MyLanguageParser.RULE_argumentList)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 161
                this._errHandler.sync(this)
                switch (this._input.LA(1)) {
                    case 24:
                    case 26:
                    case 27:
                        {
                            this.state = 159
                            this.literal()
                        }
                        break
                    case 25:
                        {
                            this.state = 160
                            this.match(MyLanguageParser.ID)
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                }
                this.state = 170
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la===20) {
                    {
                        {
                            this.state = 163
                            this.match(MyLanguageParser.T__19)
                            this.state = 166
                            this._errHandler.sync(this)
                            switch (this._input.LA(1)) {
                                case 24:
                                case 26:
                                case 27:
                                    {
                                        this.state = 164
                                        this.literal()
                                    }
                                    break
                                case 25:
                                    {
                                        this.state = 165
                                        this.match(MyLanguageParser.ID)
                                    }
                                    break
                                default:
                                    throw new NoViableAltException(this)
                            }
                        }
                    }
                    this.state = 172
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
        this.enterRule(localctx, 36, MyLanguageParser.RULE_objectPropertyAccess)
        let _la: number
        try {
            this.enterOuterAlt(localctx, 1)
            {
                this.state = 173
                this.match(MyLanguageParser.ID)
                this.state = 176
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                        {
                            this.state = 174
                            this.match(MyLanguageParser.T__18)
                            this.state = 175
                            this.match(MyLanguageParser.ID)
                        }
                    }
                    this.state = 178
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while (_la===19)
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

    public static readonly _serializedATN: number[] = [4,1,28,181,2,0,7,0,2,
        1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
        10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
        7,17,2,18,7,18,1,0,4,0,40,8,0,11,0,12,0,41,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        3,1,51,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,64,8,3,1,3,1,
        3,1,3,1,3,3,3,70,8,3,3,3,72,8,3,1,4,1,4,1,4,1,4,3,4,78,8,4,1,5,1,5,1,6,
        1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,92,8,7,1,8,1,8,1,8,1,8,3,8,98,8,
        8,1,8,1,8,1,8,4,8,103,8,8,11,8,12,8,104,1,8,1,8,1,9,1,9,3,9,111,8,9,1,9,
        1,9,1,9,3,9,116,8,9,1,9,1,9,1,10,1,10,3,10,122,8,10,1,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,12,1,12,1,12,5,12,134,8,12,10,12,12,12,137,9,12,1,13,1,
        13,1,13,1,13,5,13,143,8,13,10,13,12,13,146,9,13,1,13,1,13,1,14,1,14,1,14,
        1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,3,17,162,8,17,1,17,1,17,1,
        17,3,17,167,8,17,5,17,169,8,17,10,17,12,17,172,9,17,1,18,1,18,1,18,4,18,
        177,8,18,11,18,12,18,178,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,0,3,1,0,8,10,1,0,11,13,2,0,24,24,26,27,191,0,39,1,0,0,
        0,2,50,1,0,0,0,4,52,1,0,0,0,6,59,1,0,0,0,8,73,1,0,0,0,10,79,1,0,0,0,12,
        81,1,0,0,0,14,91,1,0,0,0,16,93,1,0,0,0,18,110,1,0,0,0,20,121,1,0,0,0,22,
        126,1,0,0,0,24,130,1,0,0,0,26,138,1,0,0,0,28,149,1,0,0,0,30,153,1,0,0,0,
        32,157,1,0,0,0,34,161,1,0,0,0,36,173,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,
        0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,1,1,0,0,0,43,51,3,4,2,0,
        44,51,3,6,3,0,45,51,3,16,8,0,46,51,3,18,9,0,47,51,3,8,4,0,48,51,3,20,10,
        0,49,51,3,26,13,0,50,43,1,0,0,0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,
        0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,53,5,1,0,0,
        53,54,5,2,0,0,54,55,5,3,0,0,55,56,5,25,0,0,56,57,5,4,0,0,57,58,5,26,0,0,
        58,5,1,0,0,0,59,60,3,12,6,0,60,63,5,25,0,0,61,62,5,5,0,0,62,64,3,10,5,0,
        63,61,1,0,0,0,63,64,1,0,0,0,64,71,1,0,0,0,65,69,5,6,0,0,66,70,3,32,16,0,
        67,70,5,25,0,0,68,70,3,18,9,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,
        70,72,1,0,0,0,71,65,1,0,0,0,71,72,1,0,0,0,72,7,1,0,0,0,73,77,5,7,0,0,74,
        78,3,14,7,0,75,78,3,18,9,0,76,78,5,25,0,0,77,74,1,0,0,0,77,75,1,0,0,0,77,
        76,1,0,0,0,78,9,1,0,0,0,79,80,7,0,0,0,80,11,1,0,0,0,81,82,7,1,0,0,82,13,
        1,0,0,0,83,84,5,14,0,0,84,85,3,14,7,0,85,86,5,15,0,0,86,92,1,0,0,0,87,92,
        5,25,0,0,88,92,3,32,16,0,89,92,3,36,18,0,90,92,3,26,13,0,91,83,1,0,0,0,
        91,87,1,0,0,0,91,88,1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,15,1,0,0,0,93,
        94,5,16,0,0,94,95,5,25,0,0,95,97,5,14,0,0,96,98,3,24,12,0,97,96,1,0,0,0,
        97,98,1,0,0,0,98,99,1,0,0,0,99,100,5,15,0,0,100,102,5,17,0,0,101,103,3,
        2,1,0,102,101,1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,
        106,1,0,0,0,106,107,5,18,0,0,107,17,1,0,0,0,108,109,5,25,0,0,109,111,5,
        19,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,5,25,0,0,
        113,115,5,14,0,0,114,116,3,34,17,0,115,114,1,0,0,0,115,116,1,0,0,0,116,
        117,1,0,0,0,117,118,5,15,0,0,118,19,1,0,0,0,119,122,5,25,0,0,120,122,3,
        36,18,0,121,119,1,0,0,0,121,120,1,0,0,0,122,123,1,0,0,0,123,124,5,6,0,0,
        124,125,3,14,7,0,125,21,1,0,0,0,126,127,5,25,0,0,127,128,5,5,0,0,128,129,
        3,10,5,0,129,23,1,0,0,0,130,135,3,22,11,0,131,132,5,20,0,0,132,134,3,22,
        11,0,133,131,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,
        25,1,0,0,0,137,135,1,0,0,0,138,144,3,28,14,0,139,143,3,26,13,0,140,143,
        3,32,16,0,141,143,5,25,0,0,142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,
        0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,
        144,1,0,0,0,147,148,3,30,15,0,148,27,1,0,0,0,149,150,5,21,0,0,150,151,5,
        25,0,0,151,152,5,22,0,0,152,29,1,0,0,0,153,154,5,23,0,0,154,155,5,25,0,
        0,155,156,5,22,0,0,156,31,1,0,0,0,157,158,7,2,0,0,158,33,1,0,0,0,159,162,
        3,32,16,0,160,162,5,25,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,170,1,0,
        0,0,163,166,5,20,0,0,164,167,3,32,16,0,165,167,5,25,0,0,166,164,1,0,0,0,
        166,165,1,0,0,0,167,169,1,0,0,0,168,163,1,0,0,0,169,172,1,0,0,0,170,168,
        1,0,0,0,170,171,1,0,0,0,171,35,1,0,0,0,172,170,1,0,0,0,173,176,5,25,0,0,
        174,175,5,19,0,0,175,177,5,25,0,0,176,174,1,0,0,0,177,178,1,0,0,0,178,176,
        1,0,0,0,178,179,1,0,0,0,179,37,1,0,0,0,19,41,50,63,69,71,77,91,97,104,110,
        115,121,135,142,144,161,166,170,178]

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
    public importStatement(): ImportStatementContext {
        return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext
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


export class ImportStatementContext extends ParserRuleContext {
    constructor(parser?: MyLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState)
    	this.parser = parser
    }
    public ID(): TerminalNode {
        return this.getToken(MyLanguageParser.ID, 0)
    }
    public STRING(): TerminalNode {
        return this.getToken(MyLanguageParser.STRING, 0)
    }
    public get ruleIndex(): number {
    	return MyLanguageParser.RULE_importStatement
    }
    public enterRule(listener: MyLanguageListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this)
        }
    }
    public exitRule(listener: MyLanguageListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: MyLanguageVisitor<Result>): Result {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this)
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
