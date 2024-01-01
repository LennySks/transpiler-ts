import {compile} from 'transpiler'

export default function loader(source: string) {
    return compile(source)
}