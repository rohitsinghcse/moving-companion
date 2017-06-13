
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
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?600x400&location='+address +'&key=AIzaSyBypXUE0Bi1cfCRrKgdJydTBHHYloIJDiQ';
    $body.append('<img class="bgimg" src="'+streetviewUrl +'">');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
