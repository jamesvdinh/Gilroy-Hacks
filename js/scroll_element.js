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
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-animation-prize-2');
      }
    });
  });

  const observer_prize_1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-animation-prize-1');
      }
    });
  });
  
  const observer_prize_3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-animation-prize-3');
      }
    });
  });

  observer.observe(document.querySelector('#description-heading'));
  observer.observe(document.querySelector('#event-main-box'));
  observer.observe(document.querySelector('#timeline'));
  observer.observe(document.querySelector('#signup-article'));
  observer.observe(document.querySelector('#map-article'));
  observer.observe(document.querySelector('#rules-description'));
  observer.observe(document.querySelector('#guidelines'));
  observer.observe(document.querySelector('#code-of-conduct'));
  observer.observe(document.querySelector('#photo-release-container'));
  observer.observe(document.querySelector('#second-column'));
  observer.observe(document.querySelector('#first-column'));
  observer.observe(document.querySelector('#third-column'));
  observer_prize_2.observe(document.querySelector('#second-place'));
  observer_prize_1.observe(document.querySelector('#first-place'));
  observer_prize_3.observe(document.querySelector('#third-place'));
  observer.observe(document.querySelector('#administration'));
  observer.observe(document.querySelector('#logistics'));
  observer.observe(document.querySelector('#outreach'));
  observer.observe(document.querySelector('#tech'));
  observer.observe(document.querySelector('#marketing'));