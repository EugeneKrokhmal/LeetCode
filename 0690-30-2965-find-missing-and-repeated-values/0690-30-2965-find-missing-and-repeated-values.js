/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const flattenedArr = grid.flat();
    const sortedArr = flattenedArr.sort((a, b) => a - b);
    const uniqueArr = [...new Set(sortedArr)];
    const occurMap = flattenedArr.reduce((acc, curr) => { acc[curr] = (acc[curr] + 1 || 0); return acc }, {});
    let repeated = 0;

    for (let [key, value] of Object.entries(occurMap)) {
        if (value > 0) {
            repeated = +key
        }
    }

    return [repeated, findMissingNumbers(uniqueArr)]
};

function findMissingNumbers(arr) {
    let missing = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (let i = 1; i <= max + 1; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    
    return missing[0];
}