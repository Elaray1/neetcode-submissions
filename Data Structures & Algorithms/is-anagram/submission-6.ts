class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const numbersMap: Map<string, number> = new Map();

        for (let item of s) {
            numbersMap.set(item, (numbersMap.get(item) || 0) + 1)
        }

        for (let item of t) {
            const symbolCount = numbersMap.get(item);

            if (!symbolCount) return false;

            const newSymbolCount = symbolCount - 1;

            newSymbolCount === 0
                ? numbersMap.delete(item)
                : numbersMap.set(item, symbolCount - 1)
        }

        return true;
    }
}
