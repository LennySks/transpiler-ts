import {parseSourceCode} from 'transpiler'

export default function loader(source: string) {
    return parseSourceCode(source)
}