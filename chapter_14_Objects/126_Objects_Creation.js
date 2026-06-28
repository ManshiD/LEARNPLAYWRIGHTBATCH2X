/*let c = { status: "pass"}
let d = { status: "pass"}
console.log(c); //{ status: 'pass' }
console.log(d); //{ status: 'pass' }

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}*/

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass"}
let d = { status: "pass"}
console.log(c); //{ status: 'pass' }
console.log(d); //{ status: 'pass' }

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}