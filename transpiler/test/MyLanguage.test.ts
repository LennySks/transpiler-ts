import * as fs from 'fs'
import * as path from 'path'
import { parseSourceCode } from '../src/ts'

describe('MyLanguageVisitor', () => {
    test('should test testFileVariable', () => {
        const input = fs.readFileSync(
            path.join(__dirname, 'testFileVariable.myLanguage'),
            'utf-8'
        )
        parseSourceCode(input)
    })

    test('should test testFileFunctions', () => {
        const input = fs.readFileSync(
            path.join(__dirname, 'testFileFunctions.myLanguage'),
            'utf-8'
        )
        parseSourceCode(input)
    })

    test('should test testFileFunctionInvocation', () => {
        const input = fs.readFileSync(
            path.join(__dirname, 'testFileFunctionInvocation.myLanguage'),
            'utf-8'
        )
        parseSourceCode(input)
    })

    test('should test testFileFull', () => {
        const input = fs.readFileSync(
            path.join(__dirname, 'testFileFull.myLanguage'),
            'utf-8'
        )
        parseSourceCode(input)
    })
})