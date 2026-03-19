function firstLastIndex(arr, val) {
  return [arr.indexOf(val), arr.lastIndexOf(val)];
}

console.log(firstLastIndex([1,2,3,2,4], 2));