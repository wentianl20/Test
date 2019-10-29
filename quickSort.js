/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

function quickSort(arr) {
    if(arr.length <=1) return arr;

    const middle = Math.floor(arr.length/2);
    const pivot = arr.splice(middle,1)[0];

    let less = [];
    let greater = [];

    for (let i = 0; i<arr.length; i++) {
        if(arr[i] < pivot)
            less.push(arr[i]);
        else
            greater.push(arr[i]);
    }

    return quickSort(less).concat(pivot, quickSort(greater));

}

const arr = [6,4,5,2,7];

console.log(quickSort(arr));