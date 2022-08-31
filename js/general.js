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
    setAttributes(isaac, {"href": "mailto:ihwang125" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    isaac.innerHTML = "ihwang125" + "@" + "gmail.com";

    var jonathan = document.getElementById("email-replace-jonathan");
    setAttributes(jonathan, {"href": "mailto:jonathantessmann" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    jonathan.innerHTML = "jonathantessmann" + "@" + "gmail.com";

    var vijay = document.getElementById("email-replace-vijay");
    setAttributes(vijay, {"href": "mailto:vijaykethanaboyina" + "@" + "gmail.com?subject=Gilroy Hacks", "target": "_blank"});
    vijay.innerHTML = "vijaykethanaboyina" + "@" + "gmail.com";

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

    // Adding the class animations to these elements
    let elements_id = ['#description-heading', '#event-main-box', '#timeline', '#signup-title', '#steps-card', '#sponsor-title', '#sponsor-container', '#map-article', '#workshops-description', '#second-podium', '#first-podium', '#third-podium', '#chart', '#prize-box', '#administration', '#logistics', '#outreach', '#tech', '#marketing'];
    elements_id.forEach(entry => {
        var thing = document.querySelector(entry)
        observer.observe(document.querySelector(entry));
    });

    observer_prize_2.observe(document.querySelector('#second-place'));
    observer_prize_1.observe(document.querySelector('#first-place'));
    observer_prize_3.observe(document.querySelector('#third-place'));

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

    // Timer
    // SRC: W3Schools https://www.w3schools.com/howto/howto_js_countdown.asp
    // Set the date we're counting down to
    var countDownDate = new Date("Aug 14, 2022 14:00:00").getTime();

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
        document.getElementById("timer").innerHTML = "TBA";
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