// Checking if number is prime or not?

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Big O --O(n)

// Using Math.sqrt method

const checkPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Big O -- O(sqrt(n))

console.log(checkPrime(2));
console.log(checkPrime(4));
console.log(checkPrime(7));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(4));
console.log(checkPrimeNumber(7));
