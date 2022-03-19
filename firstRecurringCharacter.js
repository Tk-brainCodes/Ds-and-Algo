//O(n^2)
function firstRecurringCharacters1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
console.log(firstRecurringCharacters1([2, 5, 1, 2, 3, 5, 1, 2, 4]));

//O(n)
function firstRecurringCharacters2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
      if(map[input[i]] !== undefined){
          return input[i];
      }
      map[input[i]] = i
  }
  console.log(map)
  return undefined;
}
console.log(firstRecurringCharacters2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
