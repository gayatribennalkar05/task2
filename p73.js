function shortest(str) {
  return Math.min(...str.split(" ").map(w => w.length));
}

console.log(shortest("hello world hi"));