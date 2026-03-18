function moveZeros(arr) {
  let nonZeros = arr.filter(num => num !== 0);
  let zeros = arr.filter(num => num === 0);
  return [...nonZeros, ...zeros];
}

console.log(moveZeros([1, 0, 2, 0, 3])); 