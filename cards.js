import cardsData from './cardsData.js';

function createCardElement(cardData) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'card-base', cardData.name.toLowerCase());
    cardElement.style.setProperty('--color1', cardData.color1);
    cardElement.style.setProperty('--color2', cardData.color2);
    cardElement.style.setProperty('--front', `url(${cardData.imgUrl})`);
    cardElement.style.setProperty('--overlay1', cardData.overlay1);
    cardElement.style.setProperty('--overlay2', cardData.overlay2);
    cardElement.innerHTML = `<span>${cardData.name}</span>`;
    return cardElement;
}

function arrangeCards(cardsToShow) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear existing cards

    for (let i = 0; i < cardsToShow; i++) {
        const cardData = cardsData[i];
        const cardElement = createCardElement(cardData);
        app.appendChild(cardElement);
    }
}

function adjustCardsLayout() {
    const screenWidth = window.innerWidth;
    let cardsToShow = 8; // Default number of cards to show

    // Adjust number of cards based on screen width
    if (screenWidth < 1200) {
        cardsToShow = 6;
    }
    if (screenWidth < 992) {
        cardsToShow = 4;
    }
    if (screenWidth < 768) {
        cardsToShow = 3;
    }
    if (screenWidth < 576) {
        cardsToShow = 2;
    }
    if (screenWidth < 400) {
        cardsToShow = 1;
    }

    arrangeCards(cardsToShow);
}

// Load initial set of cards based on screen size
adjustCardsLayout();

// Update cards layout when window is resized
window.addEventListener('resize', adjustCardsLayout);

// Hover effect
$(document).ready(function () {
    var $cards = $(".card");

    $cards.on("mousemove", function (e) {
        var $card = $(this);
        var l = e.offsetX;
        var t = e.offsetY;
        var h = $card.height();
        var w = $card.width();
        var lp = Math.abs(Math.floor(100 / w * l) - 100);
        var tp = Math.abs(Math.floor(100 / h * t) - 100);
        var bg = `background-position: ${lp}% ${tp}%;`
        var style = `.card.active:before { ${bg} }`
        $cards.removeClass("active");
        $card.addClass("active");
        $card.css("transform", "rotateX(0deg) rotateY(0deg)");
        // Remove transition during movement
        $card.css("transition", "none");
    }).on("mouseout", function () {
        var $card = $(this);
        $cards.removeClass("active");
        // Transition back to original position
        $card.css("transition", "transform 0.5s ease");
        $card.css("transform", "rotateX(0deg) rotateY(0deg)");
    });

    const onMove = (ev, el) => {
        const { pageX, pageY } = ev;
        const { offsetWidth, offsetHeight } = el;
        const { left, top } = el.getBoundingClientRect();

        const cardX = left + offsetWidth / 2;
        const cardY = top + offsetHeight / 2;

        const angle = 15;
        const rotX = (cardY - pageY) / angle;
        const rotY = (cardX - pageX) / -angle;

        el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const onCardMove = ev => onMove(ev, ev.target);
    const onHover = ev => ev.target.addEventListener("mousemove", onCardMove);
    const onOut = ev => {
        ev.target.removeEventListener("mousemove", onCardMove);
    };

    // setup cards interaction
    $cards.each(function (index, card) {
        card.addEventListener("mouseover", onHover);
        card.addEventListener("mouseout", onOut);
    });
});
