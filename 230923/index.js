function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
//f(n)=5n
console.log("a", a(10));

function b(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
console.log("b", b(100));
//O(6n) === O(n)

function c(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let j = 0; j < 5 * n; j++) {
      count += 1;
    }
  }
  return count;
}
console.log("c", c(10));
//
function d(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
console.log("d", d(10));
//

//문제1
function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (var j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}
someFunction(2);
//O(n*n)

//문제2
function someFunction2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}
//O(n*n*n)

//문제3
function someFunction3(n) {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}
//O(1)

//문제4
function someFunction4(n) {
  for (let i = 1; i < n; i * 2) {
    console.log(n);
  }
}
//O(log2n)
