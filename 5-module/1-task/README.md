# Спрятать себя

Напишите функцию `hideSelf`, которая сделает так, чтобы кнопка с классом `hide-self-button` скрывала себя по нажатию. Чтобы скрыть кнопку, добавьте ей атрибут `hidden`.

```js
function hideSelf() {
  const hideSelfButton = document.querySelector('.hide-self-button');
  hideSelfButton.addEventListener = ('click', function() {
    hideSelfButton.setAttribute('hidde', 'hidden');
  }
}

document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});

hideSelf();
```

Сама кнопка:
```html
<button class="hide-self-button">Нажмите, чтобы спрятать</button>
```

В файле `index.html` вы можете найти пример использования функции.
