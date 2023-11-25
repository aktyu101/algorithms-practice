const arr = [1, 2, 3, 4, 4, 5, 6, 6];
const result = [];
const hash = {};

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  if (hash[current]) continue;
  result.push(arr[i]);
  hash[current] = true;
}

console.log(result);

const set = new Set([1, 2, 2, 3, 3]);
//객체를 배열로 변환
//중복값 제외 후 반환
set.add(5);
set.add(5);
set.add(8);
console.log("set", [...set]);
console.log("set has 6", set.has(6));

set.delete(2);
console.log("set", [...set]);

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 6]);

function intersect(a, b) {
  const intersection = new Set();

  for (let el of b) {
    if (a.has(el)) {
      intersection.add(el);
    }
  }
  return intersection; //교집합
}
console.log("intersect", [...intersect(setA, setB)]);

function inSuperset(mainset, subset) {
  for (let el of subset) {
    if (!mainset.has(el)) {
      return false;
    }
  }
  return true;
}
console.log(
  "issuperset",
  inSuperset(new Set([1, 2, 3, 4, 5]), new Set([2, 3, 7]))
);

function unionSet(setA, setB) {
  const setResult = new Set(setA);
  for (let el of setB) {
    setResult.add(el);
  }
  return setResult;
}
console.log(unionSet(new Set([1, 2, "문자"]), new Set([3, 4, 6])));
//합집합

function differenceSet(setA, setB) {
  const setResult2 = new Set(setA);
  for (let el of setB) {
    setResult2.delete(el);
  }
  return setResult2;
}
console.log(
  "difference",
  differenceSet(new Set([1, 2, 3]), new Set([2, 3, 4]))
);
//차집합
