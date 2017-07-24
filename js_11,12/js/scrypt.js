$(function ($) {
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