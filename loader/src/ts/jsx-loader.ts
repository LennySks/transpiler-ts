import myJsxCompiler from 'my-language-transpiler'

module.exports = function (source: string) {
    const compiledCode: string = myJsxCompiler.compile(source)
    return compiledCode
}