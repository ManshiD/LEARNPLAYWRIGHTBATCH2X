let g_x = 10; // global scope

// Nested scope | blocked scope
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

        inner();
        console.log(y);
    }
}