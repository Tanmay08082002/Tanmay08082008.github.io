const carouselSlide = document.querySelector('.carousel-slide');

const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn");
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size counter) + 'px)';
//Button Listeners
nextBtn.addEventListener('click', () => {
carouselSlide.style.transition = "transform 8.4s ease-in-out";
counter++;
carouselSlide.style.transform = 'translateX(' + (-size counter) + 'px)';
15
});
prevBtn.addEventListener('click', () => {
carouselSlide.style.transition = "transform 8.4s ease-in-out";
counter--
carouselSlide.style.transform = 'translateX(' + (-size counter) + 'px)';
});
carouselSlide.addEventListener('transitionend', () => {
if (carouselImages)
});