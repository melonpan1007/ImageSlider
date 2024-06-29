// Select all images with the class 'slide' within the .slides container
const slides = document.querySelectorAll(".slide");

// Initialize slide index to keep track of the current slide
let slideIndex = 0;

// Variable to store the interval ID for the automatic slideshow
let intervalId = null;

// Wait for the DOM to fully load before running the initializeSlider function
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    // Check if there are any slides
    if (slides.length > 0) {
        // Display the first slide initially
        slides[slideIndex].classList.add("displaySlide");
        // Set an interval to automatically move to the next slide every 5 seconds
        intervalId = setInterval(nextSlide, 5000);
    }
}

// Function to show a specific slide by index
function showSlide(index) {
    // If the index exceeds the number of slides, reset to the first slide
    if (index >= slides.length) {
        slideIndex = 0;
    } 
    // If the index is less than 0, set to the last slide
    else if (index < 0) {
        slideIndex = slides.length - 1;
    } 
    // Otherwise, use the given index
    else {
        slideIndex = index;
    }

    // Remove the 'displaySlide' class from all slides to hide them
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Add the 'displaySlide' class to the current slide to display it
    slides[slideIndex].classList.add("displaySlide");
}

// Function to show the previous slide
function prevSlide() {
    // Clear the existing interval to prevent conflicts
    clearInterval(intervalId);
    // Decrement the slide index to move to the previous slide
    showSlide(slideIndex - 1);
    // Restart the interval for the automatic slideshow
    intervalId = setInterval(nextSlide, 5000);
}

// Function to show the next slide
function nextSlide() {
    // Clear the existing interval to prevent conflicts
    clearInterval(intervalId);
    // Increment the slide index to move to the next slide
    showSlide(slideIndex + 1);
    // Restart the interval for the automatic slideshow
    intervalId = setInterval(nextSlide, 5000);
}