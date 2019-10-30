/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 30/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

/**
 *
 * 数组中有一个数字出现的次数超过了数组长度的一半，找出这个数字。
 *
 * @param target
 * @param arr
 * @returns {*}
 */
function findTarget(target, arr) {
    let candidate = arr[0];

    let nTimes = 1;

    for(let i =1; i<arr.length; i++) {
        if(nTimes === 0) {
            candidate = a[i];
            nTimes = 1;
        } else {
            if(candidate === arr[i])
                nTimes ++;
            else
                nTimes --;
        }
    }

    return candidate;
}

console.log(findTarget(1, [1,1,1,1,22,2,2,1,1,1,2,1,3,4,5,6]))