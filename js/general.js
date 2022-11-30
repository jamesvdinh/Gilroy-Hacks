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

    // Adding the class animations to these elements
    let elements_id = ['#description-heading', '#event-main-box', '#timeline', '#signup-title', '#steps-card', '#sponsor-title', '#sponsor-container', '#workshops-description', '#second-podium', '#first-podium', '#third-podium', '#chart', '#prize-box', '#administration', '#logistics', '#outreach', '#tech', '#marketing'];
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

  jQuery(document).ready(function($){
    var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var transitionsSupported = ( $('.csstransitions').length > 0 );
    //if browser does not support transitions - use a different event to trigger them
    if( !transitionsSupported ) transitionEnd = 'noTransition';
    
    //should add a loding while the events are organized 
  
    function SchedulePlan( element ) {
      this.element = element;
      this.timeline = this.element.find('.timeline');
      this.timelineItems = this.timeline.find('li');
      this.timelineItemsNumber = this.timelineItems.length;
      this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
      //need to store delta (in our case half hour) timestamp
      this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());
  
      this.eventsWrapper = this.element.find('.events');
      this.eventsGroup = this.eventsWrapper.find('.events-group');
      this.singleEvents = this.eventsGroup.find('.single-event');
      this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
  
      this.modal = this.element.find('.event-modal');
      this.modalHeader = this.modal.find('.header');
      this.modalHeaderBg = this.modal.find('.header-bg');
      this.modalBody = this.modal.find('.body'); 
      this.modalBodyBg = this.modal.find('.body-bg'); 
      this.modalMaxWidth = 800;
      this.modalMaxHeight = 480;
  
      this.animating = false;
  
      this.initSchedule();
    }
  
    SchedulePlan.prototype.initSchedule = function() {
      this.scheduleReset();
      this.initEvents();
    };
  
    SchedulePlan.prototype.scheduleReset = function() {
      var mq = this.mq();
      if( mq == 'desktop' && !this.element.hasClass('js-full') ) {
        //in this case you are on a desktop version (first load or resize from mobile)
        this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
        this.element.addClass('js-full');
        this.placeEvents();
        this.element.hasClass('modal-is-open') && this.checkEventModal();
      } else if(  mq == 'mobile' && this.element.hasClass('js-full') ) {
        //in this case you are on a mobile version (first load or resize from desktop)
        this.element.removeClass('js-full loading');
        this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
        this.eventsWrapper.children('.grid-line').remove();
        this.element.hasClass('modal-is-open') && this.checkEventModal();
      } else if( mq == 'desktop' && this.element.hasClass('modal-is-open')){
        //on a mobile version with modal open - need to resize/move modal window
        this.checkEventModal('desktop');
        this.element.removeClass('loading');
      } else {
        this.element.removeClass('loading');
      }
    };
  
    SchedulePlan.prototype.initEvents = function() {
      var self = this;
  
      this.singleEvents.each(function(){
        //create the .event-date element for each event
        var durationLabel = '<span class="event-date">'+$(this).data('start')+' - '+$(this).data('end')+'</span>';
        $(this).children('a').prepend($(durationLabel));
  
        //detect click on the event and open the modal
        $(this).on('click', 'a', function(event){
          event.preventDefault();
          if( !self.animating ) self.openModal($(this));
        });
      });
  
      //close modal window
      this.modal.on('click', '.close', function(event){
        event.preventDefault();
        if( !self.animating ) self.closeModal(self.eventsGroup.find('.selected-event'));
      });
      this.element.on('click', '.cover-layer', function(event){
        if( !self.animating && self.element.hasClass('modal-is-open') ) self.closeModal(self.eventsGroup.find('.selected-event'));
      });
    };
  
    SchedulePlan.prototype.placeEvents = function() {
      var self = this;
      this.singleEvents.each(function(){
        //place each event in the grid -> need to set top position and height
        var start = getScheduleTimestamp($(this).attr('data-start')),
          duration = getScheduleTimestamp($(this).attr('data-end')) - start;
  
        var eventTop = self.eventSlotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
          eventHeight = self.eventSlotHeight*duration/self.timelineUnitDuration;
        
        $(this).css({
          top: (eventTop -1) +'px',
          height: (eventHeight+1)+'px'
        });
      });
  
      this.element.removeClass('loading');
    };
  
    SchedulePlan.prototype.openModal = function(event) {
      var self = this;
      var mq = self.mq();
      this.animating = true;
  
      //update event name and time
      this.modalHeader.find('.event-name').text(event.find('.event-name').text());
      this.modalHeader.find('.event-date').text(event.find('.event-date').text());
      this.modal.attr('data-event', event.parent().attr('data-event'));
  
      //update event content
      this.modalBody.find('.event-info').load(event.parent().attr('data-content')+'.html .event-info > *', function(data){
        //once the event content has been loaded
        self.element.addClass('content-loaded');
      });
  
      this.element.addClass('modal-is-open');
  
      setTimeout(function(){
        //fixes a flash when an event is selected - desktop version only
        event.parent('li').addClass('selected-event');
      }, 10);
  
      if( mq == 'mobile' ) {
        self.modal.one(transitionEnd, function(){
          self.modal.off(transitionEnd);
          self.animating = false;
        });
      } else {
        var eventTop = event.offset().top - $(window).scrollTop(),
          eventLeft = event.offset().left,
          eventHeight = event.innerHeight(),
          eventWidth = event.innerWidth();
  
        var windowWidth = $(window).width(),
          windowHeight = $(window).height();
  
        var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
          modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;
  
        var modalTranslateX = parseInt((windowWidth - modalWidth)/2 - eventLeft),
          modalTranslateY = parseInt((windowHeight - modalHeight)/2 - eventTop);
        
        var HeaderBgScaleY = modalHeight/eventHeight,
          BodyBgScaleX = (modalWidth - eventWidth);
  
        //change modal height/width and translate it
        self.modal.css({
          top: eventTop+'px',
          left: eventLeft+'px',
          height: modalHeight+'px',
          width: modalWidth+'px',
        });
        transformElement(self.modal, 'translateY('+modalTranslateY+'px) translateX('+modalTranslateX+'px)');
  
        //set modalHeader width
        self.modalHeader.css({
          width: eventWidth+'px',
        });
        //set modalBody left margin
        self.modalBody.css({
          marginLeft: eventWidth+'px',
        });
  
        //change modalBodyBg height/width ans scale it
        self.modalBodyBg.css({
          height: eventHeight+'px',
          width: '1px',
        });
        transformElement(self.modalBodyBg, 'scaleY('+HeaderBgScaleY+') scaleX('+BodyBgScaleX+')');
  
        //change modal modalHeaderBg height/width and scale it
        self.modalHeaderBg.css({
          height: eventHeight+'px',
          width: eventWidth+'px',
        });
        transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
        
        self.modalHeaderBg.one(transitionEnd, function(){
          //wait for the  end of the modalHeaderBg transformation and show the modal content
          self.modalHeaderBg.off(transitionEnd);
          self.animating = false;
          self.element.addClass('animation-completed');
        });
      }
  
      //if browser do not support transitions -> no need to wait for the end of it
      if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
    };
  
    SchedulePlan.prototype.closeModal = function(event) {
      var self = this;
      var mq = self.mq();
  
      this.animating = true;
  
      if( mq == 'mobile' ) {
        this.element.removeClass('modal-is-open');
        this.modal.one(transitionEnd, function(){
          self.modal.off(transitionEnd);
          self.animating = false;
          self.element.removeClass('content-loaded');
          event.removeClass('selected-event');
        });
      } else {
        var eventTop = event.offset().top - $(window).scrollTop(),
          eventLeft = event.offset().left,
          eventHeight = event.innerHeight(),
          eventWidth = event.innerWidth();
  
        var modalTop = Number(self.modal.css('top').replace('px', '')),
          modalLeft = Number(self.modal.css('left').replace('px', ''));
  
        var modalTranslateX = eventLeft - modalLeft,
          modalTranslateY = eventTop - modalTop;
  
        self.element.removeClass('animation-completed modal-is-open');
  
        //change modal width/height and translate it
        this.modal.css({
          width: eventWidth+'px',
          height: eventHeight+'px'
        });
        transformElement(self.modal, 'translateX('+modalTranslateX+'px) translateY('+modalTranslateY+'px)');
        
        //scale down modalBodyBg element
        transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
        //scale down modalHeaderBg element
        transformElement(self.modalHeaderBg, 'scaleY(1)');
  
        this.modalHeaderBg.one(transitionEnd, function(){
          //wait for the  end of the modalHeaderBg transformation and reset modal style
          self.modalHeaderBg.off(transitionEnd);
          self.modal.addClass('no-transition');
          setTimeout(function(){
            self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
          }, 10);
          setTimeout(function(){
            self.modal.removeClass('no-transition');
          }, 20);
  
          self.animating = false;
          self.element.removeClass('content-loaded');
          event.removeClass('selected-event');
        });
      }
  
      //browser do not support transitions -> no need to wait for the end of it
      if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
    }
  
    SchedulePlan.prototype.mq = function(){
      //get MQ value ('desktop' or 'mobile') 
      var self = this;
      return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
    };
  
    SchedulePlan.prototype.checkEventModal = function(device) {
      this.animating = true;
      var self = this;
      var mq = this.mq();
  
      if( mq == 'mobile' ) {
        //reset modal style on mobile
        self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
        self.modal.removeClass('no-transition');	
        self.animating = false;	
      } else if( mq == 'desktop' && self.element.hasClass('modal-is-open') ) {
        self.modal.addClass('no-transition');
        self.element.addClass('animation-completed');
        var event = self.eventsGroup.find('.selected-event');
  
        var eventTop = event.offset().top - $(window).scrollTop(),
          eventLeft = event.offset().left,
          eventHeight = event.innerHeight(),
          eventWidth = event.innerWidth();
  
        var windowWidth = $(window).width(),
          windowHeight = $(window).height();
  
        var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
          modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;
  
        var HeaderBgScaleY = modalHeight/eventHeight,
          BodyBgScaleX = (modalWidth - eventWidth);
  
        setTimeout(function(){
          self.modal.css({
            width: modalWidth+'px',
            height: modalHeight+'px',
            top: (windowHeight/2 - modalHeight/2)+'px',
            left: (windowWidth/2 - modalWidth/2)+'px',
          });
          transformElement(self.modal, 'translateY(0) translateX(0)');
          //change modal modalBodyBg height/width
          self.modalBodyBg.css({
            height: modalHeight+'px',
            width: '1px',
          });
          transformElement(self.modalBodyBg, 'scaleX('+BodyBgScaleX+')');
          //set modalHeader width
          self.modalHeader.css({
            width: eventWidth+'px',
          });
          //set modalBody left margin
          self.modalBody.css({
            marginLeft: eventWidth+'px',
          });
          //change modal modalHeaderBg height/width and scale it
          self.modalHeaderBg.css({
            height: eventHeight+'px',
            width: eventWidth+'px',
          });
          transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
        }, 10);
  
        setTimeout(function(){
          self.modal.removeClass('no-transition');
          self.animating = false;	
        }, 20);
      }
    };
  
    var schedules = $('.cd-schedule');
    var objSchedulesPlan = [],
      windowResize = false;
    
    if( schedules.length > 0 ) {
      schedules.each(function(){
        //create SchedulePlan objects
        objSchedulesPlan.push(new SchedulePlan($(this)));
      });
    }
  
    $(window).on('resize', function(){
      if( !windowResize ) {
        windowResize = true;
        (!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
      }
    });
  
    $(window).keyup(function(event) {
      if (event.keyCode == 27) {
        objSchedulesPlan.forEach(function(element){
          element.closeModal(element.eventsGroup.find('.selected-event'));
        });
      }
    });
  
    function checkResize(){
      objSchedulesPlan.forEach(function(element){
        element.scheduleReset();
      });
      windowResize = false;
    }
  
    function getScheduleTimestamp(time) {
      //accepts hh:mm format - convert hh:mm to timestamp
      time = time.replace(/ /g,'');
      var timeArray = time.split(':');
      var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
      return timeStamp;
    }
  
    function transformElement(element, value) {
      element.css({
          '-moz-transform': value,
          '-webkit-transform': value,
        '-ms-transform': value,
        '-o-transform': value,
        'transform': value
      });
    }
  });