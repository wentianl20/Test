/*无重复字符的最长子串*/

const lengthOfLongestSubstring = function(s) {
    let res = 0; // 用于存放当前最长无重复子串的长度
    let str = ""; // 用于存放无重复子串
    const len = s.length;
    for(let i = 0; i < len; i++) {
        let current = s[i];
        let index = str.indexOf(current);
        if(index === -1) {
            str += current;
            res = res < str.length ? str.length : res;
        } else {
            str = str.substr(index + 1) + current;
        }
    }
    return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));