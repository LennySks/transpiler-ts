grammar MyLanguage;

root: memberDeclaration+;

memberDeclaration:
	variableDeclaration
	| functionDeclaration
	| functionInvocation
	| returnStatement
	| jsx;

variableDeclaration: type ID ('=' literal)? ';';

returnStatement: 'return' expression | functionInvocation | ID';';

type: 'int' | 'string' | 'boolean';

expression:
	'(' expression ')'
	| expression ('*' | '/' | '%') expression
	| expression ('+' | '-') expression
	| expression ('<' | '>' | '<=' | '>=') expression
	| expression ('==' | '!=') expression
	| expression ('&&' | '||') expression
	| expression '?' expression ':' expression
	| ID
	| NUMBER
	| STRING
	| BOOLEAN;

functionDeclaration:
	'function' ID '(' parameterList? ')' '{' (
		variableDeclaration
		| functionVarAssignment
		| functionInvocation
		| jsx
	)* '}';

functionInvocation: ID '(' argumentList? ')' ';';

functionVarAssignment: ID '=' expression ';';

parameter: type ID;

parameterList: parameter (',' parameter)*;

jsx: jsxOpen (jsx | literal | ID)* jsxClose;

jsxOpen: '<' ID '>';

jsxClose: '</' ID '>';

literal: STRING | NUMBER | BOOLEAN;

argumentList: (literal | ID) (',' (literal | ID))*;

BOOLEAN: 'true' | 'false';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"';
NUMBER: [0-9]+;
WS: [ \t\n\r]+ -> skip;