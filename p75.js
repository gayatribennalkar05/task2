function toSnake(str) {
  return str.toLowerCase().split(" ").join("_");
}

console.log(toSnake("hello world")); 