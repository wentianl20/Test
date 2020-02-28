/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 27/02/20.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

//This works
function sleep(wait) {
    const startTime = Date.now();
    while(Date.now() < startTime + wait) {

    }
}

//This does not work
function sleep2(wait) {
    return new Promise(resolve => setTimeout(() => {
        console.log(wait);
        resolve();
    }, wait))
}

//This works
/*(async function() {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
})();*/

console.log("=======", Date());
sleep2(3000);
console.log("=======", Date());