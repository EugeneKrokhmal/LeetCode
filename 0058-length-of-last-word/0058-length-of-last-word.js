/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strArr = s.split(' ').filter(el => el !== '')

    return strArr, strArr[strArr.length - 1].length
};