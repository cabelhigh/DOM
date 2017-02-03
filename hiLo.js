/*
  A HiLo game that does NOT include a while loop
  First:
    Generate a random number between 1 and 100
  Then:
    If there are no guesses left:
      Tell them they lost!
    else:
      Check if user's input is === to random number
      If it is:
        They won!
      If it isnt:
        If it's too high:
          Tell them it's too high
        else if it's too low:
          Tell them it's too low
        Subtract 1 guess from their total
*/

var rand = getRandomInt(1,100);
var guesses = 7;

function hiLo() {
  if(guesses<=0){
    document.getElementById('output').innerHTML = "Oh no! You lost!";
    document.getElementById('guesses').innerHTML = "Page refreshing in 5 seconds...";

    setTimeout(function() {
      window.location.reload();
    }, 5000);

  }
  else{
    if(parseInt(document.getElementById('number').value)===rand){
      document.getElementById('output').innerHTML = "Oh yay! You won!";
        document.getElementById('guesses').innerHTML = "Page refreshing in 5 seconds...";
      setTimeout(function() {
        window.location.reload();
      }, 5000);
    }
    else if(parseInt(document.getElementById('number').value)>rand){
      document.getElementById('output').innerHTML = "You're too hi!";
    }
    else if(parseInt(document.getElementById('number').value)<rand){
      document.getElementById('output').innerHTML = "You're too lo!";
    }
    guesses--;
    document.getElementById('guesses').innerHTML = "You have " + guesses + " guesses left";
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
