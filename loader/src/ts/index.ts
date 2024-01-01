import compiler from 'transpiler/'

export default function loader(source) {
    return compiler(source)
}

module.exports = loader