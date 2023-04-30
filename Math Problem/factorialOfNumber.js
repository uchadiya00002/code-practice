// The factorial of a non -negative integar n is the product of all positive integars less than or equal to n

const getFactorial = (n) => {
  let total = 1;
  for (let i = 2; i <= n; i++) {
    total = total * i;
  }
  return total;
};
console.log(getFactorial(2));
console.log(getFactorial(3));
console.log(getFactorial(5));

// Big 0 -- O(n)
