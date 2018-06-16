// ScrollReveal
window.sr = ScrollReveal();
sr.reveal(".stairs-container", { duration: 1800, });
sr.reveal(".btn-down", { duration: 800, delay: 2000 });
sr.reveal(".medium-card", { duration: 300 });

// typed.js
var options = {
  strings: ['<h1>Collaborative<br>Growth</h1>'],
  loop: false,
  typeSpeed: 90,
};

// Attached to display text on landing page but also a dummy span on other
// pages in order to avoid throwing an error
var t = new Typed('.display-text', options);

function scrolling(ev) {
  if (window.pageYOffset > 200) {
    document.querySelector('.btn-down').style = ("display: none;");
  }

  if (window.pageYOffset < 200) {
    document.querySelector('.btn-down').style = ("display: inherit;");
  }
}

window.onscroll = scrolling;
