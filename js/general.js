// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)
"use strict";

// document is loaded and DOM is ready
document.addEventListener('DOMContentLoaded', function(){
  // Email replace
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

  var sponsoremail = document.getElementById("email-replace-sponsor");
  setAttributes(sponsoremail, {"href": "mailto:sponsor" + "@" + "gilroyhacks.com.com?subject=Gilroy Hacks", "target": "_blank"});
  sponsoremail.innerHTML = "sponsor" + "@" + "gilroyhacks.com";

  var aadhavan = document.getElementById("email-replace-aadhavan");
  setAttributes(aadhavan, {"href": "mailto:aadhavanmagesh" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  aadhavan.innerHTML = "aadhavanmagesh" + "@" + "gmail.com";

  var isaac = document.getElementById("email-replace-isaac");
  setAttributes(isaac, {"href": "mailto:ihwang125" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  isaac.innerHTML = "ihwang125" + "@" + "gmail.com";

  var steven = document.getElementById("email-replace-steven");
  setAttributes(steven, {"href": "mailto:stevendinh987" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  steven.innerHTML = "stevendinh987" + "@" + "gmail.com";

  const vijay_emails = document.querySelectorAll('.email-replace-vijay');
  vijay_emails.forEach(entry => {
    setAttributes(entry, {"href": "mailto:vijaykethanaboyina" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    entry.innerHTML = "vijaykethanaboyina" + "@" + "gmail.com";
  });

  var jonathan = document.getElementById("email-replace-jonathan");
  setAttributes(jonathan, {"href": "mailto:jonathantessmann" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  jonathan.innerHTML = "jonathantessmann" + "@" + "gmail.com";

  var james = document.getElementById("email-replace-james");
  setAttributes(james, {"href": "mailto:jamesdinh77" + "@" + "protonmail.com?subject=Gilroy Hacks", "target": "_blank"});
  james.innerHTML = "jamesdinh77" + "@" + "protonmail.com";

  var ezra = document.getElementById("email-replace-ezra");
  setAttributes(ezra, {"href": "mailto:ezrabridger27" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  ezra.innerHTML = "ezrabridger27" + "@" + "gmail.com";

  var mark = document.getElementById("email-replace-mark");
  setAttributes(mark, {"href": "mailto:markshen00" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  mark.innerHTML = "markshen00" + "@" + "gmail.com";

  var bryce = document.getElementById("email-replace-bryce");
  setAttributes(bryce, {"href": "mailto:brycemankovsky" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  bryce.innerHTML = "brycemankovsky" + "@" + "gmail.com";

  var daniel = document.getElementById("email-replace-daniel");
  setAttributes(daniel, {"href": "mailto:kenhoule20" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
  daniel.innerHTML = "kenhoule20" + "@" + "gmail.com";

  // Scroll Element
  // Creating an observer when the user views that element
  const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('slide-animation');
      }
      });
  });

  const observer_prize_2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-animation-prize-2');
      }
      });
  });

  const observer_prize_1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-animation-prize-1');
      }
      });
  });
  
  const observer_prize_3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-animation-prize-3');
      }
      });
  });

  const observer_team_img = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-animation-card-img');
      }
      });
  });

  const observer_team_desc = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-animation-card-desc');
      }
      });
  });

  const info_card = document.querySelectorAll('.info-card');
  info_card.forEach(entry => {
      observer.observe(entry);
  });

  const info_card_container = document.querySelectorAll('.card-info-container');
  info_card_container.forEach(entry => {
      observer.observe(entry);
  });

  const workshop_entry = document.querySelectorAll('.workshop-entry');
  workshop_entry.forEach(entry => {
      observer.observe(entry);
  });

  const rules_obj = document.querySelectorAll('.rules-box');
  rules_obj.forEach(entry => {
      observer.observe(entry);
  });

  const entries = document.querySelectorAll('.team-picture');
  entries.forEach(entry => {
      observer_team_img.observe(entry);
  });

  const entries_desc = document.querySelectorAll('.team-description');
  entries_desc.forEach(entry => {
      observer_team_desc.observe(entry);
  });
  
  const prize_entries = document.querySelectorAll('.prize-column');
  prize_entries.forEach(entry => {
      observer.observe(entry);
  });

  const prize_entries_edge = document.querySelectorAll('.podium-edge');
  prize_entries_edge.forEach(entry => {
      observer.observe(entry);
  });

  // Add class animations to these elements
  let elements_id = [
    // '#current-info',
    '#event-title',
    '#div-hr',
    '#splash-entrance',
    '#what-GilroyHacks',
    '#why-GilroyHacks',
    '#who-GilroyHacks',
    '#splide',
    '#signup-title',
    '#steps-card',
    '#sponsor-title',
    '#sponsor-container',
    '#schedule-title',
    '#schedule-pa',
    '#workshops-description',
    '#second-podium',
    '#first-podium',
    '#third-podium',
    '#chart',
    '#administration',
    '#logistics',
    '#outreach',
    '#tech',
    '#marketing'
  ];
  elements_id.forEach(entry => {
      var thing = document.querySelector(entry)
      observer.observe(document.querySelector(entry));
  });

  observer_prize_2.observe(document.querySelector('#second-place'));
  observer_prize_1.observe(document.querySelector('#first-place'));
  observer_prize_3.observe(document.querySelector('#third-place'));

  // Scroll Nav
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
    }
    else {
      navBar.classList.remove("pa-fixed-header");
      
      // Change the color of links back to default
      for (let i = 0; i < links.length; i++) {
          const element = links[i];
          element.classList.remove('text-black');
      }
    }
  }

  // Timer
  // SRC: W3Schools https://www.w3schools.com/howto/howto_js_countdown.asp
  // Set the date we're counting down to
  const events = {
    "Opening Ceremony": 
      {
        "start": "Apr 15, 2023 9:30:00",
        "end": "Apr 15, 2023 10:00:00",
        "tooltip": "Apr 15, 9:30am" 
      },
    "Lunch":
      {
        "start": "Apr 15, 2023 12:00:00",
        "end": "Apr 15, 2023 13:00:00",
        "tooltip": "Apr 15, 12pm"
      },
      "Web Dev Workshop":
      {
        "start": "Apr 15, 2023 13:00:00",
        "end": "Apr 15, 2023 14:00:00",
        "tooltip": "Apr 15, 1pm"
      },
    "Python Workshop":
      {
        "start": "Apr 15, 2023 14:00:00",
        "end": "Apr 15, 2023 15:00:00",
        "tooltip": "Apr 15, 2pm"
      },
    "Ping Pong Tournament":
      {
        "start": "Apr 15, 2023 16:00:00",
        "end": "Apr 15, 2023 17:00:00",
        "tooltip": "Apr 15, 4pm"
      },
    // "Kahoot":
    //   {
    //     "start": "Apr 15, 2023 17:00:00",
    //     "end": "Apr 15, 2023 18:00:00",
    //     "tooltip": "Apr 15, 5pm"
    //   },
    // "Coffee & Bagels": 
    //   {
    //     "start": "Apr 16, 2023 9:00:00",
    //     "end": "Apr 16, 2023 10:00:00",
    //     "tooltip": "Apr 16, 9am" 
    //   },
    // "Lunch (Sunday)": 
    //   {
    //     "start": "Apr 16, 2023 12:00:00",
    //     "end": "Apr 16, 2023 13:00:00",
    //     "tooltip": "Apr 16, 12pm"
    //   },
    "Hacking Ends":
      {
        "start": "Apr 16, 2023 14:00:00",
        "end": "Apr 16, 2023 14:00:00",
        "tooltip": "Apr 16, 2pm"
      },
    "Project Presentations":
      {
        "start": "Apr 16, 2023 15:00:00",
        "end": "Apr 16, 2023 17:00:00",
        "tooltip": "Apr 16, 3pm"
      },
    "Awards Ceremony" :
      {
        "start": "Apr 16, 2023 17:30:00",
        "end": "Apr 16, 2023 18:00:00",
        "tooltip": "Apr 16, 5:30pm"
      },
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
    if (testDateStart < now && now > testDateEnd) {
      countDownDate = new Date("Apr 16, 2023 18:00:00").getTime();
      var distance = now - countDownDate;
    }

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (testDateStart < now && now > testDateEnd) {
      document.getElementById("timer").innerHTML = days + "d " + "ago";
    }
    else if (testDateStart < now && now < testDateEnd) {
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
});

