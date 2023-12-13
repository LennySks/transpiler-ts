// Generated from MyLanguage.g4 by ANTLR 4.13.1
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
	public static readonly ID = 16;
	public static readonly NUMBER = 17;
	public static readonly STRING = 18;
	public static readonly BOOLEAN = 19;
	public static readonly WS = 20;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'class'", 
                                                            "'{'", "'}'", 
                                                            "'='", "';'", 
                                                            "'int'", "'string'", 
                                                            "'boolean'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "'<'", "'>'", 
                                                            "'</'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "NUMBER", 
                                                             "STRING", "BOOLEAN", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "ID", "NUMBER", "STRING", 
		"BOOLEAN", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,20,135,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,
	2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,
	1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,15,1,15,5,15,99,8,15,
	10,15,12,15,102,9,15,1,16,4,16,105,8,16,11,16,12,16,106,1,17,1,17,5,17,
	111,8,17,10,17,12,17,114,9,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,
	18,1,18,1,18,3,18,127,8,18,1,19,4,19,130,8,19,11,19,12,19,131,1,19,1,19,
	1,112,0,20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
	13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,1,0,4,3,0,65,90,95,95,97,122,
	4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,139,0,1,1,0,
	0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
	0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
	0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
	0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,47,1,0,0,0,5,49,1,0,0,0,
	7,51,1,0,0,0,9,53,1,0,0,0,11,55,1,0,0,0,13,59,1,0,0,0,15,66,1,0,0,0,17,
	74,1,0,0,0,19,83,1,0,0,0,21,85,1,0,0,0,23,87,1,0,0,0,25,89,1,0,0,0,27,91,
	1,0,0,0,29,94,1,0,0,0,31,96,1,0,0,0,33,104,1,0,0,0,35,108,1,0,0,0,37,126,
	1,0,0,0,39,129,1,0,0,0,41,42,5,99,0,0,42,43,5,108,0,0,43,44,5,97,0,0,44,
	45,5,115,0,0,45,46,5,115,0,0,46,2,1,0,0,0,47,48,5,123,0,0,48,4,1,0,0,0,
	49,50,5,125,0,0,50,6,1,0,0,0,51,52,5,61,0,0,52,8,1,0,0,0,53,54,5,59,0,0,
	54,10,1,0,0,0,55,56,5,105,0,0,56,57,5,110,0,0,57,58,5,116,0,0,58,12,1,0,
	0,0,59,60,5,115,0,0,60,61,5,116,0,0,61,62,5,114,0,0,62,63,5,105,0,0,63,
	64,5,110,0,0,64,65,5,103,0,0,65,14,1,0,0,0,66,67,5,98,0,0,67,68,5,111,0,
	0,68,69,5,111,0,0,69,70,5,108,0,0,70,71,5,101,0,0,71,72,5,97,0,0,72,73,
	5,110,0,0,73,16,1,0,0,0,74,75,5,102,0,0,75,76,5,117,0,0,76,77,5,110,0,0,
	77,78,5,99,0,0,78,79,5,116,0,0,79,80,5,105,0,0,80,81,5,111,0,0,81,82,5,
	110,0,0,82,18,1,0,0,0,83,84,5,40,0,0,84,20,1,0,0,0,85,86,5,41,0,0,86,22,
	1,0,0,0,87,88,5,60,0,0,88,24,1,0,0,0,89,90,5,62,0,0,90,26,1,0,0,0,91,92,
	5,60,0,0,92,93,5,47,0,0,93,28,1,0,0,0,94,95,5,44,0,0,95,30,1,0,0,0,96,100,
	7,0,0,0,97,99,7,1,0,0,98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,
	1,0,0,0,101,32,1,0,0,0,102,100,1,0,0,0,103,105,7,2,0,0,104,103,1,0,0,0,
	105,106,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,34,1,0,0,0,108,112,
	5,34,0,0,109,111,9,0,0,0,110,109,1,0,0,0,111,114,1,0,0,0,112,113,1,0,0,
	0,112,110,1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,34,0,0,116,
	36,1,0,0,0,117,118,5,116,0,0,118,119,5,114,0,0,119,120,5,117,0,0,120,127,
	5,101,0,0,121,122,5,102,0,0,122,123,5,97,0,0,123,124,5,108,0,0,124,125,
	5,115,0,0,125,127,5,101,0,0,126,117,1,0,0,0,126,121,1,0,0,0,127,38,1,0,
	0,0,128,130,7,3,0,0,129,128,1,0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,
	132,1,0,0,0,132,133,1,0,0,0,133,134,6,19,0,0,134,40,1,0,0,0,6,0,100,106,
	112,126,131,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyLanguageLexer.__ATN) {
			MyLanguageLexer.__ATN = new ATNDeserializer().deserialize(MyLanguageLexer._serializedATN);
		}

		return MyLanguageLexer.__ATN;
	}


	static DecisionsToDFA = MyLanguageLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}