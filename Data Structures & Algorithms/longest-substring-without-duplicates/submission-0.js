class Solution {

    lengthOfLongestSubstring(s) {

        let i = 0;
        let j = 0;
        let longest = 0;

        let tempArr = [];

        while (j < s.length) {

            if (!tempArr.includes(s[j])) {

                tempArr.push(s[j]);

                longest = Math.max(longest, tempArr.length);

                j++;

            } else {

                tempArr.shift(); // remove leftmost
                i++;
            }
        }

        return longest;
    }
}