// Click menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-bar").classList.toggle("open");
});

document.querySelector(".nav-list").addEventListener("click", function () {
  document.querySelector(".nav-bar").classList.remove("open");
});

// Smooth Scroll Function
function smoothScroll(target, duration) {
  const elementPosition = document.querySelector(target).getBoundingClientRect()
    .top;
  const screenYPosition = pageYOffset;
  const distance = elementPosition - screenYPosition;
  let clickTime = null;

  function scrollAnimation(currentTime) {
    if (clickTime === null) clickTime = currentTime;
    let timeElapsed = currentTime - clickTime;
    let run = easeOutCirc(timeElapsed, screenYPosition, distance, duration);
    scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  function easeOutCirc(timeElapsed, screenYPosition, distance, duration) {
    timeElapsed /= duration;
    timeElapsed--;
    return (
      distance * Math.sqrt(1 - timeElapsed * timeElapsed) + screenYPosition
    );
  }

  requestAnimationFrame(scrollAnimation);
}

document
  .querySelector("#about-link")
  .addEventListener("click", () => smoothScroll("#about", 800));

document
  .querySelector("#skills-link")
  .addEventListener("click", () => smoothScroll("#skills", 1200));

document
  .querySelector("#portfolios-link")
  .addEventListener("click", () => smoothScroll("#portfolios", 1500));

document
  .querySelector("#contact-link")
  .addEventListener("click", () => smoothScroll("#contact", 1600));

document
  .querySelector("#portfolio-btn")
  .addEventListener("click", () => smoothScroll("#portfolios", 1500));
