class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) return false;

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
                return false
            }
            map[char]-=1
        }
        return true
    }
}
