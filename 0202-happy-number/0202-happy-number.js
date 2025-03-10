/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
};

function getSumOfSquares(num) {
    return String(num)
        .split('')
        .map(digit => digit ** 2)
        .reduce((sum, square) => sum + square, 0);
}