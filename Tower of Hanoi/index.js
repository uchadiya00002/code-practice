function towerOfHanoi(n, fromRod, torod, usingRod) {
  if (n == 1) {
    console.log(`A disc 1 ${fromRod} to ${torod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, torod);
  console.log(`A disc ${n} ${fromRod} to ${torod}`);
  towerOfHanoi(n - 1, usingRod, torod, fromRod);
  return;
}
towerOfHanoi(3, "A", "C", "B");
// Big O =  0(2^n)
