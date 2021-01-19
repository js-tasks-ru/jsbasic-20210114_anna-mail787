/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length < 2) {
    return str.toUpperCase();
  }
  return  str.charAt(0).toUpperCase() + str.substring(1);
}
