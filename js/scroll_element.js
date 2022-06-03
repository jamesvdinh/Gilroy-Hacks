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
  
  observer.observe(document.querySelector('#description-heading'));
  observer.observe(document.querySelector('#event-main-box'));
  observer.observe(document.querySelector('#timeline'));
  observer.observe(document.querySelector('#signup-article'));
  observer.observe(document.querySelector('#rules-description'));
  observer.observe(document.querySelector('#guidelines'));
  observer.observe(document.querySelector('#code-of-conduct'));
  observer.observe(document.querySelector('#photo-release-container'));
  observer.observe(document.querySelector('#prizes-container'));
  observer.observe(document.querySelector('#team-container'));