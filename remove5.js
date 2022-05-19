function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let toArr = N.toString().split("");
    const length = toArr.length;
    let i = 0;
    let j = [];
    let ans = []
  
    console.log(toArr)
    while (i < length) {
      if (toArr[i] == 5) {
        console.log(toArr[i])
        toArr.splice(i, 1);
        j.push(toArr);
        i++;
      } else {
        i++;
      }
    }
    const max = Math.max(...j)
    return j;
  }

  console.log(solution(15985));