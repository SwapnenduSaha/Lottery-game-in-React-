function genArr(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sumArr(arr) {
  let ans = arr.reduce((sum, curr) => sum + curr);
  return ans;
}

export { genArr, sumArr };
