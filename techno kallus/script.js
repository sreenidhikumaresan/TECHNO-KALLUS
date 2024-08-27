function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    }
    if (index < 0) {
        currentSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(++currentSlide);
}

function prevSlide() {
    showSlide(--currentSlide);
}

// Initialize the carousel
showSlide(currentSlide);
