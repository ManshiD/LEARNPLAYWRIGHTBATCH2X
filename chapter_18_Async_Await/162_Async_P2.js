function getToken(){
    return Promise.resolve("abc123"); 
}

// Playwright
// page.goto() - Promise()
//await page.goto();

async function run(){
    let token =await getToken();
    console.log(token);
}

run ();

/*
pLEASE REMEMBER that any function which returns the promise, we have to use await 
in front of it. Any function which you can think basically can work
with any kind of promise, we will use aync in front of it. 
*/
/*
whenever there is a promise which is getting returned it will alwasya return
whenever we have page.goto() - it will always return Promise 
*/

//we will always use await whenever a function getToken returns Promise
// we will use await uthil Promise returns or rejects.
// We are moving towards async mode
//