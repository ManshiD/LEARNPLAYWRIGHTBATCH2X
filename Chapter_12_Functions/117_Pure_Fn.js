//Pure Function
//A pure function always returns the same output for the same input and has no side effects (does not modify any external state).

function calculatePassRate(total1, passed) {
    return ((passed / total1) * 100).toFixed(2);
}
console.log(calculatePassRate(10, 7)); // Output: "85.00"
console.log(calculatePassRate(10, 7)); // Output: "85.00"

function isPassing(score) {
    return score >= threshold;
}

let threshold = 70;
console.log(isPassing(threshold)); // Output: true

threshold = 50;
console.log(isPassing(threshold)); // Output: true


