function outer() {
    let message = "Hello";
    console.log("Outer CALLED"); // Output: "Hello"
    function inner() {
        console.log(message); // Output: "Hello" can access outer scope
    }
    return inner; // Return the inner function
}

let fn_inner = outer(); // Output: "Outer CALLED"
fn_inner(); // Output: "Hello" can access outer scope
