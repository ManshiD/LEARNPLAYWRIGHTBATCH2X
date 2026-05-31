let value = "5";
console.log(typeof value); // Output: string

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}

let status = 0;
console.log(typeof status); // Output: number

switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("Number 0 matched");
        break;
}