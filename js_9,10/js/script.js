/**
 * Created by User on 16.07.2017.
 */
$('.slider').slick({
    nextArrow: $('#next'),
    prevArrow: $('#prev')
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

var subMenu1 = $('.submenu_1');
var subMenu2 = $('.submenu_2');
// var subMenu3 = $('.submenu_3');

subMenu1.on('click', function () {
    subMenu2.slideToggle('slow');
});


// subMenu1.hover(
//     function () {
//     subMenu2.animate({
//         backgroundColor: "#a72222"
//     }, 'slow', function () {
//         subMenu2.addClass("active");
//         $('#submenu_1_a').css('margin-left', 20 + 'px');
//         subMenu1.css('padding-left', 0);
//         subMenu1.css('padding-right', 0);
//     });
//     },
//     function () {
//         subMenu2.animate({},'slow', function () {
//             subMenu2.removeClass("active");
//         });
//     }
//     );
// $('#submenu_2_main_item').hover(
//     function () {
//         subMenu3.addClass("active");
//         subMenu3.css({
//             'margin-left': 70 + 'px',
//             'position': 'absolute',
//             'margin-top': -60 + 'px',
//             'background-color': '#e2d647'
//         });
//     },
//     function () {
//         subMenu3.removeClass("active");
//     }
// );
//
//
// console.log(subMenu1);
