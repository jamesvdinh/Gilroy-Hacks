// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)
"use strict";

// document is loaded and DOM is ready
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a.email-replace').forEach(elem => {
        elem.href = "mailto:jamesdinh77" + "@" + "protonmail.com";
        elem.target = "_blank";
    });

    // Checkbox Local Storage
    var i;
    var checkboxes = document.querySelectorAll('#signup-container input[type=checkbox]');
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

    // function btnToggle() {
    //     if (document.getElementById('#check').checked) {
    //         document.getElementById('#check').checked = false;
    //     }
    //     else {
    //         document.getElementById('#check').checked = true;
    //     }
    // }
    // document.getElementById('#check').addEventListener('click', function (event) {
    //     if (!document.getElementById('check').checked) {
    //         event.stopPropagation();
    //     }
    // });
    // window.onclick = function(event) {
    //     if (!event.target.matches('check')) {
    //         if (document.getElementById('check').checked) {
    //             document.getElementById('check').checked = false;
    //         }
    //     }
    // }

    // document.getElementById("navList").addEventListener('click', function (event) {
    //     if (document.getElementById('check').checked) {
    //         event.stopPropagation();
    //     }});

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
    let elements_id = ['#description-heading', '#event-main-box', '#timeline', '#signup-title', '#steps-card', '#sponsor-title', '#sponsor-container', '#map-article', '#rules-description', '#guidelines', '#code-of-conduct', '#photo-release-container', '#second-podium', '#first-podium', '#third-podium', '#prize-box', '#administration', '#logistics', '#outreach', '#tech', '#marketing'];
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
});

// page is fully loaded, including all frames, objects and images
window.addEventListener("load", function() {
    
});

// General functions
