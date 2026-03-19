function sumDigits(num) {
  return num.toString().split("").reduce((a,b)=>a+Number(b),0);
}

console.log(sumDigits(1234));
