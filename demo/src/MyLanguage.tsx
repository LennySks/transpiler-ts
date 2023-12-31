let myNumber = 10
let myString = 'Hello, console!'
let myBoolean = true

function myFunction(a: number, b: string, c: boolean) {
    myNumber = a
    myString = b
    myBoolean = c
}

// #TODO: fix this multiple things in

// (myString, myNumber, myBoolean)
myFunction(3, 'Goodbye, world!', false)

// (myString, myNumber, myBoolean)

function App() {
    return (
        <h1><strong>This</strong><i> is</i> a text <u> with <i>underlining</i></u></h1>
    )
}

const result = App()
document.body.innerHTML = result