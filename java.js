// --- GALLERY SLIDESHOW LOGIC ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('show'));
    slides[currentSlideIndex].classList.add('show');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

// Automatically switch slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// --- ATTENDANCE FORM SUBMISSION ---
// --- ATTENDANCE FORM SUBMISSION ---
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering for the 2026 Conference!');
});