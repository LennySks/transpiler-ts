import * as fs from 'fs'
import * as path from 'path'
import { parseSourceCode } from '../src/ts/index'

describe('MyLanguageVisitor', () => {
    test('should visit class declaration and log messages', () => {
        const input = fs.readFileSync(
            path.join(__dirname, 'testFileVariable.myLanguage'),
            'utf-8'
        )
        parseSourceCode(input)
    })

    // test('should visit variable declaration and log messages', () => {
    //     const input = fs.readFileSync(
    //         path.join(__dirname, 'testFileFunctions.myLanguage'),
    //         'utf-8'
    //     )
    //     parseSourceCode(input)
    // })
})
