function maxSubArray(arr) {
    let current = 0, sum = 0;

    for(let i=0; i<arr.length; i++) {
        if(current>0) {
            current += arr[i];
        } else {
            current = arr[i];
        }

        if(current>sum) {
            sum = current;
        }
    }

    return sum;
}

console.log(maxSubArray([1, 2, -1, 3, -8, -4]))