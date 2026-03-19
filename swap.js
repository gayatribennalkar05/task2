function largestDigitSwap(num) {
  let digits = num.toString().split("");
  let maxIndex = digits.indexOf(Math.max(...digits.map(Number)).toString());

  [digits[0], digits[maxIndex]] = [digits[maxIndex], digits[0]];
  return Number(digits.join(""));
}

console.log(largestDigitSwap(2736));