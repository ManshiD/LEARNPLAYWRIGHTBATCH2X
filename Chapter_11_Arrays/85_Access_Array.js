//Accessing & Modyfing
let statuses = ["pass", "fail", "skip"]; // This is an array literal assigned to the variable 'statuses' containing three string elements
console.log(statuses[0]); // Output: "pass"
console.log(statuses[1]); // Output: "fail"
console.log(statuses[2]); // Output: "skip"
console.log(statuses.at(-1)); // Output: "skip"
console.log(statuses.at(-2)); // Output: "fail"
console.log(statuses.at(-3)); // Output: "pass"
console.log(statuses.at(-4)); // Output: undefined (index out of bounds)

//Modify
statuses[1] = "blocked"; // This modifies the second element of the 'statuses' array from "fail" to "blocked"
console.log(statuses); // Output: ["pass", "blocked", "skip"]
