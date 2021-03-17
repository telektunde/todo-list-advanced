$(document).ready(function() {
    $('#btn_add').click(function() {
        let newtext = $('#newitem').val();
        $('ul').append('<li>' + newtext + '</li>');
        $('input').val("");
    });
});

$('ul').click(function() {
    $('li:hover').toggleClass("lineThrough");
});

//$('ul').click(function() {
//    $('li:hover').toggleClass("lineThrough");
//});


//$('ul').append('<li>'+  '<input type="checkbox">' + "   " + newtext + '</li>');

//        let close = $('<span></span>').text('x');