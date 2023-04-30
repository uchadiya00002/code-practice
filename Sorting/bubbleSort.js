const bubbleSort = (arr) => {
  let isSwap;
  do {
    isSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        console.log(i + 1);
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);
};

const arr = [9, 7, 6, 5, 42, 65, 34];
bubbleSort(arr);
console.log(arr);
// Big O == O (n^2) because we have two nested loops
