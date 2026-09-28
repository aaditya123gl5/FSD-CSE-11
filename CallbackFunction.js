function logResult(result) {
    console.log(`The final answer is: ${result}`);
}
function calculateSum(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum); 
}

calculateSum(5, 9, logResult);
