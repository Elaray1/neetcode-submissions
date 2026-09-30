class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Record<string, string[]> = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");

            hashMap[key] = hashMap[key]
                ? [...hashMap[key], str]
                : [str];
        }

        return Object.values(hashMap);
    }
}