$(document).ready(function(){
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/mystyle.css"
    }).appendTo("head");

    var $body = $('body');
    var backgroundImg = "/img/water.jpg";
    $body.append('<img class="background-img" src="' + backgroundImg + '"/>');
    $body.append('<script src="http://www.ourmanna.com/verses/api/js/?order=random" type="text/javascript"></script>');

    $('#next').click(function(){
        location.reload();
    })
})