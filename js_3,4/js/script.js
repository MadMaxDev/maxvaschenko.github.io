/**
 * Created by User on 17.06.2017.
 */
var testContainer = document.createElement('div');
testContainer.className = "test_container";
document.body.appendChild(testContainer);


var testName = document.createElement('span');
testName.className = "test_name";
testName.innerHTML = 'Тест по программированию';
testName.style.marginLeft = "200px";
testContainer.appendChild(testName);

var questions = document.createElement('ul');
questions.style.listStyle = "none";
questions.style.paddingLeft = 0;
questions.style.marginTop = "50px";
for (var i = 0; i < 3; i++) {
    var questionsItems = document.createElement("li");
    questionsItems.innerHTML = (i + 1) + ". Вопрос №" + (i + 1);
    questions.appendChild(questionsItems);
    for (var j = 0; j < 3; j++) {
        var answers = document.createElement('ul');
        var answersItems = document.createElement("li");
        var answerItemLabel = document.createElement("input");
        answerItemLabel.type = "checkbox";
        answersItems.innerHTML = "Вариант ответа №" + (j + 1);
        answers.style.display = "flex";
        answers.style.listStyle = "none";
        answers.insertBefore(answerItemLabel, answersItems[0]);
        questionsItems.appendChild(answers);
        answers.appendChild(answersItems);
    }
}
testContainer.appendChild(questions);

var answersChekout = document.createElement('button');
answersChekout.innerHTML = "Проверить мои результаты";
answersChekout.style.marginLeft = "200px";
answersChekout.style.marginTop = "50px";
testContainer.appendChild(answersChekout);


console.log(document);