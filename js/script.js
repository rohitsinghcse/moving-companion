
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ',' + cityStr;
    $greeting.text('So you want to live at '+address +'?');
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address; //+'&key=AIzaSyBypXUE0Bi1cfCRrKgdJydTBHHYloIJDiQ';
    $body.append('<img class="bgimg" src="'+streetviewUrl +'">');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    //NYT AJAX request
    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+cityStr+'&sort=newest&api-key=9423be7b885f49a8a57e5e34b690d089';
    $.getJSON(nytimesUrl,function (data) {
      $nytHeaderElem.text('New York Times Articles about '+cityStr);
      articles = data.response.docs;
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">'+
        '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
          '<p>'+article.snippet +'</p>'+
          '</li>' );
      };
    })





    return false;
};

$('#form-container').submit(loadData);
