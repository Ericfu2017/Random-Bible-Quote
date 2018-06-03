$(document).ready(function(){
   /* $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/mystyle.css"
    }).appendTo("head"); 
    */

    var $body = $('body');
    var backgroundImg = "https://images.unsplash.com/photo-1492895036205-f803195fba76?ixlib=rb-  0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b777119344e02d5404869424d03b71e8&auto=format&fit=crop&w=800&q=60";
    $body.append('<img class="background-img" src="' + backgroundImg + '"/>');
    //$body.append('<script src="http://www.ourmanna.com/verses/api/js/?order=random" type="text/javascript"></script>');
    //quote = $('#mannaverse').text(); //try to extract quote text from the <p> tag
    //console.log(quote);
    //$('#share').hide();
    getQuote();
    updatePrice();

    $('#next').click(function(event){
        event.preventDefault();
       // $body.append('<script src="http://www.ourmanna.com/verses/api/js/?order=random" type="text/javascript"></script>');
        getQuote();
        updatePrice();
    });
    // try to fix the tweet quote functionality
    /*
    var reference = $('#mannaverse-reference').text() + $('#mannaverse-version').text();

    $('#share').click(function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
    })
    */
   
    function updatePrice() {
        
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function(data){
        $('#btc').html("Bitcoin: $" + data.USD);
    });
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function(data){
        $('#eth').html("Ethereum: $" + data.USD);
    });
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD", function(data){
        $('#ltc').html("Litecoin: $" + data.USD);
    })
        $('#abtc').html("AML Bitcoin: coming soon ...")
    }

    function getQuote() {
        $.getScript("https://beta.ourmanna.com/api/v1/js/?order=random", function(){

        });
    }
    

})
