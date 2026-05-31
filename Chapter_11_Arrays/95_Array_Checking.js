// Checking Arrays

// Check if something is an array
let result = Array.isArray([1, 2, 3]); // This checks if the array literal [1, 2, 3] is indeed an array
console.log(result); // Output: true (checks if 'arr' is an array)

let result1 = Array.isArray("a"); // This checks if the string "a" is an array // []
console.log(result1); // Output: false (checks if 'str' is an array)    

// every & some
[80, 90, 85].every(s => s >= 70); // true   // This checks if every element in the array [80, 90, 85] is greater than or equal to 80
[80, 60, 85].every(s => s >= 70); // false   // This checks if every element in the array [80, 60, 85] is greater than or equal to 70

//Playwright API
[200, 201, 204].every(statuscode => statuscode > 200); // true   // This checks if every element in the array [200, 201, 204] is a successful HTTP status code (between 200 and 299)

// SOME - at least one element must pass the test
[80, 60, 85].some(s => s >= 70); // true   // This checks if at least one element in the array [80, 60, 85] is greater than or equal to 70
[80, 90, 85].some(s => s >= 70); // false   // This checks if at least one element in the array [80, 90, 85] is greater than or equal to 90

//arrow function
// s => s >= 70; // This is an arrow function that takes a single parameter 's' and returns true if 's' is greater than or equal to 70, and false otherwise. It is used as a callback function in the 'every' and 'some' methods to test each element of the array against the condition.
