/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

function Subject() {
    this.listeners = {};

    this.addListener = function addListener(key, callback) {
        if(typeof callback !== "function")
            throw Error("Listener callback must be a function");

        if(!this.listeners[key]) {
            this.listeners[key] = [];
        }

        this.listeners[key].push(callback);
    }

    this.removeListener = function removeListener(key, callback) {
        if(typeof callback !== "function")
            throw Error("Listener callback must be a function");

        if(Array.isArray(this.listeners[key]) && this.listeners[key].length > 0) {
            for(let i = 0; i< this.listeners[key].length ; i++) {
                if(callback === this.listeners[key][i]) {
                    this.listeners[key].splice(i, 1);
                }
            }
        }

    }

    this.triggerEvent = function triggerEvent(key) {
        if(this.listeners[key]) {
            for(let i =0; i < this.listeners[key].length; i++) {
                this.listeners[key][i]();
            }
        }
    }
}

const event = new Subject();

function hello() {
    console.log("Hello, there");
}
event.addListener("hello", hello);
event.triggerEvent("hello");
event.removeListener("hello", hello);
event.triggerEvent("hello");
