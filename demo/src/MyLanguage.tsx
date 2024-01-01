import * as React from 'react'
import * as ReactDOM from 'react-dom'

const myNumber = 10
const myString = 'Hello, console!'
const myBoolean = true


console.log(myString)


function App() {
    return (
        <h1><strong>This</strong><i> is</i> a text <u> with <i>underlining</i></u></h1>
    )
}

const html = App()
const root = document.getElementById('root')
ReactDOM.render(html, root)