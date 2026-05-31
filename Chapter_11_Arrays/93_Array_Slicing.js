// Slicing & Combining
let arr =  [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // Start, end-1
// Output: [2, 3]
console.log(arr.slice(2, 4)); // Start, end-1
// Output: [3, 4]
console.log(arr.slice(2, 5)); // Start, end-1
// Output: [3, 4, 5]
console.log(arr.slice(2)); // Start, end-1
// Output: [3, 4, 5]
console.log(arr.slice(-2)); // Start, end-1
// Output: [4, 5]
console.log(arr.slice(-3, -1)); // Start, end-1
// Output: [3, 4]
console.log(arr.slice(0)); // Start, end-1
// Output: [1, 2, 3, 4, 5]
console.log(arr.slice(0, -1)); // Start, end-1
// Output: [1, 2, 3, 4]
console.log(arr.slice(-3)); // Start, end-1
// Output: [3, 4, 5]

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2); // Start, deleteCount
console.log(arr); // Output: [10, 40, 50]
console.log(removed); // Output: [20, 30]
