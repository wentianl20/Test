function leftRotateString(str, n) {
    function reverseString(s) {
        return s.split('').reverse().join('');
    }

    if(typeof str !== "string"){
        throw new Error ("The first argument must be String");
    }

    const len = str.length;

    if(str.length < n) {
        n = n % len;
    }
    const left = str.slice(0, n);
    const right = str.slice(n, len);

    return reverseString(reverseString(left).concat(reverseString(right)));

}

console.log(leftRotateString('abcdefg',8));