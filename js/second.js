// Scroll Nav
// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)

// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => {scrollNavbar()};

var scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");

if (document.documentElement.scrollTop > 20) {
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
const events = {
    "Opening Ceremony": 
      {
        "start": "Apr 15, 2023 10:30:00",
        "end": "Apr 15, 2023 11:00:00",
        "tooltip": "Apr 15, 10:30am" 
      },
    "Lunch":
      {
        "start": "Apr 15, 2023 12:00:00",
        "end": "Apr 15, 2023 13:00:00",
        "tooltip": "Apr 15, 12:00am"
      },
    "Web Dev Workshop":
      {
        "start": "Apr 15, 2023 13:00:00",
        "end": "Apr 15, 2023 14:00:00",
        "tooltip": "Apr 15, 1:00pm"
      },
    "[REDACTED] Workshop":
      {
        "start": "Apr 15, 2023 15:00:00",
        "end": "Apr 15, 2023 16:00:00",
        "tooltip": "Apr 15, 3:00pm"
      },
    "Kahoot":
      {
        "start": "Apr 15, 2023 17:00:00",
        "end": "Apr 15, 2023 18:00:00",
        "tooltip": "Apr 15, 5:00pm"
      },
    "Hacking Ends":
      {
        "start": "Apr 16, 2023 14:00:00",
        "end": "Apr 16, 2023 14:00:00",
        "tooltip": "Apr 16, 2:00pm"
      },
    "Project Presentations":
      {
        "start": "Apr 16, 2023 14:30:00",
        "end": "Apr 16, 2023 16:00:00",
        "tooltip": "Apr 16, 2:30pm"
      },
    "Awards Ceremony" :
      {
        "start": "Apr 16, 2023 16:30:00",
        "end": "Apr 16, 2023 17:00:00",
        "tooltip": "Apr 16, 4:30pm"
      }
  }
  var countDownDate = 0;
  // Get today's date and time
  var now = new Date().getTime();
  var testDateStart, testDateEnd;

  // Test for the current event
  for (const event in events) {
    testDateStart = new Date(events[event]["start"]).getTime();
    testDateEnd = new Date(events[event]["end"]).getTime();
    if (testDateEnd > countDownDate && now < testDateEnd) {
      countDownDate = testDateStart;
      document.getElementById("event-name").innerHTML = event;
      document.styleSheets[0].addRule('#timer:after','content: "'+ events[event]["tooltip"] +'";');
      break;
    }
  }

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (testDateStart < now && now < testDateEnd) {
        document.getElementById("timer").innerHTML = "NOW";
    }
    // Display the result in the element with id="timer"
    else if (days != 0) {
        document.getElementById("timer").innerHTML = days + "d " + hours + "h";
    }
    else if (hours != 0) {
        document.getElementById("timer").innerHTML = hours + "h " + minutes + "m";
    }
    else if (minutes != 0) {
        document.getElementById("timer").innerHTML = minutes + "m";
    }
    else if (seconds != 0) {
        document.getElementById("timer").innerHTML = seconds + "s";
    }
    else {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "---";
        document.getElementById("event-name").innerHTML = "Event Ended";
    }
}, 1000);