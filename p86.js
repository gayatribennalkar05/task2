function sumGreater(arr, val) {
  return arr.filter(x => x > val).reduce((a, b) => a + b, 0);
}

console.log(sumGreater([1,5,10,3], 4)); 