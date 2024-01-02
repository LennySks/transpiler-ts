import { compiler } from '../src/ts/compiler'

test('JavaScript generation for variable declaration', () => {
    const input = 'let x = 5'
    const expectedOutput = 'let x = 5'
    const actualOutput = compiler(input)
    expect(actualOutput).toBe(expectedOutput)
})

test('JavaScript generation for function declaration', () => {
    const input = 'function myFunc() { return 10 }'
    const expectedOutput = 'function myFunc() {\nreturn 10\n}'
    const actualOutput = compiler(input)
    expect(actualOutput).toBe(expectedOutput)
})

test('JavaScript generation for JSX', () => {
    const input = '<div>Hello World</div>'
    const expectedOutput = 'React.createElement("div", null, \'Hello\', \'World\')'
    const actualOutput = compiler(input)
    expect(actualOutput).toBe(expectedOutput)
})

test('JavaScript generation for function declaration with params', () => {
    const input = 'function myFunc(a: number) {a = 20 }'
    const expectedOutput = 'function myFunc(a) {\na = 20\n}'
    const actualOutput = compiler(input)
    expect(actualOutput).toBe(expectedOutput)
})
