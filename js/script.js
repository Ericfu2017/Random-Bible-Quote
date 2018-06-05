$(document).ready(function(){
    /*$("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/mystyle.css"
    }).appendTo("head"); */
    var myQuotes = [
        {
            "quotes": "I follow blueberry cheesecake now! :-)",
            "author": "Wenkui Fu"
        },
        {
            "quotes": "I think there are things that are clearly right and clearly wrong in the world just like there are people who serve others and people who abuse or use ohters to serve themselves and God's Love goes out to ALL ALIKE",
            "author": "Weed Jeremy"
        },
        {
            "quotes": "Anyway, politics are so dirty! I Quit!",
            "author": "Wenkui Fu"
        },
        {
            "quotes": "I have to work 16 hours today and tomorrow T_T",
            "author": "Yu Fu"
        },
        {
            "quotes": "What a fucked up system. A prisoner can get all medical treatments including CABG, HIV and Hep C treatments free but we hav to pay for it. It is Fucked Up!",
            "author": "Yu Fu"
        },
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
        var choice = Math.floor(Math.random() * 10);
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
