// Import cards data from cardsData.js
import { cardsData } from './cardsData.js';

// Function to create a card element
function createCardElement(cardData) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', cardData.name); // Add class based on card name
    cardElement.style.setProperty('--color1', cardData.color1); // Set CSS variables based on card data
    cardElement.style.setProperty('--color2', cardData.color2);
    cardElement.style.setProperty('--front', `url(${cardData.imgUrl})`);
    cardElement.style.setProperty('--overlay1-url', cardData.overlay1);
    cardElement.style.setProperty('--overlay2-url', cardData.overlay2);
    cardElement.style.setProperty('--overlay-opacity1', cardData.overlayOpacity1);
    cardElement.style.setProperty('--overlay-opacity2', cardData.overlayOpacity2);
    return cardElement;
}

// Function to arrange cards in the app container
function arrangeCards() {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear previous cards

    // Create and append card elements
    cardsData.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        app.appendChild(cardElement);
    });
}

// Initial arrangement of cards
arrangeCards();
