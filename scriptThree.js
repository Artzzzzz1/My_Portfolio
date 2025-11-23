// Array ko
const projectImages = [
    'images/ProjectThree/Social Media Post.jpg',
    'images/ProjectThree/Landing Page Banner.jpg',
    'images/ProjectThree/NewsLetter Banner.png',
    'images/ProjectThree/Banner Ad.jpg'
];

// Current image index
let currentImageIndex = 0;


function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= projectImages.length) {
        currentImageIndex = 0;
    }
    
    if (currentImageIndex < 0) {
        currentImageIndex = projectImages.length - 1;
    }
    
    
    const imageElement = document.getElementById('projectImage');
    imageElement.src = projectImages[currentImageIndex];
}

// ay hirap neto
function openFullscreen() {
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.id = 'fullscreenOverlay';
    fullscreenOverlay.innerHTML = `
        <div class="fullscreen-content">
            <button class="fullscreen-close" onclick="closeFullscreen()">&times;</button>
            <button class="fullscreen-btn fullscreen-prev" onclick="changeFullscreenImage(-1)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>
            <img id="fullscreenImage" src="${projectImages[currentImageIndex]}" alt="Fullscreen Image">
            <button class="fullscreen-btn fullscreen-next" onclick="changeFullscreenImage(1)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
        </div>
    `;
    document.body.appendChild(fullscreenOverlay);
}


function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    if (overlay) {
        overlay.remove();
    }
}


function changeFullscreenImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= projectImages.length) {
        currentImageIndex = 0;
    }
    
    if (currentImageIndex < 0) {
        currentImageIndex = projectImages.length - 1;
    }
    
    const fullscreenImage = document.getElementById('fullscreenImage');
    const carouselImage = document.getElementById('projectImage');
    
    fullscreenImage.src = projectImages[currentImageIndex];
    carouselImage.src = projectImages[currentImageIndex];
}


document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('projectImage');
    imageElement.style.cursor = 'pointer';
    imageElement.addEventListener('click', openFullscreen);
});

document.addEventListener('keydown', function(event) {
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    
    if (fullscreenOverlay) {
        if (event.key === 'ArrowLeft') {
            changeFullscreenImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeFullscreenImage(1);
        } else if (event.key === 'Escape') {
            closeFullscreen();
        }
    } else {
        // If fullscreen is not open
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});