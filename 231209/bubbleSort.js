import { swap } from "./swap.mjs";
function bubbleSort(array) {
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log("bubbleSort", bubbleSort([6, 1, 2, 3, 4, 5]));
bubbleSort([6, 1, 2, 3, 4, 5]);
//원본을 바꿈
