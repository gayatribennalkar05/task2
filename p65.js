function firstNVowels(str, n) {
  let vowels = str.match(/[aeiou]/gi) || [];
  return vowels.slice(0, n);
}

console.log(firstNVowels("education", 3));