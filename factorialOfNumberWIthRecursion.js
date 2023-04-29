// checking factorial using recursion
const factorialOfNumberWIthRecursion = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorialOfNumberWIthRecursion(n - 1);
};

console.log(factorialOfNumberWIthRecursion(5));

//Big O   0(n)
