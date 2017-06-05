var arr = [];

for (var i = 0; i < 5; i++) {

    arr.push(prompt("Введите имя"));

}

userName = prompt("Введите имя пользаователя");

if (userName == arr[0]) {
    alert(userName + ", вы успешно вошли");
} else if (userName == arr[1]) {
    alert(userName + ", вы успешно вошли");
} else if (userName == arr[2]) {
    alert(userName + ", вы успешно вошли");
} else if (userName == arr[3]) {
    alert(userName + ", вы успешно вошли");
} else if (userName == arr[4]) {
    alert(userName + ", вы успешно вошли");
} else {
    alert("Ошибка!")
}

console.log(arr);
console.log(userName);
