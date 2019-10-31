a = [2,3];

b = {i:3}

c = function () {
    aaa = 1;
}

function deepCopy(a) {
    let obj;

    if(Object.prototype.toString.call(a) === '[object Array]') {
        obj = []
        for (let i = 0; i < a.length; i++) {
            obj.push(deepCopy(a[i]));
        }
    } else if(Object.prototype.toString.call(a) === '[object Object]') {
        obj = {}
        for (let i in a) {
            obj[i] = deepCopy(a[i]);
        }
    } else {
        return a;
    }

    return obj;
}

console.log(deepCopy(c))
