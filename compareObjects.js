obj1={
    a:1,
    b:2
}
obj2={
    a:1,
    b:2
}
obj3= function () {
    this.a = 1
}

obj4= function () {
    this.a = 1
}

function test() {
    console.log()
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
console.log(JSON.stringify(obj4) === JSON.stringify(obj3))

function compare(obj1, obj2) {
    if(obj1 === obj2) return true;
    if(typeof obj1 !== typeof obj2) return false;

    if(((typeof obj1 === "object" && obj1 !=null) && (typeof obj2 === "object" && obj2 != null ) ) || ((typeof obj1 === "function") && (typeof obj2 === "function"))){
        if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
        for(let o in obj1) {
            if(obj2.hasOwnProperty(o)) {
                if(!compare(obj1[o], obj2[o]))
                    return false;
            } else
                return false;
        }
        return true;
    } else {
        return false;
    }
}

console.log(compare(obj3, obj4));