class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const numbersMap: Map<string, number> = new Map();

        [...s].forEach((item) => {
            numbersMap.set(item, (numbersMap.get(item) || 0) + 1)
        });

        const tArray = [...t];

        for (let i = 0; i < tArray.length; i++) {
            const item = tArray[i];

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
