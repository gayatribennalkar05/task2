function interval(n){
  if(n<=10) return "0-10";
  else if(n<=20) return "11-20";
  else return "20+";
}
console.log(interval(15));