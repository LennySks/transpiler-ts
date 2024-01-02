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
   cd transpiler
   npm install
   npm run build
   ```

2. **Loader Bouwen**
   ```shell
   cd ../loader
   npm install
   npm run build
   ```

3. **Demo-applicatie Bouwen**
   ```shell
   cd ../demo
   npm install
   ```

## Gebruiksinstructies

Na dat u de projecten heeft gebouwd, kunt u de volgende commando's uitvoeren:

- Op Demo-applicatie (in de demo map)

```shell
npm run start
```

- De testen op Transpiler (in de transpiler map)

```shell
npm run test
  ```

## Voorbeeldbroncode

```tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

let myNumber = 10
let myString = 'Hello console!'
let myBoolean = true

function logger(message: string) {
    return console.warn(message)
}

logger('ERROR 404')

function App() {
    return (
        <h1><strong>This</strong><i> is</i> a text <u> with <i>underlining</i></u></h1>
    )
}

const html = App()
ReactDOM.render(html, document.getElementById('root'))
```

## Compilatie-uitvoer

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";

const myNumber = 10
const myString = "Hello console!"
const myBoolean = true

function logger(message) {
    return console.warn(message)
}

logger("ERROR 404");

function App() {
    return (React.createElement("h1", null, React.createElement("strong", null, 'This'), React.createElement("i", null, 'is'), 'a', 'text', React.createElement("u", null, 'with', React.createElement("i", null, 'underlining'))))
}

const html = App()
const root = document.getElementById("root")
ReactDOM.render(html, root);
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

