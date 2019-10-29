/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

function myArrow(fn) {
    let that = this;

    return function () {
        return fn.call(that, ...arguments);
    }
}

function myArrowLazyCal(fn) {
    let that = this;
    let result = [];
    return function lazy() {
        let _args = [].slice.call(arguments);
        if(arguments.length === 0)
            return fn.call(that, ...result);
        result.push(..._args);
        return lazy;
    }
}

const add = function () {
    let args = [].slice.call(arguments) ;
    return [].reduce.call(args, (a, b) => a + b);
}

const sum = myArrow(add);

console.log(sum(1,2,3,4));

const lazySum = myArrowLazyCal(add);
lazySum(1,2,3);
lazySum(4,5)(6);
console.log(lazySum());