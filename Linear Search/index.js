const findNumberInArray = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return i;
    }
  }
  return -1;
};

// using recursion
const findNumberInArrayWithRecursion = (arr, n, index = 0) => {
  if (index >= arr.length) {
    return -1;
  }

  if (arr[index] == n) {
    return index;
  }
  return findNumberInArrayWithRecursion(arr, n, index + 1);
};

// For the program Big O will be 0(n)

console.log(findNumberInArray([2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log(findNumberInArrayWithRecursion([2, 3, 4, 5, 6, 7, 8, 9], 9));
