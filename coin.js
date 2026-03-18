function coinChange(amount) {
  let coins = [10, 5, 2, 1];
  let count = 0;

  for (let coin of coins) {
    count += Math.floor(amount / coin);
    amount %= coin;
  }

  return count;
}

console.log(coinChange(28)); 