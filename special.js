function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
console.log(removeSpecialChars("Hello@123! World#")); 