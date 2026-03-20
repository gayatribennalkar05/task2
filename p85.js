function sumNth(arr, n) {
  let sum = 0;
  for (let i = n - 1; i < arr.length; i += n) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumNth([1,2,3,4,5,6], 2));