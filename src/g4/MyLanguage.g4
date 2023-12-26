grammar MyLanguage;

classDeclaration: 'class' ID '{' memberDeclaration* '}';

memberDeclaration:
	variableDeclaration
	| functionDeclaration
	| functionInvocation
	| jsx;

variableDeclaration: type ID ('=' literal)? ';';

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

jsx: '<' ID '>' (jsx | literal)* '</' ID '>';

literal: NUMBER | STRING | BOOLEAN;

argumentList: literal (',' literal)*;

BOOLEAN: 'true' | 'false';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"';
NUMBER: [0-9]+;
WS: [ \t\n\r]+ -> skip;