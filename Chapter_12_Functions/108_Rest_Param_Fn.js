//Result of the param
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}
logResult('Login Tests', 1, 2, 3);
logResult('Reg Tests', "Hello", "Pramod");
