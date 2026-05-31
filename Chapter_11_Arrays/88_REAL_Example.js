let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length); // Output: 5
console.log(browser); // Output: 'chrome'

browser.pop(); // This removes the last element 'edge' from the array
console.log(browser); // Output: ['chrome', 'firefox', 'safari', 'opera']

let removed = browser.shift(); // This removes the first element 'chrome' from the array and stores it in the variable 'removed'
console.log(browser); // Output: ['firefox', 'safari', 'opera']console.log(removed);
console.log(removed); // Output: 'chrome'

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]); // Output: 'firefox', 'safari', 'opera'
    if (browser[i] === 'opera') {
        console.log('Opera! is removed from Selenium'); // Output: 'Found Opera!' when the element 'opera' is found in the array
    }
}