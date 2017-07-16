/**
 * Created by User on 16.07.2017.
 */
$('.slider').slick({
    nextArrow: $('#next'),
    prevArrow: $('#prev'),
});

$(function () {
    $('select').selectric();
});

$('.nonCss').on('click', function () {
    if ($(this).find('input:checked').length) {
        $(this).addClass('active');
    } else {
        $(this).removeClass('active');
    }
});