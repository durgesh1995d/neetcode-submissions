class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
    let res =0
    for(let i of nums){
        res ^= i
    }
    return res
    }

}
