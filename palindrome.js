const isPalindrome = function(x) {
    const intToStr = x.toString();
    for (let i = 0; i < intToStr.length / 2; i++) {
        if(intToStr[i] !== intToStr[intToStr.length - 1 - i]){
            return false;
        }
    }
    return true;
};

const isPalindrome2 = (x) => {
    if(x<0) return false;

    let reversed = 0;
    let y = x;
    while(x>0) {
        reversed = x%10 + reversed*10;
        x = Math.floor(x/10);
    }
    return y === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome2(121));