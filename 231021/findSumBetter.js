const arr = [1, 2, 3, 4, 5];
const weight = 9;

function findSum(arr, weight) {
  const hashtable = {};

  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let currentNumber = arr[i];
    let differnce = weight - currentNumber;

    if (hashtable[currentNumber] != undefined) {
      return [arr[i], arr[hashtable[currentNumber]]];
    } else {
      hashtable[differnce] = i;
    }
    //key만 조회
  }
  return -1;
}
