let currentSlide = 0;  
const slides = document.querySelectorAll('#slides .slide'),
    slideInterval = setInterval(nextSlide,3000),   
    next = document.getElementById('next'),
    previous = document.getElementById('previous'),
    controls = document.querySelectorAll('.controls');


function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};
