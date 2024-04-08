let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
let content = document.querySelector(".content");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let resume = document.querySelector(".resume");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
  content.classList.toggle("night");
  about.classList.toggle("night");
  skills.classList.toggle("night");
  resume.classList.toggle("night");
});

let typingEffect = new Typed('#text', {
  strings: ["Anoop^1000", "Web Developer", "Designer", "Freelancer", "Programmer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});