// Generated from ./src/g4/MyLanguage.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MyLanguageLexer extends Lexer {
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
	public static readonly BOOLEAN = 20;
	public static readonly ID = 21;
	public static readonly STRING = 22;
	public static readonly NUMBER = 23;
	public static readonly WS = 24;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "':'", 
                                                            "'='", "'return'", 
                                                            "'number'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'const'", "'let'", 
                                                            "'var'", "'('", 
                                                            "')'", "'function'", 
                                                            "'{'", "'}'", 
                                                            "'.'", "','", 
                                                            "'<'", "'>'", 
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
                                                             "BOOLEAN", 
                                                             "ID", "STRING", 
                                                             "NUMBER", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "BOOLEAN", "ID", "STRING", "NUMBER", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MyLanguageLexer._ATN, MyLanguageLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MyLanguage.g4"; }

	public get literalNames(): (string | null)[] { return MyLanguageLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MyLanguageLexer.symbolicNames; }
	public get ruleNames(): string[] { return MyLanguageLexer.ruleNames; }

	public get serializedATN(): number[] { return MyLanguageLexer._serializedATN; }

	public get channelNames(): string[] { return MyLanguageLexer.channelNames; }

	public get modeNames(): string[] { return MyLanguageLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,24,176,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
	1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,
	15,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	1,19,1,19,3,19,134,8,19,1,20,1,20,5,20,138,8,20,10,20,12,20,141,9,20,1,
	21,1,21,1,21,1,21,5,21,147,8,21,10,21,12,21,150,9,21,1,21,1,21,1,21,1,21,
	1,21,5,21,157,8,21,10,21,12,21,160,9,21,1,21,3,21,163,8,21,1,22,4,22,166,
	8,22,11,22,12,22,167,1,23,4,23,171,8,23,11,23,12,23,172,1,23,1,23,0,0,24,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,1,0,6,3,0,65,90,
	95,95,97,122,4,0,48,57,65,90,95,95,97,122,2,0,34,34,92,92,2,0,39,39,92,
	92,1,0,48,57,3,0,9,10,13,13,32,32,184,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,
	0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
	0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
	0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
	0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,
	3,51,1,0,0,0,5,53,1,0,0,0,7,60,1,0,0,0,9,67,1,0,0,0,11,74,1,0,0,0,13,82,
	1,0,0,0,15,88,1,0,0,0,17,92,1,0,0,0,19,96,1,0,0,0,21,98,1,0,0,0,23,100,
	1,0,0,0,25,109,1,0,0,0,27,111,1,0,0,0,29,113,1,0,0,0,31,115,1,0,0,0,33,
	117,1,0,0,0,35,119,1,0,0,0,37,121,1,0,0,0,39,133,1,0,0,0,41,135,1,0,0,0,
	43,162,1,0,0,0,45,165,1,0,0,0,47,170,1,0,0,0,49,50,5,58,0,0,50,2,1,0,0,
	0,51,52,5,61,0,0,52,4,1,0,0,0,53,54,5,114,0,0,54,55,5,101,0,0,55,56,5,116,
	0,0,56,57,5,117,0,0,57,58,5,114,0,0,58,59,5,110,0,0,59,6,1,0,0,0,60,61,
	5,110,0,0,61,62,5,117,0,0,62,63,5,109,0,0,63,64,5,98,0,0,64,65,5,101,0,
	0,65,66,5,114,0,0,66,8,1,0,0,0,67,68,5,115,0,0,68,69,5,116,0,0,69,70,5,
	114,0,0,70,71,5,105,0,0,71,72,5,110,0,0,72,73,5,103,0,0,73,10,1,0,0,0,74,
	75,5,98,0,0,75,76,5,111,0,0,76,77,5,111,0,0,77,78,5,108,0,0,78,79,5,101,
	0,0,79,80,5,97,0,0,80,81,5,110,0,0,81,12,1,0,0,0,82,83,5,99,0,0,83,84,5,
	111,0,0,84,85,5,110,0,0,85,86,5,115,0,0,86,87,5,116,0,0,87,14,1,0,0,0,88,
	89,5,108,0,0,89,90,5,101,0,0,90,91,5,116,0,0,91,16,1,0,0,0,92,93,5,118,
	0,0,93,94,5,97,0,0,94,95,5,114,0,0,95,18,1,0,0,0,96,97,5,40,0,0,97,20,1,
	0,0,0,98,99,5,41,0,0,99,22,1,0,0,0,100,101,5,102,0,0,101,102,5,117,0,0,
	102,103,5,110,0,0,103,104,5,99,0,0,104,105,5,116,0,0,105,106,5,105,0,0,
	106,107,5,111,0,0,107,108,5,110,0,0,108,24,1,0,0,0,109,110,5,123,0,0,110,
	26,1,0,0,0,111,112,5,125,0,0,112,28,1,0,0,0,113,114,5,46,0,0,114,30,1,0,
	0,0,115,116,5,44,0,0,116,32,1,0,0,0,117,118,5,60,0,0,118,34,1,0,0,0,119,
	120,5,62,0,0,120,36,1,0,0,0,121,122,5,60,0,0,122,123,5,47,0,0,123,38,1,
	0,0,0,124,125,5,116,0,0,125,126,5,114,0,0,126,127,5,117,0,0,127,134,5,101,
	0,0,128,129,5,102,0,0,129,130,5,97,0,0,130,131,5,108,0,0,131,132,5,115,
	0,0,132,134,5,101,0,0,133,124,1,0,0,0,133,128,1,0,0,0,134,40,1,0,0,0,135,
	139,7,0,0,0,136,138,7,1,0,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,
	0,0,139,140,1,0,0,0,140,42,1,0,0,0,141,139,1,0,0,0,142,148,5,34,0,0,143,
	147,8,2,0,0,144,145,5,92,0,0,145,147,9,0,0,0,146,143,1,0,0,0,146,144,1,
	0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,
	148,1,0,0,0,151,163,5,34,0,0,152,158,5,39,0,0,153,157,8,3,0,0,154,155,5,
	92,0,0,155,157,9,0,0,0,156,153,1,0,0,0,156,154,1,0,0,0,157,160,1,0,0,0,
	158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,158,1,0,0,0,161,163,
	5,39,0,0,162,142,1,0,0,0,162,152,1,0,0,0,163,44,1,0,0,0,164,166,7,4,0,0,
	165,164,1,0,0,0,166,167,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,46,
	1,0,0,0,169,171,7,5,0,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,1,0,0,0,
	172,173,1,0,0,0,173,174,1,0,0,0,174,175,6,23,0,0,175,48,1,0,0,0,10,0,133,
	139,146,148,156,158,162,167,172,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyLanguageLexer.__ATN) {
			MyLanguageLexer.__ATN = new ATNDeserializer().deserialize(MyLanguageLexer._serializedATN);
		}

		return MyLanguageLexer.__ATN;
	}


	static DecisionsToDFA = MyLanguageLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}