var startButton = document.getElementById("start");
var timeEl = document.querySelector(".time");


var letters = ["J", "S", "O", "N"];


var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining ";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}


startButton.addEventListener("click", function(event) {
   event.preventDefault();
   setTime();
});



