class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        l,r = 0,k
        length = len(nums)
        final = []
        for i in range(k-1, length):
            win = nums[l:r]
            if r < len(nums):
                l += 1
                r += 1
            final.append(max(win))
        return final
