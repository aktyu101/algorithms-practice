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
console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("5", isPrime(5));

function isPrime2(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  } //5의 제곱
  return true;
}
