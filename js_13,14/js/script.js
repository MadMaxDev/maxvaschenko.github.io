"use strict";

var source   = $('#testPage').html();

var template = Handlebars.compile(source);

var data = JSON.parse(localStorage.getItem("testDataKey"));

var dataSource = {
    testName: 'Тест по математике',
    questions: [
        {
            title: '1. Сколько будет 2^4?',
            answers: ['4', '8', '16']
        },
        {
            title: '2. Какая фигура имеет все равные стороны?',
            answers: ['Квадрат', 'Равнобедренный треугольник', 'Прямоугольник']
        },
        {
            title: '3. Чему равно (2+2)*2?',
            answers: ['4', '6', '8']

        }

    ],
    correctAnswers : '[0, 0, 1, 1, 0, 0, 0, 0, 1]'
};

var html = template(data);
$(document.body).append(html);


var testData = JSON.stringify(dataSource);
localStorage.setItem("testDataKey", testData);

// Проверка

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const btn = document.getElementById("btn");

const getInptState = inputs => inputs.map(input => input.checked);

btn.addEventListener("click", () => {
    const state = getInptState([...checkboxes]);
    var resultStr = (`${JSON.stringify(state)}`);
    var result = JSON.parse(resultStr);

    var correctResultsVal = JSON.parse(data.correctAnswers);
    var correctResults = [];
    for(var i=0; i<correctResultsVal.length; i++) {
        if (correctResultsVal[i]==0) {
            correctResults.push(false);
        } else correctResults.push(true);
    }
    var resultOfTest = _.isEqual(result, correctResults);
    if (resultOfTest==true) {
        $("#testResult1").css("display", "block");
        $("#testResult2").css("display", "none");
    } else {
        $("#testResult1").css("display", "none");
        $("#testResult2").css("display", "block");
    }
$("#myModalBox").modal('show');
$('input').prop('checked', false);

});

a