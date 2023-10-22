const arr = [1, 2, 3, 4, 5];
const weight = 9;

function findSum(arr, weight) {
  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] === weight) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

console.log(findSum(arr, weight));
