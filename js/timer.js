// SRC: W3Schools https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Aug 12, 2022 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  if (days != 0 && hours != 0) {
    document.getElementById("timer").innerHTML = days + "d " + hours + "h";
  }
  else if (hours != 0) {
    document.getElementById("timer").innerHTML = hours + "h";
  }
  else {
    document.getElementById("timer").innerHTML = minutes + "m";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "LIVE";
  }
}, 1000);