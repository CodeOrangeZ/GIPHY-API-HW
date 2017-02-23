var originals = ["pikachu","squirtle","bulbasaur","charmander"];

function displayGiphy() {
var original = $(this).attr("data-name");
var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + original + "&api_key=dc6zaTOxFJmzC";
console.log(original)

// ajax call

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).done(function(response) {

    for( var i = 0; response.data[i] < response.data[9]; i++){

    console.log(response);

    var giphDiv = $('<div>');

    var giph = response.data[i].images.fixed_height.url;

    var giphImg = $('<img>').attr("src", giph);

    giphImg.appendTo(giphDiv);

    var rating = response.data[i].rating;

    var ratingP = $('<p>').text("rating: " + rating);

    ratingP.prependTo(giphDiv);

    $('.giphGoesHere').prepend(giphDiv);
};
});
    };


  // render inital original buttons

function renderButtons() {
  $(".buttons-original").empty();

  for (let i = 0; i < originals.length; i++) {

    var b = $('<button>');

    b.addClass("originals");

    b.attr("data-name", originals[i]);

    b.text(originals[i]);

    $(".buttons-original").append(b);

  }
}

//  event handler for creating a new button when the submittal form is used

$(".add-giph").on("click", function(event){
  // default action performed by event will not happen
  event.preventDefault();

  var giphs = $(".giph-name").val().trim();

  originals.push(giphs);

  renderButtons();

});

$(document).on("click", ".originals", displayGiphy)

renderButtons();
