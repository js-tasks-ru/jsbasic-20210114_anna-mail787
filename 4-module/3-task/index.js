/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[3].hasAttribute('data-available')) {
      if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
        table.rows[i].classList.add('available');
      } else {
        table.rows[i].classList.add('unavailable');
      }
    } else {
      table.rows[i].setAttribute('hidden', 'hidden');
    }
    if (table.rows[i].cells[2].innerText === 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2].innerText === 'f') {
      table.rows[i].classList.add('female');
    }
    if (Number((table.rows[i].cells[1].textContent) < 18)) {
      table.rows[i].style.textDecoration = 'line-through';
    }
  }
}
