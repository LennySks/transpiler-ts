import myJsxCompiler from 'transpiler'

module.exports = function (source: string) {
    const compiledCode: string = myJsxCompiler.parseSourceCode(source)
    return compiledCode
}