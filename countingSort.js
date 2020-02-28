
function countSort(arr){
    let max = arr[0];
    let min = arr[0];
    const n = arr.length;
    for(let i = 0; i < n; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }

    let buckets = new Array(max-min+1).fill(0);
    for(let i = 0; i < n; i++){
        buckets[ arr[i]-min ]++     //减去最小值，确保索引大于负数
    }
    let index = 0, bucketCount = max-min+1;
    for(let i = 0; i < bucketCount; i++){
        let m = buckets[i];
        while(m>0){
            //将桶的编号加上最小值，变回原来的元素
            arr[index++] = i+min;
            // index++;
            m--
        }
    }
    return arr
}

console.log(countSort([-2,-1,5,4,6,3]));