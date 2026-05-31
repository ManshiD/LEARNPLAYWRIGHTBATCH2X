const greet = function sayName(name) { 
    return `Hello, ${name}`;
}

let r = greet("Alice");
console.log(r); // Output: "Hello, Alice"

console.log("=================");

//Type 4 normal function

function greet1(name1) {
    return `Hello, ${name1}`;
}
console.log(greet1("Pramod")); // Output: "Hello, Pramod"

// Function as Expression
const greet2 = function(name1) {
    return `Hello, ${name1}`;
}

console.log(greet2("Bob")); // Output: "Hello, Bob"