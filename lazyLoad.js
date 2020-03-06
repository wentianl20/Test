/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 5/02/20.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

function LazyMan(name) {
    return new _LazyMan(name);
}

class _LazyMan {
    constructor(name) {
        this.tasks = [];

        const task = () => {
            console.log(`Hi, This is ${name} !`);
            this.next();
        };

        this.tasks.push(task);
        setTimeout(()=> {
            this.next();
        }, 0)
    }

    next() {
        const task = this.tasks.shift();
        task && task();
    }

    eat(name) {
        const task = () => {
            console.log(`Eat ${name} ~~~`);
            this.next();
        };

        this.tasks.push(task);
        return this;
    }

    sleep(time) {
        this._sleepWrapper(time, false);
        return this;
    }

    sleepFirst(time) {
        this._sleepWrapper(time, true);
        return this;
    }

    _sleepWrapper(time, first) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`);
                this.next();
            }, time * 1000)
        };

        if(first) {
            this.tasks.unshift(task)
        } else {
            this.tasks.push(task)
        }
    }
}

/*If no sleep first, use this directly*/
class Coder{
    sleep(){
        console.log("sleep");
        return this;//链式调用的关键
    }
    print1(){
        console.log(1);
        return this;//链式调用的关键
    }
    print2(){
        console.log(2);
        return this;//链式调用的关键
    }
}

const coder = new Coder();

LazyMan("Hank").sleepFirst(2).eat("dinner");
LazyMan("Hank").sleep(2).eat("dinner");
coder.sleep().print1();