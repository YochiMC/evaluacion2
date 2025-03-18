const sliderTrack = document.querySelector('.slider-track');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderDots = document.querySelector('.slider-dots');
let slideIndex = 0;
let intervalId;

// Crear botones circulares
for (let i = 0; i < sliderTrack.children.length; i++) {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
}

// Función para ir a una imagen específica
function goToSlide(index) {
    slideIndex = index;
    updateSlider();
    resetInterval();
}

// Función para actualizar el slider
function updateSlider() {
    sliderTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateDots();
}

// Función para actualizar los botones circulares
function updateDots() {
    const dots = document.querySelectorAll('.slider-dots button');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Función para iniciar la reproducción automática
function startInterval() {
    intervalId = setInterval(() => {
        slideIndex = (slideIndex + 1) % sliderTrack.children.length;
        updateSlider();
    }, 6000); // Cambia de imagen cada 3 segundos
}

// Función para reiniciar la reproducción automática
function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

// Event listeners para los botones de navegación
sliderPrev.addEventListener('click', () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    updateSlider();
    resetInterval();
});

sliderNext.addEventListener('click', () => {
    slideIndex = Math.min(slideIndex + 1, sliderTrack.children.length - 1);
    updateSlider();
    resetInterval();
});

// Inicialización
updateSlider();
startInterval();