$(document).ready(function(){
    /*$("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/mystyle.css"
    }).appendTo("head"); */
    var myQuotes = [
        {
            "quotes": "You and I will follow blueberry cheesecake! :-)",
            "author": "Weed Jeremy"
        }
    ]

    
    var $body = $('body');
    var backgroundImg = "https://images.unsplash.com/photo-1492895036205-f803195fba76?ixlib=rb-  0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b777119344e02d5404869424d03b71e8&auto=format&fit=crop&w=800&q=60";
    $body.append('<img class="background-img" src="' + backgroundImg + '"/>');

    
    getQuote();
    updatePrice();
    
    $('#next').click(function(event){
       event.preventDefault();
       getQuote();
       updatePrice();
    });

    $('#share').on('click', function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes + ' -- ' + chapter));
    });
  
    
    
   
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
        $('#abtc').html("AML Bitcoin: coming soon ...");
        $('#currency-container');
    }

    function getQuote() {
        var choice = Math.floor(Math.random() * 20);
        if (choice == 0) {
            getMyQuotes();
        } else {
            dailyBread();
        }
    }
    
    function dailyBread() {
        $.getScript("https://beta.ourmanna.com/api/v1/js/?order=random", function(){
            $('#mannaverse-container').hide().fadeIn(2000);
            quotes = $('#mannaverse').text();
            chapter = $('#mannaverse-reference').text();
        });
    }

    function getMyQuotes () {
        var length = myQuotes.length;
        var randomNumber = Math.floor(Math.random() * length);
        $('#ourmanna-verse').html('<div id="mannaverse-container"><p id="mannaverse">' + myQuotes[randomNumber].quotes + '</p> <p id="mannaverse-reference">' + myQuotes[randomNumber].author + '</p></div>' ).slideUp(2000).slideDown(2000);
        quotes = myQuotes[randomNumber].quotes;
        chapter = myQuotes[randomNumber].author;
    }
    
})
