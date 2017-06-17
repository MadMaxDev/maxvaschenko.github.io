/**
 * Created by User on 28.05.2017.
 */
var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(prompt('Введите имя', name));
}

console.log(arr);

userName = prompt('Введите имя пользователя');

for (var i = 0; i < 5; i++) {
    if (arr[i] === userName) {
        alert(userName + ', вы успешно вошли');
        break
    } else {
        alert('Error');
        break
    }
}


console.log(arr);
console.log(userName);