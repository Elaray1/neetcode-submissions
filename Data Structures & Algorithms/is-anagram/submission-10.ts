class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const charMap: Map<string, number> = new Map();

        for (let char1 of s) {
            charMap.set(char1, (charMap.get(char1) || 0) + 1);
        }

        for (let char2 of t) {
            const chatCount = charMap.get(char2);

            if (!chatCount) return false;

            charMap.set(char2, chatCount - 1);
        }

        return true;
    }
}
