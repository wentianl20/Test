function longestPalindrome(s) {
    if(typeof(s) !== "string")
        throw new Error("The argument must be String type!");

    if(s.length < 1) return '';
    if(s.length === 1) return s;

    let end = 0, start = 0;

    function expandCenter(s, left, right) {
        let L = left, R = right;
        while (L >=0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }

        //must minus 1 here to deduct
        return R - L  - 1;
    }

    for(let i=0; i<s.length; i++) {
        const len1 = expandCenter(s, i ,i);
        const len2 = expandCenter(s, i ,i+1);
        const len = Math.max(len1, len2);

        if(len > end - start) {
            start = i - Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
        }
    }

    return s.substring(start, end + 1);

}

console.log(longestPalindrome('abacdfgdcaba'));