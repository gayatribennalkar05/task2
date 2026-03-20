function tribonacci(n) {
  let arr = [0,1,1];
  for(let i=3;i<n;i++){
    arr[i] = arr[i-1]+arr[i-2]+arr[i-3];
  }
  return arr.slice(0,n);
}

console.log(tribonacci(6));