const carouselSlide = document.querySelector("#content_art" + n);
const carouselImages = document.querySelectorAll(".s" + n);

// Buttons
const prev = document.querySelector(".p" + n);
const next = document.querySelector(".n" + n);

//Counter
let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transition = "transform 0.3s ease-in-out";
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

window.onresize = () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};

//ButtonListeners

next.addEventListener('click', function () {
    if (counter < carouselImages.length - 1) {
        carouselSlide.style.transition = "transform 0.3s ease-in-out";
        counter++;
        alert(counter);
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

prev.addEventListener('click', function () {
    if (counter > 0) {
        carouselSlide.style.transition = "transform 0.3s ease-in-out";
        counter--;
        alert(counter);
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
