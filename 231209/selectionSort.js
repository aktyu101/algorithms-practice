import { swap } from "./swap.mjs";
function selectionSort(items) {
  let len = items.length,
    minIndex;

  for (let i = 0; i < len; i++) {
    //최소 항목을 현재 위치로 이동
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[minIndex]) {
        minIndex = j;
      }

      if (i != minIndex) {
        swap(items, i, minIndex);
      }
    }
  }
  return items;
}

console.log("selectionSort", selectionSort([5, 3, 20, 1, 8, 2]));
