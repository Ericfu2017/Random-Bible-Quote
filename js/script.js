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
            "quotes": "I have to work 16 hours today and tomorrow T_T :-) :-)",
            "author": "Yu Fu"
        },
        {
            "quotes": "What a fucked up system. A prisoner can get all medical treatments including CABG, HIV and Hep C treatments free but we hav to pay for it. It is Fucked Up!",
            "author": "Yu Fu"
        },
        {
            "quotes": "You and I will follow blueberry cheesecake! :-)",
            "author": "Weed Jeremy"
        },
        {
            "quotes": "Focus on now, not yesterday not tommorow and believe you can achieve your goals with all your heart! ^_^",
            "author": "Yu Fu"
        }
    ]

    var btcPrice = 0;
    var ethPrice = 0;
    var ltcPrice = 0;
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
        if (btcPrice !== data.USD) {
            if (btcPrice < data.USD) {
                $('#btc').html("Bitcoin: " + '<span style="color:green">$' + data.USD + '</span>'); 
                btcPrice = data.USD;
            } else {
                $('#btc').html("Bitcoin: " + '<span style="color:red">$' + data.USD + '</span>');
                btcPrice = data.USD;
            }
        }
    });
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function(data){
        if (ethPrice !== data.USD) {
            if (ethPrice < data.USD) {
                $('#eth').html("Ethereum: " + '<span style="color:green">$' + data.USD + '</span>'); 
                ethPrice = data.USD;
            } else {
                $('#eth').html("Ethereum: " + '<span style="color:red">$' + data.USD + '</span>'); 
                ethPrice = data.USD;
            }
        }
    });
        $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD", function(data){
        if (ltcPrice !== data.USD) {
            if (ltcPrice < data.USD) {
                $('#ltc').html("Litecoin: " + '<span style="color:green">$' + data.USD + '</span>'); 
                ltcPrice = data.USD;
            } else {
                $('#ltc').html("Litecoin: " + '<span style="color:red">$' + data.USD + '</span>'); 
                ltcPrice = data.USD;
            }
        }
    })
        $('#abtc').html("AML Bitcoin: coming soon ...");
        $('#currency-container');
    }

    function getQuote() {
        var choice = Math.floor(Math.random() * 2);
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
        setTimeout(function(){ $('#mannaverse-reference').addClass("animated shake")}, 4000);
        quotes = myQuotes[randomNumber].quotes;
        chapter = myQuotes[randomNumber].author;
    }
    
})
