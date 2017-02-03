/*
Remake the car object activity from yesterday
Have it return a finished string into out "output" id
Ex:
  "Nissan", "altima", 2012 -> "2012 Nissan Altima"

*/

var car;

function carMaker(){
   car = {
    make: document.getElementById('make').value ,
    model: document.getElementById('model').value,
    year: document.getElementById('year').value,
    speed: 0,
    accelerate: function() {
      this.speed += 10;
    },
    brake: function() {
      this.speed -= 7;
    }
  }
  document.getElementById('output').innerHTML = car.year + " " + car.make + " " + car.model;
  document.getElementById("gas").style.visibility = "visible";
  document.getElementById("brake").style.visibility = "visible";
}

function accelerateCar(){
  if(car.speed>=85){
    console.log("Too fast bro!! YOLO");
  }
  else {
    car.accelerate();
    console.log(car.speed);
  }
}

function brakeCar() {
if(car.speed>=0){
  car.brake();
  console.log(car.speed);
}
else {
  console.log("You are at a complete stop.  Well done.");
}
}
