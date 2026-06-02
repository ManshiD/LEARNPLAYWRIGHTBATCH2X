function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for #${testName}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3);
console.log(retry("Login")); // Output: Attempt 1/3 for #Login Test
console.log(retry("Login")); // Output: Attempt 2/3 for #Login Test
console.log(retry("Login")); // Output: Attempt 3/3 for #Login Test
console.log(retry("Login")); // Output: Login Test exceeded max retries (3)