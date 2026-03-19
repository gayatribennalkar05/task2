function longestZeros(str) {
  return Math.max(...str.split("1").map(x => x.length));
}

console.log(longestZeros("1001001000"));