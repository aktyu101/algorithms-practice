//중복값 체크
function commonElements(kArray) {
  let hashmap = {},
    last,
    answer = [];

  for (let i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    let currentArray = kArray[i];
    last = [];

    for (
      let j = 0, currentArrayLength = currentArray.length;
      j < currentArrayLength;
      j++
    ) {
      let currentElement = currentArray[j];

      if (!last[currentElement]) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }

      last[currentElement] = true;
    }
  }
  for (let [key, value] of Object.entries(hashmap)) {
    //[1,2], [2,3]
    if (value === kArray.length) {
      answer.push(key);
    }
  }
  return answer;
}
console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3],
    [2, 3],
  ])
);

//true, flase로 판단
