/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const strAsArray = str.split('');
  for (let i = 0; i < strAsArray.length - 1; i++) {
    if (strAsArray[i] === '-' ) {
      strAsArray[i + 1] = strAsArray[i + 1].toUpperCase();
    }
  }
  const result = strAsArray.filter(x => x !== '-');
  return result.join('');
}

console.log(camelize('background-color'));
