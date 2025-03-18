class MagicService {

    static BASE_URL = 'https://api.magicthegathering.io';
    static VERSION_URL = '/v1';
    static MAGIC_CARD_URL = '/cards';

    static TOTAL_CARDS = 31090;
    static PAGE_SIZE = 100;
    static TOTAL_PAGES = Math.ceil(MagicService.TOTAL_CARDS / MagicService.PAGE_SIZE);

    constructor(page = 1) {
        this.page = page;
    }

    getData(){
        const url = MagicService.BASE_URL + MagicService.VERSION_URL + MagicService.MAGIC_CARD_URL + '?page=' + this.page;
        return fetch(url)
        .then(res => res.json())
        .then(data => data.cards)
        .catch(err => console.log(err));
    }

    prevPage(){
        if(this.page > 1){
            this.page--;
        } else {
            this.page = MagicService.TOTAL_PAGES;
        }
    }

    nextPage(){
        if(this.page < MagicService.TOTAL_PAGES){
            this.page++;
        } else {
            this.page = 1;
        }
    }

    getMagicCardByID(searchID){ //per detail.js
        return this.getData()
        .then(arrayCards => arrayCards.find(card => card.multiverseid === searchID))
        .catch(err => console.log(err));
    }
}

export default MagicService;