// page is fully loaded, including all frames, objects and images
window.addEventListener("load", function() {
    
});

// General functions
// Checkbox Local Storage
var i;
var checkboxes = document.querySelectorAll('#signup-checklist input[type=checkbox]');
var verify = true;
function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
}
window.onload = function() {
    load();
    uncheck('menu-btn');
};
function load() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
}
function check(id) {
    document.getElementById(id).checked = true;
}
function uncheck(id) {
    document.getElementById(id).checked = false;
}
function notification(id) {
    if (localStorage.getItem(checkboxes[id].value) != true) { verify = false; }
    if (verify) { document.getElementById('notification').style.visibility = visible; }
}

// Disable Scroll (temporarily)
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

var openClick = false;
var openModal = false;
var currentModal;

function closeModal(id) {
	document.getElementById(id).style.display = "none";
  document.getElementById("modal-overlay").style.display = "none";
  enableScroll();
  openModal = false;
}

function showModal(id) {
	document.getElementById(id).style.display = "block";
  document.getElementById("modal-overlay").style.display = "block";
  document.getElementById("modal-overlay").style.opacity = 1;
  document.getElementById("modal-overlay").classList.add("modal-animation");
  disableScroll();
  openClick = true;
  openModal = true;
  currentModal = id;
}

// Check if user clicks outside of modal
document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (!openClick && openModal == true) {
      if (event.target.matches(".button-close-modal") || !event.target.closest(".modal")) {
        closeModal(currentModal);
      }
    }
    openClick = false;
  },
  false
); 

