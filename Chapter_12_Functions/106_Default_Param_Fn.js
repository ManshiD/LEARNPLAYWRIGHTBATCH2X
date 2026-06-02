function retry(testName, maxRetries=3, delay=1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}
        
//retry("Login Test", 3, 1000); // Output: Retrying Login Test up to 3 times, 1000ms apart
retry("Login Test"); // Output: Retrying Login Test up to 3 times, 1000ms apart
retry("Registeration Test", 5, 2000);
