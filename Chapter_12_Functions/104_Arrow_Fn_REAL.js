// if (ourStatusCode >= 200 && ourStatusCode < 300) { 
// This is perfectly normal function
function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine!");
    } 
}

// This is function as an expression
const validateStatusCode_Exp = function (status) {
if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine!");
    } 
}

// Arrow function
const validateStatusCode_Arrow = (status) =>  {
if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine!");
    } 
}
