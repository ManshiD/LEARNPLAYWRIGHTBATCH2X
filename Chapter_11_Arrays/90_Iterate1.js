// Iterate - Go frm one to another. //

let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]); // Output: 'login', 'checkout', 'search'
}

console.log("===========");

// for...of (cleanest of values)
for (test of tests) {   
    console.log(test); // Output: 'login', 'checkout', 'search'
}

console.log("===========");

tests.forEach((test, index) => {
    console.log(test, index); // Output: 'login' 0, 'checkout' 1, 'search' 
});

console.log("===========");

let students = ["menthis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, "=>", students[student]);
}

console.log("===========");

for(let [i, test] of tests.entries()) {
    console.log(i, test); // Output: 0 => 'login', 1 => 'checkout', 2 => 'search'
}
