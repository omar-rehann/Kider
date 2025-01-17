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
})