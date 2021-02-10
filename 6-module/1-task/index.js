/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {

  constructor(rows) {
    this.elem = document.createElement('table');
    const thead = document.createElement('thead');
    this.elem.append(thead);
    const theadRow = document.createElement('tr');
    thead.append(theadRow);
    let th = document.createElement('th');
    th.textContent = 'Имя';
    theadRow.append(th);
    th.textContent = 'Возраст';
    theadRow.append(th);
    th.textContent = 'Зарплата';
    theadRow.append(th);
    th.textContent = 'Город';
    theadRow.append(th);
    th.textContent = '';
    theadRow.append(th);
    const tbody = document.createElement('tbody');
    this.elem.append(tbody);

    for (let row of rows) {
      const tr = document.createElement('tr');
      tbody.append(tr);
      for (let key in row) {
        const td = document.createElement('td');
        td.textContent = row[key];
        tr.append(td);
      }
      const buttonTd = document.createElement('td');
      buttonTd.innerHTML = '<button class="removeButton">X</button>';
      tr.append(buttonTd);
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    this.elem.addEventListener('click', this.clickHandler);
  }

  clickHandler(event) {
    if (event.target.className != 'removeButton') return;

      let tr = event.target.closest('tr');
      tr.remove();

  }
}
