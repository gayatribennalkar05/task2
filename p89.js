function firstVowelIndex(str) {
  return str.search(/[aeiou]/i);
}

console.log(firstVowelIndex("hello"));