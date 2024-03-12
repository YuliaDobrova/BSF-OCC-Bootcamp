// Ron Cabatuando
// Regel Cabrales

//shopping

const shirt = 17;
const shoes = 65;
const pants = 49;
const sunglasses = 13;

const total = shirt * 2 + shoes + pants + sunglasses * 3;
console.log(total);
const discount = (total * 10) / 100;
console.log(discount);

const cart = total - discount;
console.log(`Total: $${cart}`);
