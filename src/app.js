import MagicService from "./services/magic-service.js";

const service = new MagicService();

service.getData()
.then(data => render(data))
.catch(err => console.log(err));

function prev() {
    service.prevPage();
    service.getData()
    .then(data => render(data))
    .catch(err => console.log(err));
}

function next() {
    service.nextPage();
    service.getData()
    .then(data => render(data))
    .catch(err => console.log(err));
}

window.prev = prev;
window.next = next;

function render(data) {

    const root = document.getElementById('root');

    root.innerText = '';

    for (const magicCard of data) {
        const container = document.createElement('a');
        container.href = '/detail.html?id=' + magicCard.multiverseid;

        const img = document.createElement('img');
        img.src = magicCard.imageUrl;

        container.appendChild(img);
        root.appendChild(container);
    }
}