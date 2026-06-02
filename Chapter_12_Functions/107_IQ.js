function runTests(name, status, duration) {
    return `${name} : ${status} (${duration}ms)`;
}
const r = runTests("Login", "Passed", 320); // Output: "Test Login has status Passed and took 320ms to run."
console.log(r); // Output: "Test Login has status Passed and took 320ms to run."    

