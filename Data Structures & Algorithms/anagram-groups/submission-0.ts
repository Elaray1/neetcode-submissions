class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Record<string, string[]> = {};

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const stringMap: Map<string, number> = new Map();

            for (const char of str) {
                stringMap.set(
                    char,
                    (stringMap.get(char) || 0) + 1
                );
            }

            const key = JSON.stringify(
                [...stringMap.entries()].sort()
            );

            hashMap[key] = hashMap[key]
                ? [...hashMap[key], str]
                : [str];
        }

        return Object.values(hashMap);
    }
}