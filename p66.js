function vehicle(wheels) {
  return wheels === 2 ? "Two Wheeler" : wheels === 4 ? "Four Wheeler" : "Other";
}

console.log(vehicle(3));