import { parseSourceCode } from '../src/ts/Parser'

test('Syntax error reporting for incorrect variable declaration', () => {
    const input = ' x 5' // Missing 'variable type'
    expect(() => parseSourceCode(input)).toThrow('Member declaration not found')
})

test('Syntax error reporting for incorrect function declaration', () => {
    const input = 'function x { return 5 }' // Missing parentheses
    expect(() => parseSourceCode(input)).toContain(
        'Member declaration not found',
    )
})

test('Syntax error reporting for incorrect function declaration with params', () => {
    const input = 'function x(a: number, b: number) { a=2 b=3' // Missing closing brace
    expect(() => parseSourceCode(input)).toThrow()
})

test('Syntax error reporting for incorrect function invocation', () => {
    const input = 'x(1 2)' // Missing comma
    expect(() => parseSourceCode(input)).toThrow()
})
