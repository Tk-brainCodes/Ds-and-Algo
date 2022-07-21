function findFactorialRecursive(number) {
  if (number === 2) return 2;
  if (number === 0) return 1;
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) return (answer = 2);
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5));
