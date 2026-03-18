function maskify(str) {
  str = str.toString(); // convert to string
  return str.slice(-4).padStart(str.length, "#");
}
console.log(maskify("1234567812345678"));
console.log(maskify(12345678));