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

function arrangeCards(startIndex, endIndex) {
    const app = document.getElementById('app');

    for (let i = startIndex; i < endIndex; i++) {
        const cardData = cardsData[i];
        const cardElement = createCardElement(cardData);
        app.appendChild(cardElement);
    }
}

const initialCardsToShow = 8;
let currentCardIndex = 0;

// Load initial set of cards
arrangeCards(currentCardIndex, currentCardIndex + initialCardsToShow);

// Function to load more cards when the "Load More" button is clicked
function loadMoreCards() {
    const cardsToShow = 8;
    currentCardIndex += cardsToShow;
    arrangeCards(currentCardIndex, currentCardIndex + cardsToShow);
    checkLoadMore(); // Check if there are still more cards to load
}

// Check if there are more cards to load and show the "Load More" button accordingly
function checkLoadMore() {
    const totalCards = $('.card').length;
    if (currentCardIndex + initialCardsToShow < cardsData.length) {
        $('#loadMoreBtn').show();
        $('#endMessage').hide();
    } else {
        $('#loadMoreBtn').hide();
        $('#endMessage').show();
    }
}

// Load more cards when the "Load More" button is clicked
$('#loadMoreBtn').on('click', loadMoreCards);

// After loading cards, check if there are more to load and show the "Load More" button accordingly
checkLoadMore();

// Hover effect
$(document).ready(function() {
    var $cards = $(".card");

    $cards.on("mousemove", function(e) {
        var $card = $(this);
        var l = e.offsetX;
        var t = e.offsetY;
        var h = $card.height();
        var w = $card.width();
        var lp = Math.abs(Math.floor(100 / w * l)-100);
        var tp = Math.abs(Math.floor(100 / h * t)-100);
        var bg = `background-position: ${lp}% ${tp}%;`
        var style = `.card.active:before { ${bg} }`
        $cards.removeClass("active");
        $card.addClass("active");
        $card.css("transform", "rotateX(0deg) rotateY(0deg)");
        // Remove transition during movement
        $card.css("transition", "none");
    }).on("mouseout", function() {
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

        const angle = 5;
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
    $cards.each(function(index, card) {
        card.addEventListener("mouseover", onHover);
        card.addEventListener("mouseout", onOut);
    });
});
