function isPronic(n) {
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (i * (i + 1) === n) {
      return true;
    }
  }
  return false;
}

// Test
console.log(isPronic(6));