function climbStairCase(n) {
  let noOfSteps = [1, 2];
  for (let i = 2; i < n; i++)
    noOfSteps[i] = noOfSteps[i - 1] + noOfSteps[i - 2];
  return noOfSteps[n - 1];
}

console.log(climbStairCase(0));
console.log(climbStairCase(1));
console.log(climbStairCase(2));
console.log(climbStairCase(3));
console.log(climbStairCase(4));
console.log(climbStairCase(5));
