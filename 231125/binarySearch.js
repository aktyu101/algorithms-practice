function binarySearch(array, n) {
  let lowIndex = 0;
  highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor[(highIndex + lowIndex) / 2];
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      return (lowIndex = midIndex + 1);
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}
//172
