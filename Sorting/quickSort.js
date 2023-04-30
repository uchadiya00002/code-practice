function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivotElement = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) leftArray.push(arr[i]);
    else rightArray.push(arr[i]);
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
}
const arr = [4, 5, 2, 3, 5, 6, 3, 6, 7, 7, 4, 543, 3];
console.log(quickSort(arr));
// Worst case  O (n^2)
// Average case  O (n logn)
