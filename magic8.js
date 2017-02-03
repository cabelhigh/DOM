/*
  Make the Eight-Ball's responses
  Make a function that randomly picks one
  And returns your question + the Eight-Ball's response

  Ex:
    Output -> "Will I get married this year? Not a chance!"
*/

var responses = "Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, Do the opposite, Your answer here.".split(",");
//^^^ Takes a string and seperates it into an array using .split(",") to split the string with every comma

function futureSeer() {
  var resp = responses[getRandomInt(0, responses.length-1)] //gets a random response from respones using the randomInt function
  document.getElementById("response").innerHTML = document.getElementById("textInput").value + " " + resp;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //gets a random number between min and max
}
