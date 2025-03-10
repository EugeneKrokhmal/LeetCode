/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let min = Infinity,
        max = 0

    for (price of prices) {
        if (price < min) {
            min = price
        } else {
            max = Math.max(max, price - min);
        }
    }

    return max;
};