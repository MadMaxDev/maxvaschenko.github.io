(function ($) {
    var leftButton = $('.carousel-arrow-left');
    var rightButton = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementLenght = elementsList.find('li').length;
    var minimumOffset = - ((elementLenght - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftButton.click(function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
    });
    rightButton.click(function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
    });
})(jQuery);

// PROFILE PAGE

var source   = $('#profilePage').html();
var template = Handlebars.compile(source);
var context = {
    firstName: 'Maxim',
    middleName: 'Olegovich',
    lastName: 'Vashchenko',
    avatarUrl: 'img/photo.jpg',
    profession: 'IT Sales Manager',
    reasons: [
        "it's interesting for me",
        "I think it's perspective profession",
        "good salary"
    ],
    phoneNumber: '0638614257',
    fbUrl: 'https://www.facebook.com/profile.php?id=100006076749205',
    feedback: 'Feedback after course'
};

var html = template(context);
$(document.body).append(html);
