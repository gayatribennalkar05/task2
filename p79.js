function totalResistance(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(totalResistance([10, 20, 30]));