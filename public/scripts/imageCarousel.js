var slides = document.querySelectorAll('#slides .slide'),
    currentSlide = 0,  
    slideInterval = setInterval(nextSlide,3000),   
    next = document.getElementById('next'),
    previous = document.getElementById('previous'),
    pauseButton = document.getElementById('pause'),
    controls = document.querySelectorAll('.controls');

for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

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
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};
