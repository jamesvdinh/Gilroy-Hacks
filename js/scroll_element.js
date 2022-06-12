// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)

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


  // Adding the class animations to these elements
  let elements_id = ['#description-heading', '#event-main-box', '#timeline', '#signup-title', '#steps-card', '#sponsor-title', '#sponsor-container', '#map-article', '#rules-description', '#guidelines', '#code-of-conduct', '#photo-release-container', '#second-column', '#first-column', '#third-column', '#administration', '#logistics', '#outreach', '#tech', '#marketing'];
  elements_id.forEach(entry => {
    observer.observe(document.querySelector(entry));
  });

  observer_prize_2.observe(document.querySelector('#second-place'));
  observer_prize_1.observe(document.querySelector('#first-place'));
  observer_prize_3.observe(document.querySelector('#third-place'));