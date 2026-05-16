class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       s=s.replace(/[^a-zA-Z0-9]/g, "")
       s=s.toLowerCase()
        let right=s.length-1
        for(let left=0;left<s.length;left++){
            if(s[right]!=s[left]){
            return false
            }
            right--
        }
        return true
    }
}
