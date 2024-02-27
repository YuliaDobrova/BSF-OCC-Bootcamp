const checkEvenOrOdd = function (num) {
  if (num % 2 === 0) {
    console.log(`The number ${num} is even`);
  } else {
    console.log(`The number ${num} is odd`);
  }
  return;
};

let num1 = 8;
let num2 = 17;

checkEvenOrOdd(num1);
checkEvenOrOdd(num2);
