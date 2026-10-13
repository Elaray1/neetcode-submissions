function isAlphanumeric(char: string) {
        return /^[A-Za-z0-9]$/.test(char);
    }

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let pointerA = 0;
        let pointerB = s.length - 1;

        while (pointerA <= pointerB) {
            const charA = s[pointerA];

            const isAlphanumericA = isAlphanumeric(charA);

            if (!isAlphanumericA) {
                pointerA++;
                continue;
            }

            let charB = s[pointerB];
            let isAlphanumericB = isAlphanumeric(charB);

            while (!isAlphanumericB && pointerB >= pointerA) {
                pointerB--;
                charB = s[pointerB];

                isAlphanumericB = isAlphanumeric(charB);
            }

            if (pointerB < pointerA) {
                return true;
            }

            if (charA.toLowerCase() !== charB.toLowerCase()) return false;

            pointerA++;
            pointerB--;
        }

        return true;
    }
}
