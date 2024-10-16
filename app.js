// ************* set date *************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ************* close links *************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ************* fixed navbar *************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
const scrollHeight = window.scrollY;
const navHeight = navbar.getBoundingClientRect().height;
if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
} else {
    navbar.classList.remove("fixed-nav");
}
// setup back to top link
if (scrollHeight > 500) {
    topLink.classList.add("show-link");
} else {
    topLink.classList.remove("show-link");
}
});

// ************* smooth scroll *************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        //prevent default
        e.preventDefault();
        //navigate to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position,
        });
        //close
        linksContainer.style.height = 0;
    })
})

// ************* shop carousel *************
let slides = document.querySelectorAll(".slide");
let shopCarousel = document.querySelector(".shop-carousel")
let counter = 0;


// Next/previous controls
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
})

function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(slide => { 
        slide.style.transform = `translateX(-${counter *100}%)`;
    });
};

    prevBtn.style.display = "none";
    