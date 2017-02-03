/*
Check user id and password to align with the following criteria:

 User ID & Password must:
 - <span class="red">No</span>t be the same
 - contain 6 characters
 User ID:
 - can<span class="red">No</span>t contain: !#$
 Password:
 - must contain one of the following: !#$
 - must contain at least one digit
 - must contain upper and lower case letters

create the var for username and the var for password in the same function
that function is going to be validator()

*/
window.onload = function() {
document.getElementById('pwd').onkeydown = function(e) {
  if(e.keyCode == 13) {
    validator();
  }
}
}

function validator() {
  var userId = document.getElementById('uid').value;
  var password = document.getElementById('pwd').value;
  if (userId !== password) {
    document.getElementById('crit1').innerHTML = 'Username and password the same? <span class="red">No</span>';
  } else {
    document.getElementById('crit1').innerHTML = 'Username and password the same? <span class="green">Yes</span>';
  }
  if (userId.length >= 6 && password.length >= 6) {
    document.getElementById('crit2').innerHTML = 'Username and password longer than 6? <span class="green">Yes</span>'
  } else {
    document.getElementById('crit2').innerHTML = 'Username and password longer than 6? <span class="red">No</span>'
  }
  if (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")) {
    document.getElementById('crit3').innerHTML = 'Username contains !#$? <span class="red">No</span>';
  } else {
    document.getElementById('crit3').innerHTML = 'Username contains !#$? <span class="green">Yes</span>';
  }
  if (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")) {
    document.getElementById('crit3').innerHTML = 'Username contains !#$? <span class="red">No</span>';
  } else {
    document.getElementById('crit3').innerHTML = 'Username contains !#$? <span class="green">Yes</span>';
  }
  if (password.includes("!") || password.includes("#") || password.includes("$")) {
    document.getElementById('crit4').innerHTML = 'Password contains !#$? <span class="green">Yes</span>';
  } else {
    document.getElementById('crit4').innerHTML = 'Password contains !#$? <span class="red">No</span>';
  }
  var hasNumber = false; //a boolean variable that will be set to true if our password has a number
  var pwdArray = password.split(""); //an array of our password, split by character
  pwdArray.forEach(function(element){ //for every element in our password array
    if(!isNaN(parseInt(element))){ //if the parseInt elemet is <span class="red">No</span>T <span class="red">No</span>t a Number
      hasNumber=true; //then it is a number and we set hasNumber to true
    }
  })
  if(hasNumber===true){
    document.getElementById('crit5').innerHTML = 'Password contains digit? <span class="green">Yes</span>';
  } else {
    document.getElementById('crit5').innerHTML = 'Password contains digit? <span class="red">No</span>';
  }

  var hasUpper = false;
  var hasLower = false;

  pwdArray.forEach(function(element){
    if(element.charCodeAt(0)>=65 && element.charCodeAt(0)<=90){
      hasUpper=true;
    }
    else if(element.charCodeAt(0)>=97 && element.charCodeAt(0)<=122){
      hasLower=true;
    }
  })

  if(hasUpper && hasLower){
      document.getElementById('crit6').innerHTML = 'Password has upper and lower case? <span class="green">Yes</span>';
  } else {
    document.getElementById('crit6').innerHTML = 'Password has upper and lower case? <span class="red">No</span>';
  }






}
