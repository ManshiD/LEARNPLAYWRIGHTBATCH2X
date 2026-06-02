function makeCOunter(start=0) {
    let count = start;
    return {
        increment() {count++;},
        decrement() {count--;},
        get() { return count; }
    }
}

let counter= makeCOunter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get()); // Output: 3
counter.decrement();
console.log(counter.get()); // Output: 2

