import '../css/style.css'
import { forty } from './module'

for (let i = 0; i < 2; i++) {
    console.log('It works! ' + (i + f()))
}

function f(): number {
    return forty() + 2
}

export { f }
