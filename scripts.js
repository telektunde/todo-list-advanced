$(document).ready(function() {
    $('#btn_add').click(function() {
        let newtext = $('#newitem').val();
        $('ul').append('<li>'+  '<input type="checkbox">' + "   " + newtext + '</li>');
    });
});

$('ul').click(function() {
    $('li:hover').toggleClass("lineThrough");
});


