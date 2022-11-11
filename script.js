/*
Ian mcTavish
  November 11, 2022
  Save a file - unit 3
  */
alert("line 6");
var deck = new Deck();

//alert(deck.showDeck());
//alert("line 10");
var fullText = "";
function addFile(){

//  fullText += deck.showDeck();
var deckOfCards = deck.prepareForWriting();
alert(deckOfCards);
var data = new Blob(deckOfCards, {type: 'text/plain'});

var url = window.URL.createObjectURL(data);
document.getElementById('download_link').href = url;
}