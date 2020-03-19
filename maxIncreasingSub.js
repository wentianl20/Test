//最长上升子序列（LIS）
function maxIncreasingSub(str) {
    let dp = [];
    let result = 1;

    for(let i =0; i<str.length; i++) {
        dp[i] =1;
        for(let j=0; j<i; j++) {
            if((str[j] < str[i]) && (dp[i] < dp[j] + 1)) {
                dp[i]=dp[j]+1;
            }
        }

        if(dp[i] > result) {
            result = dp[i];
        }
    }
    return result;
}

/**
 * nlogn 解法 贪心+二分
 *对于每一个a[i]，先判断是否可以直接插入到dp数组尾部，即比较其与dp数组的最大值即最后一位；如果不可以，则找出dp中第一个大于等于a[i]的位置，用a[i]替换之。
 * */
console.log(maxIncreasingSub("17634"));