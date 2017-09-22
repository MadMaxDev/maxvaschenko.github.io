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

console.log (source);
console.log (template);
console.log (data);
console.log (html);