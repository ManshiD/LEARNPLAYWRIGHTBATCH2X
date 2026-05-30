// Template literals are a way to create strings in JavaScript that can include embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes. 

let firstname = "Prrammod"; // This is a string literal assigned to the variable 'firstname'
let fullname = `Hi ${firstname} Dutta`; // This is a template literal assigned to the variable 'fullname' using backticks and embedding the variable 'firstname'
console.log(fullname); // Output: Hi Prrammod Dutta

let a = 10;
let b = 20;
let sum = `The sum of ${a} and ${b} is ${a + b}`;

let env = "staging";
let userid = 12345;
let apiUrl = `https://api-${env}.tekion.com/users/${userid}`;
console.log(apiUrl); // Output: https://api-staging.tekion.com/users/12345

// Playwright
/*
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-column="${columnName}"]`).click();
*/

// Logs
const testName = "Login Test";
const status = "Failed";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in Duration: ${duration} seconds`); // Output: [Failed] Login Test - Duration: 2.3 seconds

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` }); // This will save a screenshot with a filename that includes the test case name and a timestamp for uniqueness 

const user = "pramod";
const role = "admin";

const payload = {
    "username": "${username}",
    "role": "${role}",
    "timestamp": "${new Date().toISOString()}"
};    
console.log(payload); // Output: { username: 'pramod', role: 'admin', timestamp: '2024-06-01T12:34:56.789Z' }   
