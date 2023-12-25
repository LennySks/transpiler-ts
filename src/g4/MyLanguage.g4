grammar MyLanguage;

file: classDeclaration EOF;

classDeclaration: 'class' ID '{' memberDeclaration* '}';

memberDeclaration:
	variableDeclaration
	| functionDeclaration
	| functionInvocation
	| jsx;

variableDeclaration: type ID '=' expression ';' | type ID ';';

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

jsx: '<' ID '>' jsxContent '</' ID '>';

jsxContent: jsx | STRING;

literal: NUMBER | STRING | BOOLEAN;

BOOLEAN: 'true' | 'false';

booleanExpression: BOOLEAN;

argumentList: literal (',' literal)* | booleanExpression;

ID: [a-zA-Z]+;
NUMBER: [0-9]+;
STRING: '"' ( ~["\\] | '\\' .)* '"';
WS: [ \t\n\r]+ -> skip;