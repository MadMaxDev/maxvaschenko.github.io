"use strict";

var source   = $('#testPage').html();

var template = Handlebars.compile(source);

var data = JSON.parse(localStorage.getItem("testDataKey"));

var dataSource = {
    testName: 'Тест по математике',
    questions: [
        {
            title: '1. Сколько будет 2^4?',
            answers: ['4', '8', '32'],
            correctAnswers: [3]
        },
        {
            title: '2. Какая фигура имеет равные стороны?',
            answers: ['Квадрат', 'Равнобедренный треугольник', 'Прямоугольник'],
            correctAnswers: [1]
        },
        {
            title: '3. Чему равно (2+2)*2?',
            answers: ['4', '6', '8'],
            correctAnswers: [3]
        }
    ]
};

var html = template(data);
$(document.body).append(html);


var testData = JSON.stringify(dataSource);
localStorage.setItem("testDataKey", testData);



