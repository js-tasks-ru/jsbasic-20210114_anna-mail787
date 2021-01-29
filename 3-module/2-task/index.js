/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  const result = arr.filter(x => x >= a && x <= b);
  return result;
}
