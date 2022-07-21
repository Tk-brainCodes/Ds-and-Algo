function fibonacciIteration(n) {
  let arr = [0, 1];
  if (n < 2) return n; //base case
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIteration(10));

function fibonacciRecursive(n) {
  //base case
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
