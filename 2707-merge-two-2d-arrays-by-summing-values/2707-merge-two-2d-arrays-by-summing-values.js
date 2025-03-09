/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const map = new Map();

    for (const [key, value] of [...nums1, ...nums2]) {
        map.set(key, (map.get(key) || 0) + value);
    }

    return [...map.entries()].sort((a, b) => a[0] - b[0]);
}
