// Scroll Nav
// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)

// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => {scrollNavbar()};

var scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");

if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

} else {
    navBar.classList.remove("pa-fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
}
}

// Email Replace
function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}

const tech_emails = document.querySelectorAll('.email-replace-tech');
    tech_emails.forEach(entry => {
        setAttributes(entry, {"href": "mailto:tech" + "@" + "gilroyhacks.com?subject=Gilroy Hacks", "target": "_blank"});
        entry.innerHTML = "tech" + "@" + "gilroyhacks.com";
    });

// Timer
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

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "LIVE";
}
// Display the result in the element with id="timer"
if (days != 0) {
    document.getElementById("timer").innerHTML = days + "d " + hours + "h";
}
else if (hours != 0) {
    document.getElementById("timer").innerHTML = hours + "h" + minutes + "m";
}
else {
    document.getElementById("timer").innerHTML = minutes + "m";
}
}, 1000);