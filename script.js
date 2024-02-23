const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
});

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link a");

function handleScroll() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      let targetNavLink = document.querySelector(
        "header nav .nav-link a[href*=" + id + "]"
      );
      if (targetNavLink) {
        targetNavLink.classList.add("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", handleScroll);
window.onscroll = handleScroll;


const cards = document.querySelectorAll(".project-section .card");
function showVisibleCards() {
  cards.forEach((card) => {
    if (isView(card)) {
      card.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", showVisibleCards);
document.addEventListener("scroll", showVisibleCards);



function isView(e) {
  const rect = e.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}


const ham = document.querySelector("nav .ham");
const sideBar = document.querySelector("header .side-bar");
const cross = document.querySelector("header .side-bar .cross");

ham.addEventListener("click", () => {
  sideBar.style.display = "block";
  sideBar.style.display = "block";
  setTimeout(() => {
    sideBar.style.right = "0";
  }, 0);
});

cross.addEventListener("click", () => {
  sideBar.style.right = "-500px";
  setTimeout(() => {
    sideBar.style.display = "none";
  }, 1000);
});

document.addEventListener("click", (e) => {
  if (!sideBar.contains(e.target) && !ham.contains(e.target)) {
    sideBar.style.right = "-500px";
    setTimeout(() => {
      sideBar.style.display = "none";
    }, 1000);
  }
});

const intro = document.querySelector(".intro ");

document.addEventListener("DOMContentLoaded", function () {
  intro.classList.add("visible-intro");
});

const sideLinks = document.querySelectorAll("header .side-bar .side-link a");

sideLinks.forEach((x) => {
  x.addEventListener("click", () => {
    sideBar.style.right = "-500px";
    setTimeout(() => {
      sideBar.style.display = "none";
    }, 1000);
  });
});

const contactLeft = document.querySelector(".contact .contact-left");
function showContactLeft() {
  if (isView(contactLeft)) {
    contactLeft.classList.add("visible-left");
  }
}
document.addEventListener("DOMContentLoaded", showContactLeft);
document.addEventListener("scroll", showContactLeft);

const contactRight = document.querySelector(".contact .contact-right");
function showContactRight() {
  if (isView(contactRight)) {
    contactRight.classList.add("visible-right");
  }
}

document.addEventListener("DOMContentLoaded", showContactRight);
document.addEventListener("scroll", showContactRight);

const projectTitle = document.querySelector(".project-section .project-title");
function showProjectTitle() {
  if (isView(projectTitle)) {
    projectTitle.classList.add("show-title");
  }
}

document.addEventListener("DOMContentLoaded", showProjectTitle);
document.addEventListener("scroll", showProjectTitle);


const skillTitle = document.querySelector(".skill .skill-title");
function showSkillTitle() {
  if (isView(skillTitle)) {
    skillTitle.classList.add("show-skill");
  }
}

document.addEventListener("DOMContentLoaded", showSkillTitle);
document.addEventListener("scroll", showSkillTitle);


const about = document.querySelector(".about .about-title");

function showAboutTitle() {
  if (isView(about)) {
    about.classList.add("visible-about");
  }
}

document.addEventListener("DOMContentLoaded", showAboutTitle);
document.addEventListener("scroll", showAboutTitle);
