class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicate=false
        let unique=[]

        for(let i=0;i<nums.length;i++){
           // unique.includes(nums[i])?return true: unique.push(nums[i])
           if(unique.includes(nums[i])){
            isDuplicate=true
            break;
           }else{
            unique.push(nums[i])
           }
           
        }
        return isDuplicate
    }
}
