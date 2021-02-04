function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  console.log(toggleButton);
  const text = document.querySelector('#text');
  console.log(text);
  toggleButton.addEventListener('click', function() {
    text.toggleAttribute('hidden');
  })
}
