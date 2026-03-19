function avg(arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}
console.log(avg([10,20,30]));