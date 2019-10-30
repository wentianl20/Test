/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 30/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

Array.prototype.myReduce = function () {
    if(arguments.length === 0)
        throw new TypeError("Please pass in a callback function")

    if(typeof arguments[0] !== "function")
        throw new TypeError("Please pass in a callback function")

    if(this.length === 0)
        throw new TypeError('Reduce of empty array with no initial value')

    let arr = this;
    const fn = arguments[0];
    const start = arguments.length > 1 ? 0 : 1;
    let value = start === 0 ? arguments[1] : arr[0];

    for (let i = start; i < arr.length; i++) {
        value = fn(value, arr[i], i, arr)
    }

    return value;
}


console.log([1,2,3,4].myReduce((a,b) => a + b, 10))