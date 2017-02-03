// funtion tipCalc to calculate tip amount for 20%




function tipCalc() {
  var user_input = parseInt(document.getElementById("bill").value);
  alert("Your bill amount is: $" + user_input);
  alert("Your tip amount should be: $" + user_input*0.2);
  alert("Your total bill comes to: $" + (user_input + user_input*0.2));
  document.getElementById("bill").value="";
}
