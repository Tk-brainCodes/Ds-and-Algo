/**
 * @param {string} pattern
 * @param {string}
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  if (pattern === "" || s === "") return false;
  const arrStr = s.split(" ");
  if (arrStr.length !== pattern.length) return false;
  let patternHash = {};
  let wordHash = {};
  for (let i = 0; i < arrStr.length; i++) {
    if (!patternHash.hasOwnProperty(pattern[i]) && !wordHash[arrStr[i]]) {
      patternHash[pattern[i]] = arrStr[i];
      wordHash[arrStr[i]] = true;
    } else {
      if (patternHash[pattern[i]] !== arrStr[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
