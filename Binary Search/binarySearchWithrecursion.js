const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, ldx, rdx) {
  if (ldx > rdx) return -1;
  let mdx = Math.floor((ldx + rdx) / 2);
  if (target == arr[mdx]) return mdx;
  if (target < arr[mdx]) return search(arr, target, ldx, mdx - 1);
  else return search(arr, target, mdx + 1, rdx);
}

//Big O == O (log n ) because value is decreasing in half
console.log(recursiveBinarySearch([2, 4, 6, 8, 10], 4));
