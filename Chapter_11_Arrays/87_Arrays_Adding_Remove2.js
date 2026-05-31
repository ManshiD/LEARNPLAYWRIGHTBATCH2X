let arr = [1, 2, 3];
arr.push(4, 5, 6);  
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//splice(start, deleteCount, itemtoadd)
arr.splice(2, 1); // This inserts the value 100 at index 2 without deleting any elements
console.log(arr); // Output: [1, 2, 100, 3, 4, 5, 6]

arr.splice(2, 0, 99); // This deletes 2 elements starting from index 4
console.log(arr); // add 99 at index 2 without deleting any elements

arr.splice(2, 1, 99); // This deletes 2 elements starting from index 4
console.log(arr); 

arr.splice(1, 2, 10, 20); // This deletes 2 elements starting from index 4
console.log(arr); // Output: [1, 10, 20, 3, 4, 5, 6]