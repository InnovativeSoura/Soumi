const heart = document.getElementById('heart');
const card = document.getElementById('card');
const music = document.getElementById('music');

let isOpen = false;

// Function to handle opening and closing the card
function toggleCard() {
    if (!isOpen) {
        card.classList.add('open');
        music.play();
        isOpen = true;
    } else {
        card.classList.remove('open');
        music.pause();
        music.currentTime = 0; // Reset music to start
        isOpen = false;
    }
}

// Check if the device supports touch events
if ('ontouchstart' in window) {
    // For touch devices, use click event
    heart.addEventListener('click', toggleCard);
} else {
    // For non-touch devices, use mouse enter and leave events
    heart.addEventListener('mouseenter', () => {
        if (!isOpen) {
            toggleCard();
        }
    });

    heart.addEventListener('mouseleave', () => {
        if (isOpen) {
            toggleCard();
        }
    });
}