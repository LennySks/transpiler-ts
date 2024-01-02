import {compile} from 'mylang-transpiler'

export default function loader(source: string) {
    return compile(source)
}