// Generated from /home/dave/Desktop/Prog3/david.pietrzak/src/g4/MyLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MyLanguageParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, BOOLEAN=16, 
		ID=17, NUMBER=18, STRING=19, WS=20;
	public static final int
		RULE_classDeclaration = 0, RULE_memberDeclaration = 1, RULE_variableDeclaration = 2, 
		RULE_type = 3, RULE_functionDeclaration = 4, RULE_functionInvocation = 5, 
		RULE_functionVarAssignment = 6, RULE_parameter = 7, RULE_parameterList = 8, 
		RULE_jsx = 9, RULE_jsxContent = 10, RULE_literal = 11, RULE_booleanExpression = 12, 
		RULE_argumentList = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"classDeclaration", "memberDeclaration", "variableDeclaration", "type", 
			"functionDeclaration", "functionInvocation", "functionVarAssignment", 
			"parameter", "parameterList", "jsx", "jsxContent", "literal", "booleanExpression", 
			"argumentList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'class'", "'{'", "'}'", "'='", "';'", "'int'", "'string'", "'boolean'", 
			"'function'", "'('", "')'", "','", "'<'", "'>'", "'</'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "BOOLEAN", "ID", "NUMBER", "STRING", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MyLanguage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MyLanguageParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MyLanguageParser.ID, 0); }
		public List<MemberDeclarationContext> memberDeclaration() {
			return getRuleContexts(MemberDeclarationContext.class);
		}
		public MemberDeclarationContext memberDeclaration(int i) {
			return getRuleContext(MemberDeclarationContext.class,i);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(T__0);
			setState(29);
			match(ID);
			setState(30);
			match(T__1);
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 140224L) != 0)) {
				{
				{
				setState(31);
				memberDeclaration();
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(37);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MemberDeclarationContext extends ParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public FunctionInvocationContext functionInvocation() {
			return getRuleContext(FunctionInvocationContext.class,0);
		}
		public JsxContext jsx() {
			return getRuleContext(JsxContext.class,0);
		}
		public MemberDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberDeclaration; }
	}

	public final MemberDeclarationContext memberDeclaration() throws RecognitionException {
		MemberDeclarationContext _localctx = new MemberDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_memberDeclaration);
		try {
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__6:
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				variableDeclaration();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				functionDeclaration();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				functionInvocation();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				jsx();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(MyLanguageParser.ID, 0); }
		public TerminalNode STRING() { return getToken(MyLanguageParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(MyLanguageParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(MyLanguageParser.BOOLEAN, 0); }
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_variableDeclaration);
		int _la;
		try {
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				type();
				setState(46);
				match(ID);
				setState(47);
				match(T__3);
				setState(48);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 851968L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(49);
				match(T__4);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				type();
				setState(52);
				match(ID);
				setState(53);
				match(T__4);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 448L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MyLanguageParser.ID, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<FunctionVarAssignmentContext> functionVarAssignment() {
			return getRuleContexts(FunctionVarAssignmentContext.class);
		}
		public FunctionVarAssignmentContext functionVarAssignment(int i) {
			return getRuleContext(FunctionVarAssignmentContext.class,i);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(T__8);
			setState(60);
			match(ID);
			setState(61);
			match(T__9);
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 448L) != 0)) {
				{
				setState(62);
				parameterList();
				}
			}

			setState(65);
			match(T__10);
			setState(66);
			match(T__1);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 131520L) != 0)) {
				{
				setState(69);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
				case T__6:
				case T__7:
					{
					setState(67);
					variableDeclaration();
					}
					break;
				case ID:
					{
					setState(68);
					functionVarAssignment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(74);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionInvocationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MyLanguageParser.ID, 0); }
		public ArgumentListContext argumentList() {
			return getRuleContext(ArgumentListContext.class,0);
		}
		public FunctionInvocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionInvocation; }
	}

	public final FunctionInvocationContext functionInvocation() throws RecognitionException {
		FunctionInvocationContext _localctx = new FunctionInvocationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionInvocation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(ID);
			setState(77);
			match(T__9);
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 851968L) != 0)) {
				{
				setState(78);
				argumentList();
				}
			}

			setState(81);
			match(T__10);
			setState(82);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionVarAssignmentContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MyLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MyLanguageParser.ID, i);
		}
		public TerminalNode NUMBER() { return getToken(MyLanguageParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(MyLanguageParser.BOOLEAN, 0); }
		public FunctionVarAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionVarAssignment; }
	}

	public final FunctionVarAssignmentContext functionVarAssignment() throws RecognitionException {
		FunctionVarAssignmentContext _localctx = new FunctionVarAssignmentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_functionVarAssignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(ID);
			setState(85);
			match(T__3);
			setState(86);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 458752L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(87);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(MyLanguageParser.ID, 0); }
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			type();
			setState(90);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			parameter();
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__11) {
				{
				{
				setState(93);
				match(T__11);
				setState(94);
				parameter();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JsxContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MyLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MyLanguageParser.ID, i);
		}
		public JsxContentContext jsxContent() {
			return getRuleContext(JsxContentContext.class,0);
		}
		public JsxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsx; }
	}

	public final JsxContext jsx() throws RecognitionException {
		JsxContext _localctx = new JsxContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_jsx);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(T__12);
			setState(101);
			match(ID);
			setState(102);
			match(T__13);
			setState(103);
			jsxContent();
			setState(104);
			match(T__14);
			setState(105);
			match(ID);
			setState(106);
			match(T__13);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JsxContentContext extends ParserRuleContext {
		public JsxContext jsx() {
			return getRuleContext(JsxContext.class,0);
		}
		public TerminalNode STRING() { return getToken(MyLanguageParser.STRING, 0); }
		public JsxContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsxContent; }
	}

	public final JsxContentContext jsxContent() throws RecognitionException {
		JsxContentContext _localctx = new JsxContentContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_jsxContent);
		try {
			setState(110);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__12:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				jsx();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(109);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(MyLanguageParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(MyLanguageParser.STRING, 0); }
		public TerminalNode BOOLEAN() { return getToken(MyLanguageParser.BOOLEAN, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 851968L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BooleanExpressionContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(MyLanguageParser.BOOLEAN, 0); }
		public BooleanExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanExpression; }
	}

	public final BooleanExpressionContext booleanExpression() throws RecognitionException {
		BooleanExpressionContext _localctx = new BooleanExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_booleanExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentListContext extends ParserRuleContext {
		public List<LiteralContext> literal() {
			return getRuleContexts(LiteralContext.class);
		}
		public LiteralContext literal(int i) {
			return getRuleContext(LiteralContext.class,i);
		}
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public ArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentList; }
	}

	public final ArgumentListContext argumentList() throws RecognitionException {
		ArgumentListContext _localctx = new ArgumentListContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_argumentList);
		int _la;
		try {
			setState(125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				literal();
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(117);
					match(T__11);
					setState(118);
					literal();
					}
					}
					setState(123);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(124);
				booleanExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0014\u0080\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0005\u0000!\b\u0000\n\u0000\f\u0000$\t\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001,\b"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00028\b"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004@\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0005\u0004F\b\u0004\n\u0004\f\u0004I\t\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005P\b\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0005\b`\b\b\n\b\f\bc\t\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0003\no\b\n\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0005\rx\b\r\n\r\f\r{\t"+
		"\r\u0001\r\u0003\r~\b\r\u0001\r\u0000\u0000\u000e\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0003\u0002\u0000"+
		"\u0010\u0010\u0012\u0013\u0001\u0000\u0006\b\u0001\u0000\u0010\u0012~"+
		"\u0000\u001c\u0001\u0000\u0000\u0000\u0002+\u0001\u0000\u0000\u0000\u0004"+
		"7\u0001\u0000\u0000\u0000\u00069\u0001\u0000\u0000\u0000\b;\u0001\u0000"+
		"\u0000\u0000\nL\u0001\u0000\u0000\u0000\fT\u0001\u0000\u0000\u0000\u000e"+
		"Y\u0001\u0000\u0000\u0000\u0010\\\u0001\u0000\u0000\u0000\u0012d\u0001"+
		"\u0000\u0000\u0000\u0014n\u0001\u0000\u0000\u0000\u0016p\u0001\u0000\u0000"+
		"\u0000\u0018r\u0001\u0000\u0000\u0000\u001a}\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0005\u0001\u0000\u0000\u001d\u001e\u0005\u0011\u0000\u0000\u001e"+
		"\"\u0005\u0002\u0000\u0000\u001f!\u0003\u0002\u0001\u0000 \u001f\u0001"+
		"\u0000\u0000\u0000!$\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000\u0000"+
		"\"#\u0001\u0000\u0000\u0000#%\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000"+
		"\u0000%&\u0005\u0003\u0000\u0000&\u0001\u0001\u0000\u0000\u0000\',\u0003"+
		"\u0004\u0002\u0000(,\u0003\b\u0004\u0000),\u0003\n\u0005\u0000*,\u0003"+
		"\u0012\t\u0000+\'\u0001\u0000\u0000\u0000+(\u0001\u0000\u0000\u0000+)"+
		"\u0001\u0000\u0000\u0000+*\u0001\u0000\u0000\u0000,\u0003\u0001\u0000"+
		"\u0000\u0000-.\u0003\u0006\u0003\u0000./\u0005\u0011\u0000\u0000/0\u0005"+
		"\u0004\u0000\u000001\u0007\u0000\u0000\u000012\u0005\u0005\u0000\u0000"+
		"28\u0001\u0000\u0000\u000034\u0003\u0006\u0003\u000045\u0005\u0011\u0000"+
		"\u000056\u0005\u0005\u0000\u000068\u0001\u0000\u0000\u00007-\u0001\u0000"+
		"\u0000\u000073\u0001\u0000\u0000\u00008\u0005\u0001\u0000\u0000\u0000"+
		"9:\u0007\u0001\u0000\u0000:\u0007\u0001\u0000\u0000\u0000;<\u0005\t\u0000"+
		"\u0000<=\u0005\u0011\u0000\u0000=?\u0005\n\u0000\u0000>@\u0003\u0010\b"+
		"\u0000?>\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@A\u0001\u0000"+
		"\u0000\u0000AB\u0005\u000b\u0000\u0000BG\u0005\u0002\u0000\u0000CF\u0003"+
		"\u0004\u0002\u0000DF\u0003\f\u0006\u0000EC\u0001\u0000\u0000\u0000ED\u0001"+
		"\u0000\u0000\u0000FI\u0001\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000"+
		"GH\u0001\u0000\u0000\u0000HJ\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000"+
		"\u0000JK\u0005\u0003\u0000\u0000K\t\u0001\u0000\u0000\u0000LM\u0005\u0011"+
		"\u0000\u0000MO\u0005\n\u0000\u0000NP\u0003\u001a\r\u0000ON\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QR\u0005"+
		"\u000b\u0000\u0000RS\u0005\u0005\u0000\u0000S\u000b\u0001\u0000\u0000"+
		"\u0000TU\u0005\u0011\u0000\u0000UV\u0005\u0004\u0000\u0000VW\u0007\u0002"+
		"\u0000\u0000WX\u0005\u0005\u0000\u0000X\r\u0001\u0000\u0000\u0000YZ\u0003"+
		"\u0006\u0003\u0000Z[\u0005\u0011\u0000\u0000[\u000f\u0001\u0000\u0000"+
		"\u0000\\a\u0003\u000e\u0007\u0000]^\u0005\f\u0000\u0000^`\u0003\u000e"+
		"\u0007\u0000_]\u0001\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000a_\u0001"+
		"\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b\u0011\u0001\u0000\u0000"+
		"\u0000ca\u0001\u0000\u0000\u0000de\u0005\r\u0000\u0000ef\u0005\u0011\u0000"+
		"\u0000fg\u0005\u000e\u0000\u0000gh\u0003\u0014\n\u0000hi\u0005\u000f\u0000"+
		"\u0000ij\u0005\u0011\u0000\u0000jk\u0005\u000e\u0000\u0000k\u0013\u0001"+
		"\u0000\u0000\u0000lo\u0003\u0012\t\u0000mo\u0005\u0013\u0000\u0000nl\u0001"+
		"\u0000\u0000\u0000nm\u0001\u0000\u0000\u0000o\u0015\u0001\u0000\u0000"+
		"\u0000pq\u0007\u0000\u0000\u0000q\u0017\u0001\u0000\u0000\u0000rs\u0005"+
		"\u0010\u0000\u0000s\u0019\u0001\u0000\u0000\u0000ty\u0003\u0016\u000b"+
		"\u0000uv\u0005\f\u0000\u0000vx\u0003\u0016\u000b\u0000wu\u0001\u0000\u0000"+
		"\u0000x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000"+
		"\u0000\u0000z~\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000|~\u0003"+
		"\u0018\f\u0000}t\u0001\u0000\u0000\u0000}|\u0001\u0000\u0000\u0000~\u001b"+
		"\u0001\u0000\u0000\u0000\u000b\"+7?EGOany}";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}