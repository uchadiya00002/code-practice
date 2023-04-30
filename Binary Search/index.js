// Binary Search only works for sorted array by finding middle value
const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log(middleIndex);
    if (target == arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

// Big O  O (log n) because we reduce value half each time
console.log(binarySearch([2, 4, 6, 8, 10], 4));
