// function mergeSorted1(arr1,arr2){
//    const concatArrays = arr1.concat(arr2);
//    const merged = [];
//    for(let i = 0; i < concatArrays.length-1; i++){
//        if(concatArrays[i] > concatArrays[i+1]){
//            concatArrays[i] = concatArrays[i-1]
//        } else if(concatArrays[i] < concatArrays[i-1]){
//            concatArrays[i] = concatArrays[i+1]
//        }
//       merged.push(concatArrays)
//       return merged;
//    }
// }
// console.log(mergeSorted1([0,3,4,4,31],[4,6,30]));

function mergeSorted2(arr1, arr2){
    const merged = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 0;
    let j = 0;

    //input check
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){
            merged.push(arr1Item);
            arr1Item = arr1[i]
            i++;
        } else {
            merged.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return merged;
}
console.log(mergeSorted2([0,3,4,4,31],[4,6,30]));
