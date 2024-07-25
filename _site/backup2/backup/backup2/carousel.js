var carousel = document.querySelector('.video-carousel');
var speed = 1; // Adjust this value to change the speed of the scroll

// This function scrolls the carousel
function scrollCarousel() {
    carousel.scrollLeft += speed;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
    }
}

// Start the scroll
var scroll = setInterval(scrollCarousel, 20);

// Stop the scroll on hover
carousel.addEventListener('mouseover', function() {
    clearInterval(scroll);
});

// Start the scroll again on mouseout
carousel.addEventListener('mouseout', function() {
    scroll = setInterval(scrollCarousel, 20);
});
