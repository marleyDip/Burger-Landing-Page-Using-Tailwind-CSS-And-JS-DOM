/* Toggle Button */
const menuIcon = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

const closeIcon = document.getElementById("nav-close");

const navLink = document.querySelectorAll(".nav-link");

menuIcon.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});
/* Toggle Button */

/* Tabs & Items Select */
const tabs = document.querySelectorAll(".tabs_wrap ul li");

const all = document.querySelectorAll(".item__wrap");

const foods = document.querySelectorAll(".food");

const snacks = document.querySelectorAll(".snack");

const beverages = document.querySelectorAll(".beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    // particularly item show
    const tabVal = tab.getAttribute("data-tabs");

    //console.log(tabVal);

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabVal == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});
/* Tabs & Items Select */

/* swiper */
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
/* swiper */

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();
/* Year */

/* Scroll Up */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");

    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");

    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);
/* Scroll Up */

/* Change Background Header */
const scrollHeader = () => {
  const scrollUpBtn = document.getElementById("header");

  if (this.scrollY >= 50) {
    scrollUpBtn.classList.add("border-b", "border-secondaryColor");
  } else {
    scrollUpBtn.classList.remove("border-b", "border-secondaryColor");
  }
};

window.addEventListener("scroll", scrollHeader);
/* Change Background Header */

/* Dark light Theme */
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
/* Dark light Theme */

/* scroll Active link */
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};
window.addEventListener("scroll", activeLink);
/* scroll Active link */
