const sliderContent = document.querySelector('.slider-content');
const prevButton = document.querySelector('.slider-controls .prev');
const nextButton = document.querySelector('.slider-controls .next');
const dots = document.querySelectorAll('.slider-selection .selection');

let currentIndex = 0;

function showSlide(index) {
    sliderContent.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 6000); 