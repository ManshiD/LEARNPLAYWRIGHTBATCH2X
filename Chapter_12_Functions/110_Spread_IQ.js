function add(a, b, c){
    return a + b + c;
}
let num = [1, 2, 3];
add(...num); // Output: 6

let responsecodes = [200, 201, 404];

function hashError(...codes) {
    return codes.some(c => c >= 400);
}
hashError(...responsecodes); // Output: true   