function meanOfDigits(num) {
  let digits = num.toString().split("").map(Number);
  let sum = digits.reduce((a,b)=>a+b,0);
  return sum / digits.length;
}

console.log(meanOfDigits(1234));