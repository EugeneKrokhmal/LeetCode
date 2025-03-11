/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const charMapS = new Map();
    const charMapT = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (charMapS.has(charS)) {
            if (charMapS.get(charS) !== charT) return false;
        } else {
            charMapS.set(charS, charT);
        }

        if (charMapT.has(charT)) {
            if (charMapT.get(charT) !== charS) return false;
        } else {
            charMapT.set(charT, charS);
        }
    }

    return true;
};