var openNavClick = false;
var nav_is_open = false;
function CheckNavOpen() {
  if (document.getElementById('menu-btn').checked == true) {
    nav_is_open = true;
    openNavClick = true;
  }
}
// Check if user clicks outside of navbar menu
document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal
    if (!openNavClick && nav_is_open == true) {
      if (event.target.matches(".menu-btn") || !event.target.closest(".nav-container")) {
        uncheck('menu-btn');
        nav_is_open = false;
      }
    }
    openNavClick = false;
  },
  false
);

var splide = new Splide( '.splide', {
  type   : 'loop',
  focus  : 'center',
  autoplay: true,
  lazyLoad: true,
  keyboard: true,
  isNavigation: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  speed: 1000,
  interval: 5000,
} );

splide.mount();

var options = {
  series: [{
    name: 'Idea',
    data: [13, 8, 12, 11, 14, 11, 13]
  }, {
    name: 'Implementation',
    data: [9, 9, 10, 10, 10, 15, 9]
  }, {
    name: 'Presentation',
    data: [9, 12, 7, 13, 12, 12, 11]
  }],
  // {
  //   name: 'Overall',
  //   data: [10, 9, 9, 7, 11],
  // }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    background: '#0d1117'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: 'Spring 2023 Team Scores',
    style: {
      color: '#fff'
    }
  },
  xaxis: {
    categories: ['Rao Dynasty', 'The Computors', 'Helping Hand 4', 'Good Team Name #462', 'ClevelandThisIsForYou', 'ToxicBytes', 'Blitz'],
    labels: {
      formatter: function (val) {
        return val + ""
      },
      style: {
        colors: '#fff'
      }
    },
  },
  yaxis: {
    labels: {
        style: {
          colors: '#fff'
        }
    },
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + ""
      }
    },
    theme: 'dark'
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
    labels: {
      colors: '#fff',
  },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();