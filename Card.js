const Suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

const Faces = ["ACE", "TWO", "THREE", "FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","JACK","QUEEN","KING"];
class Card{
  constructor(cardNumber){
    this.cardNumber = cardNumber;
  }//end constructor

  get Suit(){
    return Suits[parseInt(this.cardNumber/13)];
  }//end get suit

  get Face(){
    return Faces[parseInt(this.cardNumber%13)];
  }//end get face
}//end class
