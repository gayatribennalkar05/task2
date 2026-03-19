function same(a,b){
  return JSON.stringify(a)===JSON.stringify(b);
}
console.log(same([1,2],[1,2]));