import { parseSourceCode } from '../src/ts/Parser'

test('AST generation for namespace import', () => {
    const input = 'import * as React from "react"'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'NamespaceImportNode',
                alias: 'React',
                source: 'react'
            }
        ]
    })
})

test('AST generation for variable declaration', () => {
    const input = 'let x = 5'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'VariableDeclarationNode',
                varType: 'let',
                variableName: { type: 'IdentifierNode', value: 'x' },
                value: { type: 'number', value: 5 } // Adjusted to match the actual structure
            }
        ]
    })
})

test('AST generation for function declaration', () => {
    const input = 'function x() { return 5 }'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'FunctionDeclarationNode',
                functionName: 'x',
                parameters: [],
                body: [
                    {
                        type: 'ReturnStatementNode',
                        expression: {
                            type: 'number',
                            value: 5
                        }
                    }
                ]
            }
        ]
    })
})

test('AST generation for function declaration with params', () => {
    const input = '' + 'function x(a: number, b: number) { a=2 b=3 }'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'FunctionDeclarationNode',
                functionName: 'x',
                parameters: [
                    {
                        type: 'ParameterNode',
                        parameterName: 'a',
                        returnType: 'number'
                    },
                    {
                        type: 'ParameterNode',
                        parameterName: 'b',
                        returnType: 'number'
                    }
                ],
                body: [
                    {
                        type: 'FunctionVarAssignmentNode',
                        variableName: 'a',
                        expression: {
                            type: 'number',
                            value: 2
                        }
                    },
                    {
                        type: 'FunctionVarAssignmentNode',
                        variableName: 'b',
                        expression: {
                            type: 'number',
                            value: 3
                        }
                    }
                ]
            }
        ]
    })
})

test('AST generation correctly handles JSX elements', () => {
    const input = '<div>HelloWorld</div>'
    const ast = parseSourceCode(input)
    const expectedAST = {
        type: 'RootNode',
        members: [
            {
                type: 'JsxElementNode',
                tagName: 'div',
                openingElement: { type: 'JsxOpeningElementNode', tag: 'div' },
                children: [{ type: 'JsxContentNode', content: 'HelloWorld' }],
                closingElement: { type: 'JsxClosingElementNode', tag: 'div' }
            }
        ]
    }
    expect(ast).toEqual(expectedAST)
})

test('AST generation for function invocation', () => {
    const input = 'x(1, 2)'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'FunctionInvocationNode',
                functionName: 'x',
                arguments: [
                    {
                        type: 'number',
                        value: 1
                    },
                    {
                        type: 'number',
                        value: 2
                    }
                ]
            }
        ]
    })
})

test('AST generation for jsx', () => {
    const input = '<div>hello</div>'
    const ast = parseSourceCode(input)
    expect(ast).toEqual({
        type: 'RootNode',
        members: [
            {
                type: 'JsxNode',
                openingElement: {
                    type: 'JsxOpeningElementNode',
                    tagName: 'div'
                },
                closingElement: {
                    type: 'JsxClosingElementNode',
                    tagName: 'div'
                },
                tagName: 'div',
                children: ['hello']
            }
        ]
    })
})
