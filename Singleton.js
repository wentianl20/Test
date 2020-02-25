/**
 * Es5 version
 */

const Singleton = function(name){
    this.name = name;
};
Singleton.prototype.getName = function(){
    return this.name;
}
// 获取实例对象
const getInstance = (function() {
    let instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();
// 测试单例模式的实例
const a = getInstance("aa");
const b = getInstance("bb");
console.log(b.getName()); // "aa"
console.log(a === b);     // true

/**
ES6 version
 */

class SingletonApple {
    constructor(name, creator, products) {
        this.name = name;
        this.creator = creator;
        this.products = products;
    }
    //静态方法
    static getInstance(name, creator, products) {
        if(!this.instance) {
            this.instance = new SingletonApple(name, creator, products);
        }
        return this.instance;
    }
}

let appleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple = SingletonApple.getInstance('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod'])

console.log(appleCompany === copyApple); //true