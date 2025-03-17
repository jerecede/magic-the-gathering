import MagicService from "./services/magic-service.js";

const urlParams = new URLSearchParams(window.location.search);

const magicCardID = urlParams.get('id');

// const currentPage = 

const service = new MagicService();

service.getMagicCardByID(magicCardID)
.then(card => render(card))
.catch(err => console.log(err));

function render(magicCard){
    const root = document.getElementById('root-2');

    const container = document.createElement('div');

    const img = document.createElement('img');
    img.src = magicCard.imageUrl;

    container.appendChild(img);
    root.appendChild(container);

    const nameContainer = createTextElement('p', 'name: ' + magicCard.name);
    const typeContainer = createTextElement('p', 'type: ' + magicCard.type);
    const rarityContainer = createTextElement('p', 'rarity: ' + magicCard.rarity);

    root.appendChild(nameContainer);
    root.appendChild(typeContainer);
    root.appendChild(rarityContainer);
}

function createTextElement(tag, text){
    const element = document.createElement(tag);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}