class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let left = 0;
    let right = 0;
    let profit = 0;
    let diff = 0;
    
    while (right < prices.length) {
        if (prices[left] >= prices[right]) {
            left=right
        }
        else{
            diff = prices[right] - prices[left];
            profit < diff ? profit = diff : null           
        }
        right++
    }
    return profit;  
    }
}
