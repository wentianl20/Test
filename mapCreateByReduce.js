/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

Array.prototype.myMap = function () {
    let arr = this;
    const result = new Array(arr.length);
    const [fn, args] = [].slice.call(arguments);
    if(typeof fn !== "function")
        throw TypeError("Please pass in a function")

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn.call(args, arr[i], i, arr)
    }

    return result;
}

const a = new Array(1, 2, 3, 4)
console.log(a.myMap(item => item + 1));

Array.prototype.myMap2 = function () {
    if(this.length === 0) return [];

    let arr = this;
    const result = new Array(arr.length);
    const [fn, args] = [].slice.call(arguments);

    if(typeof fn !== "function")
        throw TypeError("Please pass in a function")

    return arr.reduce((accumulator, currentValue, index, array) => {
        accumulator[index] = fn.call(args, currentValue, index, arr);

        return accumulator;
    }, result)
}

console.log(a.myMap2(item => item + 1));
