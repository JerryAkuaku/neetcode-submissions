class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let isAnagram=true
         if (s.length !== t.length){
            isAnagram=false
            return isAnagram ;
         } 

        let map={}
        for (let i=0;i<=s.length;i++){
            let char =s[i]
            if(map[char]==undefined){
              map[char]=0
            }
           map[char]+=1;
        }
        for(let i=0;i<=t.length; i++){
            let char=t[i]
            if(map[char]==0 || map[char]==undefined){
                isAnagram=false
                return isAnagram
            }
            map[char]-=1
        }
        return isAnagram
    }
}
