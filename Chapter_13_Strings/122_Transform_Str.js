let str = "   Hello, World!   ";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.trim()); // "Hello, World!" - removes whitespace from both ends of the string
str.trimStart(); // "Hello, World!   " - removes whitespace from the start of the string
str.trimEnd(); // "   Hello, World!" - removes whitespace from the end of the string

// Replacing parts of a string
console.log(str.replace("Hello", "Hi")); // "   Hi, World!   "
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

let msg = "TEST: FAIL, RETRY: FAIL.";
msg.replace("FAIIL", "PASS"); // "TEST: FAIL, RETRY: FAIL." - no change because "FAIIL" is not found
console.log(msg.replace("FAIIL", "PASS")); // "TEST: FAIL, RETRY: FAIL." - no change because "FAIIL" is not found

console.log(msg); // "TEST: FAIL, RETRY: FAIL." - original string remains unchanged because strings are immutable
console.log(msg.replace(/FAIL/g, "PASS")); // "TEST: PASS, RETRY: PASS." - creates a new string with all occurrences of "FAIL" replaced with "PASS"
console.log(msg.replaceAll("FAIL", "PASS")); // "TEST: PASS, RETRY: PASS." - replaces all occurrences of "FAIL" with "PASS" 

msg.replace(/FAIL/g, "PASS"); // "TEST: PASS, RETRY: PASS." - replaces all occurrences of "FAIL" with "PASS"msg.replace(/FAIL/g, "PASS"); // "TEST: PASS, RETRY: PASS." - replaces all occurrences of "FAIL" with "PASS"

//Concatenation
"Hello" + "" + "World"; // "HelloWorld"
"Hello".concat(" ", "World"); // "Hello World"
`${"Hello"} ${"World"}`; // "Hello World" - template literals allow for embedding expressions within strings

let url = "https://staging.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa")); // "https://qa.vwo.con?app=pramod" - creates a new string with "staging" replaced by "qa"

let r = "pass, fail, skip".split(","); // ["pass", " fail", " skip"] - splits the string into an array of substrings based on the specified separator
console.log(r); // ["pass", " fail", " skip"]

let rr = "test_login_pass".split("_").join(" "); // "test login pass" - splits the string into an array of substrings based on the specified separator and then joins them with a space
console.log(rr); // "test login pass"

let parts = ["2024", "03", "07"];
let date = parts.join("-"); // "2024-03-07" - joins the elements of the array into a single string with the specified separator
console.log(date); // "2024-03-07"
