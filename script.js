// const heart = document.getElementById('heart');
const card = document.getElementById('card');
const music = document.getElementById('music');

let isOpen = false;

card.addEventListener('mouseenter', () => {
    if (!isOpen) {
        card.classList.add('open');
        music.play();
        isOpen = true;
    }
});

card.addEventListener('mouseleave', () => {
    if (isOpen) {
        card.classList.remove('open');
        music.pause();
        music.currentTime = 0; // Reset music to start
        isOpen = false;
    }
});