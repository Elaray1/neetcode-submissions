class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const charactersMap = {
            ')': '(',
            '}': '{',
            ']': '[',
        };
        const openingBrackets = Object.values(charactersMap);
        const closingBrackets = Object.keys(charactersMap);

        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (openingBrackets.includes(char)) {
                stack.push(char);

                continue;
            }

            if (closingBrackets.includes(char)) {
                const openingChar = stack.pop();

                if (charactersMap[char] !== openingChar) {
                    return false;
                }
            }
        }

        return !stack.length;
    }
}
