/**
 * Created by User on 17.06.2017.
 */
var testContainer = document.createElement('div');
testContainer.className = "test_container";
document.body.appendChild(testContainer);


var testName = document.createElement('span');
testName.className = "test_name";
testName.innerHTML = 'Тест по программированию';
testContainer.appendChild(testName);

var questions = document.createElement('ul');
for (var i = 0; i < 3; i++) {
    var answers = document.createElement("li");
    questions.appendChild(answers);
}
testContainer.appendChild(questions);


console.log(document);