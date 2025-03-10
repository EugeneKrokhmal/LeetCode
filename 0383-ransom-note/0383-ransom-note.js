/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    const hashMap = magazine.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    }, {})

    for (let i = 0; i < ransomNote.length; i++) {
        if (!hashMap[ransomNote[i]] || hashMap[ransomNote[i]] === 0) {
            return false;
        }
        --hashMap[ransomNote[i]]
    }
    return true
};