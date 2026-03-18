function isDisarium(n) {
  let digits = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), i + 1);
  }

  return sum === n;
}

console.log(isDisarium(135)); 