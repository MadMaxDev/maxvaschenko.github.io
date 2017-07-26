// PROFILE PAGE
var source   = $('#profilePage').html();
var template = Handlebars.compile(source);
var context = {
    firstName: 'Maxim',
    middleName: 'Olegovich',
    lastName: 'Vashchenko',
    avatarUrl: 'img/photo.jpg',
    profession: 'IT Sales Manager',
    phoneNumber: '0638614257',
    fbUrl: 'https://www.facebook.com/',
    feedback: 'Feedback after course'
};

var html = template(context);
$(document.body).append(html);

console.log (source);
console.log (template);
console.log (data);
console.log (html);