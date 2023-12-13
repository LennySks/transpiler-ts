// Generated from e://School//3//Programmeren 3//lsp-sample//src//ts//g4//MyLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MyLanguageLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, ID=16, NUMBER=17, 
		STRING=18, BOOLEAN=19, WS=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "ID", "NUMBER", 
			"STRING", "BOOLEAN", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'class'", "'{'", "'}'", "'='", "';'", "'int'", "'string'", "'boolean'", 
			"'function'", "'('", "')'", "'<'", "'>'", "'</'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "ID", "NUMBER", "STRING", "BOOLEAN", "WS"
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


	public MyLanguageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MyLanguage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0014\u0087\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0005\u000fc\b\u000f\n\u000f\f\u000ff\t\u000f\u0001\u0010"+
		"\u0004\u0010i\b\u0010\u000b\u0010\f\u0010j\u0001\u0011\u0001\u0011\u0005"+
		"\u0011o\b\u0011\n\u0011\f\u0011r\t\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u007f\b\u0012\u0001\u0013\u0004"+
		"\u0013\u0082\b\u0013\u000b\u0013\f\u0013\u0083\u0001\u0013\u0001\u0013"+
		"\u0001p\u0000\u0014\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t"+
		"\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f"+
		"\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014"+
		"\u0001\u0000\u0004\u0003\u0000AZ__az\u0004\u000009AZ__az\u0001\u00000"+
		"9\u0003\u0000\t\n\r\r  \u008b\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001"+
		"\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000"+
		"\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000"+
		"\u0001)\u0001\u0000\u0000\u0000\u0003/\u0001\u0000\u0000\u0000\u00051"+
		"\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t5\u0001\u0000"+
		"\u0000\u0000\u000b7\u0001\u0000\u0000\u0000\r;\u0001\u0000\u0000\u0000"+
		"\u000fB\u0001\u0000\u0000\u0000\u0011J\u0001\u0000\u0000\u0000\u0013S"+
		"\u0001\u0000\u0000\u0000\u0015U\u0001\u0000\u0000\u0000\u0017W\u0001\u0000"+
		"\u0000\u0000\u0019Y\u0001\u0000\u0000\u0000\u001b[\u0001\u0000\u0000\u0000"+
		"\u001d^\u0001\u0000\u0000\u0000\u001f`\u0001\u0000\u0000\u0000!h\u0001"+
		"\u0000\u0000\u0000#l\u0001\u0000\u0000\u0000%~\u0001\u0000\u0000\u0000"+
		"\'\u0081\u0001\u0000\u0000\u0000)*\u0005c\u0000\u0000*+\u0005l\u0000\u0000"+
		"+,\u0005a\u0000\u0000,-\u0005s\u0000\u0000-.\u0005s\u0000\u0000.\u0002"+
		"\u0001\u0000\u0000\u0000/0\u0005{\u0000\u00000\u0004\u0001\u0000\u0000"+
		"\u000012\u0005}\u0000\u00002\u0006\u0001\u0000\u0000\u000034\u0005=\u0000"+
		"\u00004\b\u0001\u0000\u0000\u000056\u0005;\u0000\u00006\n\u0001\u0000"+
		"\u0000\u000078\u0005i\u0000\u000089\u0005n\u0000\u00009:\u0005t\u0000"+
		"\u0000:\f\u0001\u0000\u0000\u0000;<\u0005s\u0000\u0000<=\u0005t\u0000"+
		"\u0000=>\u0005r\u0000\u0000>?\u0005i\u0000\u0000?@\u0005n\u0000\u0000"+
		"@A\u0005g\u0000\u0000A\u000e\u0001\u0000\u0000\u0000BC\u0005b\u0000\u0000"+
		"CD\u0005o\u0000\u0000DE\u0005o\u0000\u0000EF\u0005l\u0000\u0000FG\u0005"+
		"e\u0000\u0000GH\u0005a\u0000\u0000HI\u0005n\u0000\u0000I\u0010\u0001\u0000"+
		"\u0000\u0000JK\u0005f\u0000\u0000KL\u0005u\u0000\u0000LM\u0005n\u0000"+
		"\u0000MN\u0005c\u0000\u0000NO\u0005t\u0000\u0000OP\u0005i\u0000\u0000"+
		"PQ\u0005o\u0000\u0000QR\u0005n\u0000\u0000R\u0012\u0001\u0000\u0000\u0000"+
		"ST\u0005(\u0000\u0000T\u0014\u0001\u0000\u0000\u0000UV\u0005)\u0000\u0000"+
		"V\u0016\u0001\u0000\u0000\u0000WX\u0005<\u0000\u0000X\u0018\u0001\u0000"+
		"\u0000\u0000YZ\u0005>\u0000\u0000Z\u001a\u0001\u0000\u0000\u0000[\\\u0005"+
		"<\u0000\u0000\\]\u0005/\u0000\u0000]\u001c\u0001\u0000\u0000\u0000^_\u0005"+
		",\u0000\u0000_\u001e\u0001\u0000\u0000\u0000`d\u0007\u0000\u0000\u0000"+
		"ac\u0007\u0001\u0000\u0000ba\u0001\u0000\u0000\u0000cf\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000e \u0001\u0000"+
		"\u0000\u0000fd\u0001\u0000\u0000\u0000gi\u0007\u0002\u0000\u0000hg\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000k\"\u0001\u0000\u0000\u0000lp\u0005\"\u0000"+
		"\u0000mo\t\u0000\u0000\u0000nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000"+
		"\u0000pq\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000qs\u0001\u0000"+
		"\u0000\u0000rp\u0001\u0000\u0000\u0000st\u0005\"\u0000\u0000t$\u0001\u0000"+
		"\u0000\u0000uv\u0005t\u0000\u0000vw\u0005r\u0000\u0000wx\u0005u\u0000"+
		"\u0000x\u007f\u0005e\u0000\u0000yz\u0005f\u0000\u0000z{\u0005a\u0000\u0000"+
		"{|\u0005l\u0000\u0000|}\u0005s\u0000\u0000}\u007f\u0005e\u0000\u0000~"+
		"u\u0001\u0000\u0000\u0000~y\u0001\u0000\u0000\u0000\u007f&\u0001\u0000"+
		"\u0000\u0000\u0080\u0082\u0007\u0003\u0000\u0000\u0081\u0080\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000"+
		"\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000"+
		"\u0000\u0000\u0085\u0086\u0006\u0013\u0000\u0000\u0086(\u0001\u0000\u0000"+
		"\u0000\u0006\u0000djp~\u0083\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}