// Creating Arrays // Array Literal (preferred)
let browsers = ['Chrome', 'Firefox', 'Safari']; // This is an array literal assigned to the variable 'browsers' containing three string elements

// Array Constructor
let scores = new Array(3); // This creates an array with a length of 3, but it is empty (contains undefined elements)
scores[0] = 1; // Assigning a value to the first element of the 'scores' array
scores[1] = 1; // Assigning a value to the second element of the 'scores' array
scores[2] = 1; // Assigning a value to the third element of the 'scores' array
let scores2 = new Array(1, 2, 3); // This creates an array with three elements: 1, 2, and 3
console.log(scores); // Output: 3
console.log(scores2); // Output: [1, 2, 3]  

let numbers = new Array(100, 200, 300, 400); // This creates an array with a length of 5, but it is empty (contains undefined elements)
console.log(numbers); // Output: [100, 200, 300, 400]

let test = Array.of(10, 20, 30, 40, 50  ); // This creates an array with three elements: 1, 2, and 3
console.log (test); // Output: [10, 20, 30, 40, 50]

//Arrays.from()
let chars = Array.from('Hello'); // This creates an array from the string 'Hello', resulting in ['H', 'e', 'l', 'l', 'o']
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

let numbers1 = Array.from("123456789"); // This creates a new array from the string "12345653"
console.log(numbers1); // Output: ['1', '2', '3', '4', '5', '6', '5', '3']  

