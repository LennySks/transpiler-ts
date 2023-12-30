let myNumber = 10
let myString = 'Hello, world!'
let myBoolean = true

function myFunction(a: number, b: string, c: boolean) {
    myNumber = a
    myString = b
    myBoolean = c
}

myFunction(myNumber, 'Goodbye, world!', false)

function App() {
    return (
        <h1><strong>This</strong><i> is</i> a text <u> with <i>underlining</i></u></h1>
    )
}