const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

// Big O - 0(log n)

console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(7)); // Output: false
console.log(isPowerOfTwo(128)); // Output: true
console.log(isPowerOfTwo(0)); // Output: false
console.log(isPowerOfTwo(-8)); // Output: false
