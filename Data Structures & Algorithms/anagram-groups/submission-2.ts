class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Record<string, string[]> = {};

        for (const str of strs) {
            const count = new Array(26).fill(0);

            for (const char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.join(",");

            hashMap[key] = hashMap[key]
                ? [...hashMap[key], str]
                : [str];
        }

        return Object.values(hashMap);
    }
}