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

function arrangeCards() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    cardsData.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        app.appendChild(cardElement);
    });
}

arrangeCards();

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
    }).on("mouseout", function() {
        $cards.removeClass("active");
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
    $cards.each(function(index, card) {
        card.addEventListener("mouseover", onHover);
        card.addEventListener("mouseout", onOut);
    });
});
