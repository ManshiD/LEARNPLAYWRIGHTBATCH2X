// Returns a value
/*
function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "Server Error";
}
getStatus(200); // Output: "Success"
getStatus(404); // Output: "client error"
getStatus(500); // Output: "Server Error"
*/

function logTest(name) {
    console.log(`Running : ${name}`);
    //no return statement, so it will return undefined by default
}
let result = logTest("Login"); // Output: "Running : Login"
console.log(result); // Output: undefined

greet("Alice");

function greet(name) {
    return(`Hello, ${name}!`);
}