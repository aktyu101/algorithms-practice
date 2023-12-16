const array = [12, 3, 4, 1, 40];
const str = ["a", "F", "f", "b", "e", "A"];
console.log("sort", str.sort());
//대문자 > 소문자
console.log(
  "numberSort",
  array.sort((a, b) => a - b)
);

const obj = [{ age: 10 }, { age: 40 }, { age: 5 }, { age: 15 }];
console.log(obj.sort((a, b) => a.age - b.age)); //오름차순
console.log(obj.sort((a, b) => b.age - a.age)); //내림차순
