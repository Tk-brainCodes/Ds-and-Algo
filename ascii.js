function solution(n) {
  const character = String.fromCharCode(105);
  let ascii = [];

  for (let i = character.length - 1; i < n; i++) {
    ascii.push(" ".repeat(1) + ` L`.repeat(1 + i));
  }
  return ascii.toString();
}
console.log(solution(4));
