/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 30/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

// sorted array
function binarySearch(target, arr) {
    if(arr.length === 0) return -1;

    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start)/2);

        if(target === arr[mid])
            return mid;
        else if(target > arr[mid])
            start = mid + 1;
        else
            end = mid - 1;
    }
    return  -1;
}

console.log(binarySearch(2, [1,2]));