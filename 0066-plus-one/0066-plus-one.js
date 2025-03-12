/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(el => el = Number(el));