function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12349876));