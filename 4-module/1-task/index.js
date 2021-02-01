/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  for (let friend of friends) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `{friend.firstName} {friend.lastName}`;
  }

  return ul;
}
