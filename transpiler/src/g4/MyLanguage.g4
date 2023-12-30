grammar MyLanguage;

root: memberDeclaration+;

memberDeclaration:
	variableDeclaration
	| functionDeclaration
	| functionInvocation
	| returnStatement
	| functionVarAssignment
	| jsx
	;

variableDeclaration: varType ID (':' returnType)? ('=' literal)? ';';

returnStatement: 'return' expression | functionInvocation | jsx | ID ';';

returnType: 'number' | 'string' | 'boolean';

varType: 'const' | 'let' | 'var';

expression:
	'(' expression ')'
	| expression ('*' | '/' | '%') expression
	| expression ('+' | '-') expression
	| expression ('<' | '>' | '<=' | '>=') expression
	| expression ('==' | '!=') expression
	| expression ('&&' | '||') expression
	| expression '?' expression ':' expression
	| jsx
	| ID
	| literal
	;

functionDeclaration:
	'function' ID '(' parameterList? ')' '{' memberDeclaration+ '}';

functionInvocation: (ID '.') ? ID '(' argumentList? ')' ';';

functionVarAssignment: ID '=' expression ';';

parameter: ID ':' returnType;

parameterList: parameter (',' parameter)*;

jsx: jsxOpen (jsx | literal | ID)* jsxClose;

jsxOpen: '<' ID '>';

jsxClose: '</' ID '>';

literal: STRING | NUMBER | BOOLEAN;

argumentList: (literal | ID) (',' (literal | ID))*;

BOOLEAN: 'true' | 'false';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"' | '\'' ( ~['\\] | '\\' .)* '\'';
NUMBER: [0-9]+;
WS: [ \t\n\r]+ -> skip;