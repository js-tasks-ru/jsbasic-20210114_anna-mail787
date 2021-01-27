/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const numbers = str.split(/,| /).filter(item => Number(item));
  const result = {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
  return result;
}
