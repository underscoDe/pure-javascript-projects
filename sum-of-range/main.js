const range = (start, end, step = (start < end) ? 1 : -1) => {
  const arr = []
  if(start < end && step >= start) {
    for(let i = start; i <= end; i += step) arr.push(i)
  }else if(start > end && step <= end) {
    for(let i = start; i >= end; i += step) arr.push(i)
  }
  return arr
}

const sum = (arr) => {
	let sum = 0
  for(let val of arr) sum += val
  return arr.length && sum
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
