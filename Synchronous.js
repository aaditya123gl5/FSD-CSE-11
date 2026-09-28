function calculateTotal(price, taxRate) {
    const taxAmount = price * taxRate;
    const total = price + taxAmount;
    return total;
}


console.log("Starting calculation...");

const finalPrice = calculateTotal(100, 0.08); 
console.log(`The final price is: $${finalPrice}`);

console.log("Calculation finished!");
