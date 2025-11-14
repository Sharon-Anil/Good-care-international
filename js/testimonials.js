// Testimonials Slider

let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const totalTestimonials = testimonialSlides.length;

function initTestimonials() {
    if (testimonialSlides.length === 0) return;
    
    // Auto-scroll testimonials
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function nextTestimonial() {
    const track = document.querySelector('.testimonials-track');
    if (!track) return;
    
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

function prevTestimonial() {
    const track = document.querySelector('.testimonials-track');
    if (!track) return;
    
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    initTestimonials();
    
    // Navigation buttons
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
    }
});

