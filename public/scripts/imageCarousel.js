//current index of image in slides
let currentSlide = 0;
//timer for 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

//const variables that contains references to nodes and nodelists
const slides = document.querySelectorAll('#slides .slide'),
      next = document.getElementById('next'),
      previous = document.getElementById('previous'),
      controls = document.querySelectorAll('.controls');

//Function that increments the current slide -> displays new image
function nextSlide() {
    goToSlide(currentSlide + 1);
}

//decrements current slide
function previousSlide() {
    goToSlide(currentSlide - 1);
}

//Takes in a slide index and changes the image displayed
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

//Whenever next button is clicked, the next slide function is called,
//and the intercal is reset
next.onclick = function () {
    nextSlide();
    // Restart interval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
};

//Same as above, just that the previousSlide function is called
previous.onclick = function () {
    previousSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
};
