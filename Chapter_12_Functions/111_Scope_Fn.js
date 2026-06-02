// Scope in Functions

let env = "Staging"; // global scope

function setupCOngig(){
    let timeout = 3000; // local scope
    console.log(env); // Output: "Staging" can access global
    console.log(timeout); // Output: 3000 can access local
}

setupConfig();
console.log(env); // Output: "Staging" can access global
nsole.log(timeout); // Error: timeout is not defined, cannot access local scope

