//Hi my name is thankGod
function reverse(str){
    //check input
    let reversedArray = [];
    let totalCharacters = str.length - 1;
    for(let i = totalCharacters; i >= 0; i--){
        reversedArray.push(str[i])
    }
    return reversedArray.join('');
}

console.log(reverse('Hi my name is thankGod'))

//str.split('').reverse().join('');
//[...str].reverse().join('');