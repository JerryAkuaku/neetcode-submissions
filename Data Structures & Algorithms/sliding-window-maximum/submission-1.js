class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let i=0;
        let tempArr=[]
        let maxArr=[]
        for(let j=0;j<nums.length;j++){
            tempArr.push(nums[j])

            if(tempArr.length==k){               
                let max=Math.max(...tempArr)
                maxArr.push(max)
                tempArr.splice(i,1)
                i
            }
        }
        return maxArr
    }
}
