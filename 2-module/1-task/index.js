/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let totalSalary = 0;

  for (let prop in salaries) {
    if (
      typeof salaries[prop] === 'number' &&
      !Number.isNaN(salaries[prop]) &&
      Number.isFinite(salaries[prop])
    ) {
      totalSalary = totalSalary + Number(salaries[prop]);
    }
  }

  return totalSalary;
}
