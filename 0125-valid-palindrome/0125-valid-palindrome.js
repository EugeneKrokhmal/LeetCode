/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const match = s.replace(/[^\w\s]/gi, '');
    const strArr = match.toLowerCase().split('').filter(el => el !== ' ' && el !== '_')
    return strArr.join('') === strArr.reverse().join('')
};