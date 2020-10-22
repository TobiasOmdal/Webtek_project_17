let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

const slides = document.querySelectorAll('#slides .slide'),
    next = document.getElementById('next'),
    previous = document.getElementById('previous'),
    controls = document.querySelectorAll('.controls');

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function () {
    nextSlide();
    // Restart interval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
};

previous.onclick = function () {
    previousSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
};
