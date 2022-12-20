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

    var aadhavan = document.getElementById("email-replace-aadhavan");
    setAttributes(aadhavan, {"href": "mailto:aadhavan.magesh" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    aadhavan.innerHTML = "aadhavan.magesh" + "@" + "gmail.com";

    var isaac = document.getElementById("email-replace-isaac");
    setAttributes(isaac, {"href": "mailto:ihwang" + "@" + "gilroyhacks.com?subject=Gilroy Hacks", "target": "_blank"});
    isaac.innerHTML = "ihwang" + "@" + "gilroyhacks.com";

    var steven = document.getElementById("email-replace-steven");
    setAttributes(steven, {"href": "mailto:stevendinh987" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    steven.innerHTML = "stevendinh987" + "@" + "gmail.com";

    var vijay = document.getElementById("email-replace-vijay");
    setAttributes(vijay, {"href": "mailto:vijay" + "@" + "gilroyhacks.com?subject=Gilroy Hacks", "target": "_blank"});
    vijay.innerHTML = "vijay" + "@" + "gilroyhacks.com";

    var jonathan = document.getElementById("email-replace-jonathan");
    setAttributes(jonathan, {"href": "mailto:jonathantessmann" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    jonathan.innerHTML = "jonathantessmann" + "@" + "gmail.com";

    var james = document.getElementById("email-replace-james");
    setAttributes(james, {"href": "mailto:james" + "@" + "gilroyhacks.com?subject=Gilroy Hacks", "target": "_blank"});
    james.innerHTML = "james" + "@" + "gilroyhacks.com";

    var ezra = document.getElementById("email-replace-ezra");
    setAttributes(ezra, {"href": "mailto:ezrabridger27" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    ezra.innerHTML = "ezrabridger27" + "@" + "gmail.com";

    var mark = document.getElementById("email-replace-mark");
    setAttributes(mark, {"href": "mailto:markshen00" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    mark.innerHTML = "markshen00" + "@" + "gmail.com";

    var bryce = document.getElementById("email-replace-bryce");
    setAttributes(bryce, {"href": "mailto:brycemankovsky" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    bryce.innerHTML = "brycemankovsky" + "@" + "gmail.com";

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
      '#event-title',
      '#headline-recap',
      '#splash-entrance',
      '#what-GilroyHacks',
      '#why-GilroyHacks',
      '#who-GilroyHacks',
      '#slide-wrapper-main',
      '#prev',
      '#next',
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
      '#prize-box',
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

    } else {
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
      "Opening Ceremony": "Apr 15, 2023 10:00:00",
      "Lunch": "Apr 15, 2023 12:00:00",
      "Web Dev Workshop": "Apr 15, 2023 13:00:00",
      "[REDACTED] Workshop": "Apr 15, 2023 15:00:00",
      "Kahoot": "Apr 15, 2023 17:00:00",
      "Hacking Ends": "Apr 16, 2023 14:00:00",
      "Project Presentations": "Apr 16, 2023 14:30:00",
      "Awards Ceremony" : "Apr 16, 2023 16:30:00"
    }
    var countDownDate = 0;
    // Get today's date and time
    var now = new Date().getTime();

    // Test for the current event
    for (const event in events) {
      var testDate = new Date(events[event]).getTime();
      if (testDate > countDownDate && now < testDate) {
        countDownDate = testDate;
        document.getElementById("event-name").innerHTML = event;
        document.styleSheets[0].addRule('#timer:after','content: "'+ events[event] +'";');
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
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "---";
          document.getElementById("event-name").innerHTML = "Event Ended";
      }
      // Display the result in the element with id="timer"
      else if (days != 0) {
          document.getElementById("timer").innerHTML = days + "d " + hours + "h";
      }
      else if (hours != 0) {
          document.getElementById("timer").innerHTML = hours + "h " + minutes + "m";
      }
      else {
          document.getElementById("timer").innerHTML = minutes + "m";
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

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
slide(slider, sliderItems, prev, next);
function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');
    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}

var options = {
  series: [{
    name: 'Idea',
    data: [7, 9, 6, 10, 14],
  }, {
    name: 'Implementation',
    data: [11, 6, 11, 3, 9]
  }, {
    name: 'Presentation',
    data: [12, 7, 12, 11, 8]
  }, {
    name: 'Overall',
    data: [10, 6, 9, 7, 11],
  }],
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
    text: 'Team Scores - Summer 2022',
    style: {
      color: '#fff'
    }
  },
  xaxis: {
    categories: ['Team 2', 'Team 3', 'Team 4', 'Team 6', 'Team 7'],
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