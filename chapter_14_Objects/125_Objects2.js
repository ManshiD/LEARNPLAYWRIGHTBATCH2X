//Objects
//Key and value

let student1 = {name: "Amit", age:65};
let student2 = {name: "Pramod"};
let student3 = {name: "Pramod", age: 87, phone: 887654321};

//Key will not be in double quotes otherwise it will be JSON.

let a = {status: "pass"};
console.log(a.status); //pass
console.log(a["status"]); //pass

let a1 = { status: 'pass' };
console.log(a1.status); //pass

let b = a;
b.status = "fail";
console.log(a.status); //fail
console.log(b.status); //fail   


