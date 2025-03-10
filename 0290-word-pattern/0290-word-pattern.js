/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const arr = s.split(' ');

    if (pattern.length !== arr.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = arr[i];

        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
};