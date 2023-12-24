grammar MyLanguage;

classDeclaration
    :   'class' ID '{' memberDeclaration* '}'
    ;

memberDeclaration
    :   variableDeclaration
    |   functionDeclaration
    |   functionInvocation
    |   jsx
    ;

variableDeclaration
    :   type ID '=' (STRING | NUMBER | BOOLEAN) ';' 
    |   type ID ';'
    ;

type
    :   'int'
    |   'string'
    |   'boolean'
    ;

functionDeclaration
    :   'function' ID '(' parameterList? ')' '{' (variableDeclaration | functionVarAssignment)* '}'
    ;

functionInvocation
    :   ID '(' argumentList? ')' ';'
    ;

functionVarAssignment
    :   ID '=' (ID | NUMBER | BOOLEAN) ';'
    ;

parameter
    :   type ID
    ;

parameterList
    :   parameter (',' parameter)*
    ;

jsx
    :   '<' ID '>' jsxContent '</' ID '>'
    ;

jsxContent
    :   jsx
    |   STRING
    ;

literal
    :   NUMBER
    |   STRING
    |   BOOLEAN
    ;

BOOLEAN 
    :   'true'
    |   'false'
    ;

booleanExpression
    : BOOLEAN
    ;

argumentList
    :   literal (',' literal)*
    |   booleanExpression
    ;

ID: [a-zA-Z]+ ;
NUMBER: [0-9]+ ;
STRING: '"' ( ~["\\] | '\\' . )* '"';
WS: [ \t\n\r]+ -> skip ;