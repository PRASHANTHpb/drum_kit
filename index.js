
var numberOfDrums = document.querySelectorAll(".drum").length;


//Detecting button press
for(var i = 0; i<numberOfDrums; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keyboard press
document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("images/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("images/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("images/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("images/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("images/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("images/crash.mp3");
    crash.play();
    break;

    case "l":
    var kickBass = new Audio("images/kick-bass.mp3");
    kickBass.play();
    break;

    default: console.log(buttoninnerHTML);
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
