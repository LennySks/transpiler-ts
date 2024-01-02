import { compiler } from '../src/ts/compiler'

test('Syntax error for invalid literal', () => {
    const input = 'let x = ' // Invalid literal
    let errorMessage = ''
    try {
        compiler(input)
    } catch (error) {
        errorMessage = error.message
    }
    expect(errorMessage).toBe('Value is undefined')
})

test('Syntax error for invalid function invocation', () => {
    const input = 'let x = x+y' // Invalid function invocation
    let errorMessage = ''
    try {
        compiler(input)
    } catch (error) {
        errorMessage = error.message
    }
    expect(errorMessage).toBe('Member declaration not found')
})

test('Syntax error for object property', () => {
    const input = 'function wrongJsx(){return (<h1>Hello</p>)}' // Invalid object property
    let errorMessage = ''
    try {
        compiler(input)
    } catch (error) {
        errorMessage = error.message
    }
    expect(errorMessage).toBe('JSX tags mismatch: <p> does not match </h1>')
})
