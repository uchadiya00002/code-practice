// Program to check fibonacci sequence using recursion

const fibonacciWithrecursion = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciWithrecursion(n - 1) + fibonacciWithrecursion(n - 2);
};

console.log(fibonacciWithrecursion(0));
console.log(fibonacciWithrecursion(1));
console.log(fibonacciWithrecursion(6));

// Big O -- O(2 ^ n)
