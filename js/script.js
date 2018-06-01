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
    //quote = $('#mannaverse').text(); //try to extract quote text from the <p> tag
    //console.log(quote);
    //$('#share').hide();
    $('#next').click(function(event){
        event.preventDefault();
        $body.append('<script src="http://www.ourmanna.com/verses/api/js/?order=random" type="text/javascript"></script>');
    });
    // try to fix the tweet quote functionality
    /*
    var reference = $('#mannaverse-reference').text() + $('#mannaverse-version').text();

    $('#share').click(function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
    })
    */
})
