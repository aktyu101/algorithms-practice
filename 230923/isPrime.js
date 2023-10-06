//소수 판별
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log("2", isPrime(2));
// console.log("3", isPrime(3));
// console.log("4", isPrime(4));
// console.log("5", isPrime(5));

function isPrime2(n) {
  if (n <= 1) return false;
  //1이거나 1보다 작은 수 제외
  if (n <= 3) return true;
  //2, 3 은 무조건 true 반환
  if (n % 2 == 0 || n % 3 == 0) return false;
  //2또는 3으로 나눴을 때 나머지가 0이면 제외
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  //5, 7로 나누어 떨어지는 수 제외
  return true;
}
console.log("2", isPrime2(2));
console.log("3", isPrime2(3));
console.log("4", isPrime2(4));
console.log("5", isPrime2(5));
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
//O(sqrt(n))

/////////////////////
// let arr = [2, 3, 5, 7];
// for (let i = 5; i <= 99; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//     arr.push(i);
//   }
// }
// console.log("소수판별", arr);

let arr = [2, 3];
for (let i = 5; i <= 99; i++) {
  if (isPrime2(i) == true) {
    arr.push(i);
  }
}
console.log("소수판별", arr);
