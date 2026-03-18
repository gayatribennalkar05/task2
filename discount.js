function discount(price, percent) {
  return price - (price * percent / 100);
}

console.log(discount(1000, 20));