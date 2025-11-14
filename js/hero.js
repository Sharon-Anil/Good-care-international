// Hero Slider Functionality

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

// Initialize slider
function initSlider() {
    if (slides.length === 0) return;
    
    // Show first slide
    slides[0].classList.add('active');
    if (dots.length > 0) dots[0].classList.add('active');
    
    // Auto-play slider
    slideInterval = setInterval(nextSlide, 5000);
}

// Go to next slide
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.add('active');
}

// Go to previous slide
function prevSlide() {
    slides[currentSlide].classList.remove('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.add('active');
}

// Go to specific slide
function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    if (dots.length > currentSlide) dots[currentSlide].classList.add('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    
    // Navigation buttons
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
});

