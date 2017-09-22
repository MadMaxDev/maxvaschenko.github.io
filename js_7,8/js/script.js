/**
 * Created by User on 09.07.2017.
 */
// TABS
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// TOOLTIP

$(document).ready(function () {

    $('.boxcall').mousemove(function () {
        var box = '#' + $(this).attr('id') + '_simple_box';
        $(box).show(200);

    });

    $('.boxcall').mouseout(function () {
        var box = '#' + $(this).attr('id') + '_simple_box';
        $(box).hide(200);
    })
});

$(document).ready(function () {
    $('#showHelp').click(function () {
        $('#name1_simple_box').show(100);
        $('#name2_simple_box').show(100);
        $('#name3_simple_box').show(100);
    })
});
