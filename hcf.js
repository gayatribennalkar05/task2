function hcf(a,b){
  while(b!==0){
    let t=b;
    b=a%b;
    a=t;
  }
  return a;
}
console.log(hcf(12,18));