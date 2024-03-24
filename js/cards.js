import cardsData from './cardsData.js';

// Function to create a card element with animation properties
function createCardElement(cardData) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'card-base', cardData.name.toLowerCase());
    cardElement.style.setProperty('--color1', cardData.color1);
    cardElement.style.setProperty('--color2', cardData.color2);
    cardElement.style.setProperty('--front', `url(${cardData.imgUrl})`);
    cardElement.style.setProperty('--overlay1', cardData.overlay1);
    cardElement.style.setProperty('--overlay2', cardData.overlay2);
    cardElement.style.setProperty('--overlay-opacity1', cardData.overlayOpacity1);
    cardElement.style.setProperty('--overlay-opacity2', cardData.overlayOpacity2);

    const textLayer = document.createElement('div');
    textLayer.classList.add('text-layer', 'gradient-text');
    textLayer.textContent = cardData.name;

    cardWrapper.appendChild(textLayer);
    cardWrapper.appendChild(cardElement);

    applyAnimation(cardElement, cardData); // Apply animation to the created card element
    return cardWrapper;
}



// Function to handle "Load More" button click
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPageIndex++; // Move to the next page
    const startIndex = 0;
    const endIndex = (currentPageIndex + 1) * initialCardsPerPage;
    loadCards(startIndex, endIndex);
    checkLoadMore();
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
});
// Function to apply animation to a card element
function applyAnimation(cardElement, cardData) {
    let prevX = 0;
    let prevY = 0;
    let isMoving = false;

    function handleMove(x, y) {
        const rect = cardElement.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const mouseX = x - cardCenterX;
        const mouseY = y - cardCenterY;

        const movementX = mouseX - prevX;
        const movementY = mouseY - prevY;

        // Minimum movement amount and movement speed
        const minMovement = 20;
        const speed = 0.3;

        if (!isMoving && Math.abs(movementX) > minMovement) {
            prevX = mouseX;
            isMoving = true;
        } else {
            prevX += movementX * speed;
        }

        if (!isMoving && Math.abs(movementY) > minMovement) {
            prevY = mouseY;
            isMoving = true;
        } else {
            prevY += movementY * speed;
        }

        // Angle & Rotation
        const angle = 10; // Increase the sensitivity of rotation
        const maxRotation = 70; // Set the maximum rotation to 70 degrees
        const rotX = Math.min(Math.max(prevY / angle, -maxRotation), maxRotation); // Limit rotation to -70deg and 70deg
        const rotY = Math.min(Math.max(prevX / -angle, -maxRotation), maxRotation); // Limit rotation to -70deg and 70deg

        // Update overlay1 based on tilt angle and movement
        const tiltBrightness = Math.abs(rotX) / maxRotation; // Brightness based on tilt angle
        const movementBrightness = Math.abs(movementX + movementY) / (minMovement * 2); // Brightness based on movement
        const totalBrightness = Math.min(tiltBrightness + movementBrightness, 1); // Combine brightness factors

        cardElement.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        cardElement.style.setProperty(cardData.Overlay1, `rgba(255, 255, 255, ${totalBrightness})`);
        cardElement.style.setProperty(cardData.Overlay2, `rgba(255, 255, 255, ${totalBrightness})`);
    }

    // Mouse move event listener
    cardElement.addEventListener("mousemove", function(e) {
        handleMove(e.clientX, e.clientY);
    });

    // Touch move event listener
    cardElement.addEventListener("touchmove", function(e) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    });

    cardElement.addEventListener("mouseout", function() {
        cardElement.style.transition = "transform 0.5s ease"; // Add transition for smooth snap back
        cardElement.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset rotation
        cardElement.style.setProperty('--overlay1', cardData.overlay1); // Reset overlay1
        cardElement.style.setProperty('--overlay-opacity1', cardData.overlayOpacity1); // Reset overlay1 opacity
    });
}




// Function to load and display cards
function loadCards(startIndex, endIndex) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear the existing cards

    for (let i = startIndex; i < endIndex; i++) {
        if (i < cardsData.length) {
            const cardData = cardsData[i];
            const cardElement = createCardElement(cardData);
            app.appendChild(cardElement);
        }
    }
}

// Load initial set of cards
const initialCardsPerPage = 8;
let currentPageIndex = 0;
loadCards(0, initialCardsPerPage);

// Function to handle "Load More" button click
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPageIndex++; // Move to the next page
    const startIndex = 0;
    const endIndex = (currentPageIndex + 1) * initialCardsPerPage;
    loadCards(startIndex, endIndex);
    checkLoadMore();
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
});

// Function to check if there are more cards to load
function checkLoadMore() {
    const $loadMoreBtn = document.getElementById('loadMoreBtn');
    if ((currentPageIndex + 1) * initialCardsPerPage < cardsData.length) {
        $loadMoreBtn.style.display = 'block';
    } else {
        $loadMoreBtn.style.display = 'none';
        addBottomButton(); // Add the bottom button when all cards are loaded
    }
}

// Function to add the bottom button when all cards are loaded
function addBottomButton() {
    const $bottomBtnContainer = document.createElement('div');
    $bottomBtnContainer.classList.add('bottom-btn-container');
    const $bottomBtn = document.createElement('button');
    $bottomBtn.textContent = 'Bottom';
    $bottomBtn.disabled = true;
    $bottomBtn.classList.add('bottom-btn-disabled');
    $bottomBtnContainer.appendChild($bottomBtn);
    document.body.appendChild($bottomBtnContainer);
}

// Initial check for "Load More" button visibility
checkLoadMore();
