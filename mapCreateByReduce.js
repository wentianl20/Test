/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

// Array.prototype.mymap = function () {
//     const ary = this
//     const result = new Array(ary.length);
//     const [ fn, thisArg ] = [].slice.call(arguments)
//     if (typeof fn !== 'function') {
//         throw new TypeError(fn + 'is not a function')
//     }
//     for (let i = 0; i < ary.length; i++) {
//         // fix稀疏数组的情况
//         if (i in ary) {
//             result[i] = fn.call(thisArg, ary[i], i, ary);
//         }
//     }
//     return result
// }
//
// const a = new Array(1,2,3,4);
// a.mymap(i => console.log(i), {a: 222});
//
// [1, 2, 3].map( function (item) {
//     console.log(this.msg);
//     return item;
// }, { msg: 'mapping' })

const reduceMap = (fn, thisArg /*真想去掉thisArg这个参数*/ ) => {
    return (list) => {
        // 不怎么愿意写下面这两个判断条件
        if (typeof fn !== 'function') {
            throw new TypeError(fn + 'is not a function');
        }
        if (!Array.isArray(list)) {
            throw new TypeError('list must be a Array');
        }
        if (list.length === 0) return [];
        const result = new Array(list.length);
        return list.reduce((acc, value, index) => {
            // fix稀疏数组的情况
            if (index in list) {
                acc[index] = fn.call(thisArg, value, index, list);
            }
            return acc;
        }, result);
    }
}