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

            const isAlphanumericA = /^[A-Za-z0-9]$/.test(charA);

            if (!isAlphanumericA) {
                pointerA++;
                continue;
            }

            let charB = s[pointerB];
            let isAlphanumericB = /^[A-Za-z0-9]$/.test(charB);

            while (!isAlphanumericB && pointerB >= pointerA) {
                pointerB--;
                charB = s[pointerB];

                isAlphanumericB = /^[A-Za-z0-9]$/.test(charB);
            }

            if (charA.toLowerCase() !== charB.toLowerCase()) return false;

            pointerA++;
            pointerB--;
        }

        return true;
    }
}
