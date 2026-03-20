function countTallest(arr) {
  let max = Math.max(...arr);
  return arr.filter(x => x === max).length;
}

console.log(countTallest([3,2,1,3]));