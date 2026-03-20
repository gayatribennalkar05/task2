function startsWithVowel(word) {
  return /^[aeiou]/i.test(word);
}

console.log(startsWithVowel("Apple")); 