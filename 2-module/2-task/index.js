/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let empty = true;

  for (let prop in obj) {
    empty = false;
    break;
  }

  return empty;
}
