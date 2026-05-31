function greetByName(name) {
    console.log("Hi " + name);
}

greetByName("Alice"); // Output: "Hi Alice"
let result = greetByName("Bob"); // Output: "Hi Bob"
console.log(result); // Output: undefined
console.log("=================");
function beggar(money) {
    console.log("Thanks" + money);
}

let returnMesomething = beggar(100); // Output: "Thanks100"
console.log(returnMesomething); // Output: undefined
console.log("=================");