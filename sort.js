function ginortS(str) {
  let lower = [], upper = [], odd = [], even = [];

  for (let ch of str) {
    if (/[a-z]/.test(ch)) lower.push(ch);
    else if (/[A-Z]/.test(ch)) upper.push(ch);
    else if (parseInt(ch) % 2 === 1) odd.push(ch);
    else even.push(ch);
  }

  return lower.sort().join("") +
         upper.sort().join("") +
         odd.sort().join("") +
         even.sort().join("");
}

console.log(ginortS("Sorting8765"));