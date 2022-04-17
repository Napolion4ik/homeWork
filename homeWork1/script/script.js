let users = prompt('Введите пользователей через ,');

let arr = users.split(',')

let listItem = document.querySelector('.list');

let html = ``;

arr.forEach(function (item, index) {
    let usersName = item;
    let number = ++index;

    html += (`<li>Номер пользователя: <strong>${number}</strong>. Имя пользователя: <strong>${usersName}</strong></li>.`);
    listItem.innerHTML = html;
    
})
