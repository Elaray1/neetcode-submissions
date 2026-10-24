class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number, number>();

        for (const n of nums) {
            freq.set(n, (freq.get(n) ?? 0) + 1);
        }

        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [n, count] of freq) {
            buckets[count].push(n);
        }

        const result: number[] = [];

        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) return result;
            }
        }

        return result;
    }
}
