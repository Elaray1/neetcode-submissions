class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs: Record<string, string> = {
            ')': '(',
            '}': '{',
            ']': '[',
        };

        const stack: string[] = [];

        for (const char of s) {
            if (char in pairs) {
                if (pairs[char] !== stack.pop()) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return !stack.length;
    }
}
