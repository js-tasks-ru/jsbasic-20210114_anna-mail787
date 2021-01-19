/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const SPAM_STR = ['1XbeT', 'xxx'];
  for (let i = 0; i < SPAM_STR.length; i++) {
    if (str.includes(SPAM_STR[i])) {
      return true;
    }
  }
  return false;
}
