function dashNumber(num) {
  return num.toString().split("").join("-");
}

console.log(dashNumber(45678));