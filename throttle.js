function throttle(fn, wait) {
    let lastTime = null;

    return function () {
        let newTime = + new Date();

        if(newTime - lastTime > wait) {
            fn();
            lastTime = newTime;
        }
    }
}

let fn = ()=>{
    console.log('boom')
};

setInterval(throttle(fn,1000),10);
