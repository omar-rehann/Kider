let menu = document.querySelector(".toggle");
let links = document.querySelector(".link");
let linkss = document.querySelectorAll("a")
let otherlink = document.querySelector(".link_two");
let group = document.querySelector(".link_two .group-links");
let section = document.querySelector(".img-continer");
let allimg = document.querySelectorAll(".img-continer img");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let timer;
let index = 0;


menu.onclick = function() {
    links.classList.toggle('active');
    if (links.classList.contains("active")) {
        menu.classList.remove("fa-bars")
        menu.classList.add("fa-x")

    } else {
        menu.classList.add("fa-bars")
        menu.classList.remove("fa-x")
    }
}
right.addEventListener("click", () => {
    index++;
    clearTimeout(timer);
    update();
});

left.addEventListener("click", () => {
    index--;
    clearTimeout(timer);
    update();
});

function update() {
    if (index >= allimg.length) {
        index = 0;
    } else if (index < 0) {
        index = allimg.length - 1;
    }
    section.style.transform = `translateX(-${index * 100}%)`;
    timer = setTimeout(() => {
        index++;
        update();
    }, 3000);
}

update();
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftButton = document.querySelector(".slider-button.left");
    const rightButton = document.querySelector(".slider-button.right");

    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    rightButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlider();
    });

    leftButton.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length;
        }
        updateSlider();
    });

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlider();
    }, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav.link a");

    links.forEach((link) => {
        link.addEventListener("click", function() {
            links.forEach((ele) => ele.classList.remove("active"));
            this.classList.add("active");
        });
    });
});