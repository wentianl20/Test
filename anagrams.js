const anagrams = str => {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    }
    else{
        return str.split('').reduce((acc, letter, i) =>
            acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    }
};

function anagrams2(str) {
    //保存每一轮递归的排列结果
    let result = [];
    //初始条件：长度为1
    if (str.length === 1) {
        return [str]
    } else {
        //求剩余子串的全排列,对每个排列进行遍历
        let preResult = anagrams2(str.slice(1));
        for (let j = 0; j < preResult.length; j++) {
            for (let k = 0; k < preResult[j].length + 1; k++) {
                //将首字母插入k位置
                let temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
                result.push(temp);
            }
        }
        return result;
    }
}

console.log(anagrams('abc'));
console.log(anagrams2('abc'));