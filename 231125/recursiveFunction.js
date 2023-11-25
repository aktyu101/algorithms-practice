function countDownToZero(n) {
  if (n < 0) return; //기저조건
  console.log(n);
  countDownToZero(n - 1);
}

countDownToZero(10);

function getNthFibo(n) {
  if (n <= 1) return n;
  let sum = 0;
  let last = 1;
  let lastlast = 0;

  for (let i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
}

console.log("getNthFibo", getNthFibo(5));
//1,1,2,3,5,8,13,21...

function getNthFiboRecursive(n) {
  if (n <= 1) return n;
  return getNthFiboRecursive(n - 1) + getNthFiboRecursive(n - 2);
}

console.log("getNthFiboRecursive", getNthFiboRecursive(6));
