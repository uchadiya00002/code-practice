function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToSort = arr[i];
    let j = i - 1;
    // Compare numberToSort with the elements before it and shift them to the right
    // until finding the correct position to insert numberToSort.
    while (j >= 0 && arr[j] > numberToSort) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // Insert numberToSort in its correct position in the sorted portion of the array.
    arr[j + 1] = numberToSort;
  }
}
const arr = [3, 46, 22, 678, 4, 7, 42, 7];
insertionSort(arr);
console.log(arr);
