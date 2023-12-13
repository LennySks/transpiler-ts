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
    :   type ID '=' (NUMBER | ID) ';' 
    |   type ID ';'
    ;

type
    :   'int'
    |   'string'
    |   'boolean'
    ;

functionDeclaration
    :   'function' ID '(' parameterList? ')' '{' memberDeclaration* '}'
    ;

functionInvocation
    :   ID '(' argumentList? ')' ';'
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

parameterList
    :   type ID (',' type ID)*
    ;

argumentList
    :   literal (',' literal)*
    ;

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;

STRING: '"' .*? '"' ;
BOOLEAN: 'true' | 'false' ;
WS: [ \t\n\r]+ -> skip ;