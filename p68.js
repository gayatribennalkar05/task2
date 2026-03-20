function mergeSort(a, b) {
  return [...a, ...b].sort((x,y)=>x-y);
}

console.log(mergeSort([3,1], [4,2]));