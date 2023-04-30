// The fibonacii sequence in which each number is the sum of the two preceding ones

const fibSequence = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibSequence(2));
console.log(fibSequence(5));
console.log(fibSequence(7));

// Big 0 -- O(n)
