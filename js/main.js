

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}






var autoSliding;
var autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
var a;
var autoSlides = document.getElementsByClassName("mySlides");
var autoDots = document.getElementsByClassName("dot");
for (a = 0; a < autoSlides.length; a++) {
    autoSlides[a].style.display = "none"; 
}



for (a = 0; a < autoDots.length; a++) {
    autoDots[a].className = autoDots[a].className.replace(" active", "");
}


autoSlideIndex++;
if (autoSlideIndex > autoSlides.length) {autoSlideIndex = 1} 
autoSlides[autoSlideIndex-1].style.display = "block";
autoDots[autoSlideIndex-1].className += " active"; 
autoSliding = setTimeout(autoShowSlides, 3000); 
}


function stopAutoSlide() {
    clearTimeout(autoSliding);
}								

    



