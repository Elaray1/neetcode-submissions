class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const positions: Map<number, number[]> = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            
            const oldValue = positions.get(num);
            positions.set(num, oldValue ? [...oldValue, i] : [i]);

            const secondNum = target - num;
            const secondNumIndex = positions.get(secondNum)?.find((v) => v !== i);

            if (secondNumIndex >= 0 && i !== secondNumIndex) {
                return [i, secondNumIndex]
            }
        }
    }
}
