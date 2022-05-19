//return recurring characters using hash tables
const count = Array.from("aabbcceee").reduce((acc, char) => {
  if (char in acc) {
    //go through all the char that exits
    acc[char]++;
  } else {
    //if char not in acc object, then it occurs only ones
    acc[char] = 1;
  }
  console.log(acc);
  return acc;
}, {});
