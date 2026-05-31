let scores = [45, 82, 91, 60, 73];
 
//map - transform every element returns a new array
let grades = scores.map(s => s > 70 ? 'Pass' : 'Fail'); // This creates a new array 'grades' where each element is determined by whether the corresponding score in the 'scores' array is greater than 70. If the score is greater than 70, it returns 'pass'; otherwise, it returns 'fail'. 
console.log(grades); // Output: ['Fail', 'Pass', 'Pass', 'Fail', 'Pass']

// filter - keeps elements that pass a test
let passing = scores.filter(s => s > 70); // This creates a new array 'passing' that contains only the elements from the 'scores' array that are greater than 70.
console.log(passing); // Output: [82, 91, 73]

