# MyLanguage

Auteur: David Pietrzak

MyLanguage is een aangepast framework voor het transpileren van een TypeScript-achtige syntaxis naar JavaScript, met
ondersteuning voor een verscheidenheid aan syntactische functies en JSX-expressies.

## Features

Dit framework ondersteunt de volgende syntactische functies:

- Declaratie van variabelen en functies.
- Literals: number, boolean, string.
- Functie-aanroepen met argumenten.
- Geneste JSX-expressies.

## Bouwinstructies

Volg deze stappen in de gegeven volgorde om de projecten te bouwen:

1. **Project Clonen**
   ```shell
   git clone https://gitlab.com/kdg-ti/programmeren-3/projecten-23-24/david.pietrzak.git
   ```

1. **Transpiler Bouwen**
   ```shell
   npm install
   npm run build
   ```

2. **Loader Bouwen**
   ```shell
   npm install
   npm run build
   ```

3. **Demo-applicatie Bouwen En Starten**
   ```shell
   npm install
   ```

## Gebruiksinstructies

Na dat u de projecten heeft gebouwd, kunt u de volgende commando's uitvoeren:

- Op Demo-applicatie

```shell
npm run start
```

- De testen op Transpiler

```shell
npm run test
  ```

## Voorbeeldbroncode

```tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

let myNumber = 10
let myString = 'Hello, console!'
let myBoolean = true

function myFunction(a: number, b: string, c: boolean) {
    myNumber = a
    myString = b
    myBoolean = c
}

console.log(myNumber, myString, myBoolean)

myFunction(3, 'Goodbye, world!', false)

console.log(myNumber, myString, myBoolean)

function App() {
    return (
        <h1><strong>This</strong><i> is</i> a text <u> with <i>underlining</i></u></h1>
    )
}

const tsx = App()
const root = document.getElementById('root')
ReactDOM.render(tsx, root)
```

## Compilatie-uitvoer

```javascript
import * as React from 'react'
import * as ReactDOM from 'react-dom'

let myNumber = 10
let myString = 'Hello, console!'
let myBoolean = true

function changeValues(a, b, c) {
    myNumber = a
    myString = b
    myBoolean = c
}

changeValues(20, 'Goodbye, world!', false)

function App() {
    return React.createElement("h1", null, "Hallo, ", React.createElement("strong", null, "wereld"), "!")
}

const tsx = App()
const root = document.getElementById('root')
ReactDOM.render(tsx, root)
```

## EBNF Grammaticabeschrijving

```antlrv4
grammar MyLanguage;

root: memberDeclaration+;

memberDeclaration:
    importStatement
	| variableDeclaration
	| functionDeclaration
	| functionInvocation
	| returnStatement
	| functionVarAssignment
	| jsx;

importStatement: 'import' '*' 'as' ID 'from' STRING;

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
```

