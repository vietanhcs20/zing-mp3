const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const albumSection = $('.content__section-album')

var Album = {
    type: 'Album',
    listAlbum: [
        {
            name: "Golden Hour",
            image: "./assets/img/albums/album1.jpg"
        },
        {
            name: "Boycold (Mini Album)",
            image: "./assets/img/albums/album2.jpg"
        },
        {
            name: "Red",
            image: "./assets/img/albums/album3.jpg"
        },
        {
            name: "Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)",
            image: "./assets/img/albums/album4.jpg"
        },
        {
            name: "Querencia (Mini Album)",
            image: "./assets/img/albums/album5.jpg"
        },
        {
            name: "Justice (Mini Album)",
            image: "./assets/img/albums/album6.jpg"
        },
        {
            name: "Teenage Dream",
            image: "./assets/img/albums/album7.jpg"
        },
        {
            name: "The Off Season",
            image: "./assets/img/albums/album8.jpg"
        },
        {
            name: "The Album",
            image: "./assets/img/albums/album9.jpg"
        },
        {
            name: "Random Access Memories",
            image: "./assets/img/albums/album10.jpg"
        },
        {
            name: "Map of the Soul: 7",
            image: "./assets/img/albums/album11.jpg"
        },
        {
            name: "Chromatica",
            image: "./assets/img/albums/album12.jpg"
        },
        {
            name: "My Turn",
            image: "./assets/img/albums/album13.jpg"
        },
        {
            name: "Meet the Woo 2",
            image: "./assets/img/albums/album14.jpg"
        },
        {
            name: "Lemonade",
            image: "./assets/img/albums/album15.jpg"
        },
    ],
    render() {
        const headingList = `
            <h3 class="content__section-heading">
                <a href="#" class="content__section-heading-left">
                    <span class="content__section-heading-name">${this.type}</span>
                    <ion-icon class="content__section-heading-icon" name="chevron-forward-outline">
                    </ion-icon>
                </a>
                <div class="content__section-heading-right hide-on-mobile-tablet">
                    <ion-icon class="content__section-heading-icon" name="chevron-back-outline">
                    </ion-icon>
                    <ion-icon class="content__section-heading-icon" name="chevron-forward-outline">
                    </ion-icon>
                </div>
            </h3>
        `;



        const htmls = this.listAlbum.map(item => {
            return `
            <li class="content__section-item">
            <div class="content__section-item-container">
                <div class="content__section-item-content">
                    <div class="content__section-item-img" style="background: url(${item.image}) center center / cover no-repeat;"></div>
                    <div class="content__section-item-overlay">
                        <div class="content__section-item-option">
                            <span class="btn-icon-container switch-color active">
                                <ion-icon class="btn-icon" name="heart">
                                </ion-icon>
                            </span>
                            <span class="btn-icon-container btn-icon-play">
                                <i class=" btn-icon fa-solid fa-play"></i>
                            </span>
                            <span class="btn-icon-container">
                                <i class="btn-icon  fa-solid fa-ellipsis"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="content__section-item-title">
                    <h3 class="content__section-item-name">${item.name}</h3>
                </div>
            </div>
        </li> 
            `
        }).join('')

        const htmlsList = document.createElement('ul');
        htmlsList.className = 'content__section-list';
        htmlsList.innerHTML = htmls;


        albumSection.innerHTML = headingList;
        albumSection.appendChild(htmlsList)
    }
}

Album.render()

export { Album };

