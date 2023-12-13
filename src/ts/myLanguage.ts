class MyLanguage {
    int myNumber = 10;
    string myString = "Hello, world!";
    boolean myBoolean = true;

    function myFunction(int a, string b, boolean c) {
        myNumber = a;
        myString = b;
        myBoolean = c;
    }

    myFunction(20, "Goodbye, world!", false);

    <MyComponent>
        "This is a JSX component"
    </MyComponent>
}