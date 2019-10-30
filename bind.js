/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 30/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

Function.prototype.mybind = function (obj) {
    if(typeof this !== "function") {
        throw new Error("Please bind a function bro!")
    }
    let fn = this;
    return function () {
        return fn.apply(obj);
    }
}

function test() {
    console.log(this.i);
}

const a = { i: 36}

const newTest = test.mybind(a);

newTest()