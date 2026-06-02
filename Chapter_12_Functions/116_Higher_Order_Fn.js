// Higher Order Functions
function runwithLoggin (TestFn, TestName) {
    console.log(`Starting: ${TestName}`);
    let result = TestFn();
    console.log(`Finished: ${TestName}-> ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}
runwithLoggin(loginTest, "Login Test"); // Output: Starting: Login Test, Finished: Login Test-> pass
runwithLoggin(loginTestFailed, "Login Test Failed"); // Output: Starting: Login Test Failed, Finished: Login Test Failed-> fail
