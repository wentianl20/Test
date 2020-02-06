// factory mode
function createPerson(name) {
    let o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };

    return o;
}

let person = createPerson('kevin');
person.getName()

//Constructor mode
function Person1(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    };
}

var person1 = new Person1('kevin');

// Singleton mode
function CreateSingleton (name) {
    this.name = name;
    this.getName();
};

CreateSingleton.prototype.getName = function() {
    console.log(this.name)
};

var Singleton = (function(){
    var instance;
    return function (name) {
        if(!instance) {
            instance = new CreateSingleton(name);
        }
        return instance;
    }
})();

var a = new Singleton('a');
var b = new Singleton('b');