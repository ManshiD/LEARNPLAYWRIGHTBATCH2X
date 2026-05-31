let fruits = ["banana", "apple", "cherry"]; // This is an array literal assigned to the variable 'fruits' containing three string elements
fruits.sort(); // This sorts the 'fruits' array in place, resulting in ["apple", "banana", "cherry"]
console.log(fruits); // Output: ["apple", "banana", "cherry"]

let numbers = [3, 1, 4]; // This is an array literal assigned to the variable 'numbers' containing four numeric elements
numbers.sort(); // This sorts the 'numbers' array in place, resulting in [1, 3, 4]
console.log(numbers); // Output: [1, 3, 4]

let nums = [10, 1, 21, 2]; // This is an array literal assigned to the variable 'nums' containing four numeric elements
nums.sort(); // This sorts the 'nums' array in place, resulting in [1, 10, 2, 21] (lexicographical order)
console.log(nums); // Output: [1, 10, 2, 21]
// Natural Sorting, Lexographic Sorting
nums.sort((a, b) => a - b); // Ascending
// Sorts the 'nums' array in place in ascending order, resulting in [1, 2, 10, 21]
// Output: [1, 2, 10, 21]
nums.sort((a, b) => b - a); // Descending
console.log(nums); // Output: [21, 10, 2, 1]

