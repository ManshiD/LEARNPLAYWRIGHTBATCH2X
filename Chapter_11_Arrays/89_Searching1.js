let results =["pass", "fail", "pass", "error", "fail"];
// indexOf returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
results.indexOf("fail"); // Output: 1 (the first occurrence of "fail" is at index 1)
results.indexOf("skip"); // Output: -1 (the element "skip" is not found in the array)

// last index of --searches from the end
results.lastIndexOf("fail"); // Output: 4 (the last occurrence of "fail" is at index 4)

//includes - return boolean
results.includes("error"); // Output: true
results.includes("skip"); // Output: false

//find -returns first matching element
let numbers = [10, 25, 30, 45];
numbers.find(x => x > 20); // 25, 30, 45

//FINDiNDEX
numbers.findIndex(n => n > 20); //1, 2, 3
numbers.findLast(n => n > 20); // 45

numbers.findLastIndex(n => n > 20); // 3