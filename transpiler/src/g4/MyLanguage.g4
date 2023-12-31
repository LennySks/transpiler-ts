grammar MyLanguage;

root: memberDeclaration+;

memberDeclaration:
	variableDeclaration
	| functionDeclaration
	| functionInvocation
	| returnStatement
	| functionVarAssignment
	| jsx;


variableDeclaration: varType ID (':' returnType)? ('=' (literal | ID | functionInvocation))?;

returnStatement: 'return' (expression | functionInvocation | ID);

returnType: 'number' | 'string' | 'boolean';

varType: 'const' | 'let' | 'var';

expression:
	'(' expression ')'
	| ID
	| literal
	| objectPropertyAccess
	| jsx;


functionDeclaration: 'function' ID '(' parameterList? ')' '{' memberDeclaration+ '}';

functionInvocation: (ID '.')? ID '(' argumentList? ')';

functionVarAssignment: (ID | objectPropertyAccess) '=' expression;

parameter: ID ':' returnType;

parameterList: parameter (',' parameter)*;

jsx: jsxOpen (jsx | literal | ID)* jsxClose;

jsxOpen: '<' ID '>';

jsxClose: '</' ID '>';

literal: STRING | NUMBER | BOOLEAN;

argumentList: (literal | ID) (',' (literal | ID))*;

objectPropertyAccess: ID ('.' ID)+;

BOOLEAN: 'true' | 'false';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ~["\\] | '\\' .)* '"' | '\'' ( ~['\\] | '\\' .)* '\'';
NUMBER: [0-9]+;
WS: [ \t\n\r]+ -> skip;