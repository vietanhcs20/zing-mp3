const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const artistSection = $('.content__section-artist')

const Artist = {
    type: 'Nghệ sĩ',
    listArtist: [
        {
            name: "Binz",
            followers: "265K",
            image: "./assets/img/artists/artist1.jpg"
        },
        {
            name: "Phương Ly",
            followers: "77K",
            image: "./assets/img/artists/artist2.jpg"
        },
        {
            name: "AMEE",
            followers: "317K",
            image: "./assets/img/artists/artist3.jpg"
        },
        {
            name: "MCK",
            followers: "52K",
            image: "./assets/img/artists/artist4.jpg"
        },
        {
            name: "Sơn Tùng M-TP",
            followers: "2.1M",
            image: "./assets/img/artists/artist5.jpg"
        },

        {
            name: "Mr. Siro",
            followers: "735K",
            image: "./assets/img/artists/artist6.jpg"
        },
        {
            name: "Han Sara",
            followers: "158K",
            image: "./assets/img/artists/artist7.jpg"
        },
        {
            name: "Bích Phương",
            followers: "368K",
            image: "./assets/img/artists/artist8.jpg"
        },
        {
            name: "Soobin",
            followers: "435K",
            image: "./assets/img/artists/artist9.jpg"
        },
        {
            name: "Chi Dân",
            followers: "516K",
            image: "./assets/img/artists/artist10.jpg"
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


        const htmls = this.listArtist.map(item => {
            return `
                <li class="content__section-artist-item">
                    <div class="content__section-artist-item-img">
                        <div class="content__section-artist-container">
                            <div class="content__section-artist-thumb" style="background: url(${item.image}) center center / cover">
                                <div class="content__section-artist-overlay">
                                    <span class="content__section-artist-play-btn">
                                        <ion-icon class="content__section-artist-play-icon"
                                            name="play">
                                        </ion-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content__section-artist-item-info">
                        <h5 class="content__section-artist-name">
                            ${item.name}
                            <ion-icon name="star"></ion-icon>
                        </h5>
                        <p class="content__section-artist-followed">
                            ${item.followers} quan tâm
                        </p>
                    </div>

                    <button class="content__section-artist-item-btn">
                        <ion-icon class="content__section-artist-item-btn-icon" name="checkmark">
                        </ion-icon>
                        ĐÃ QUAN TÂM
                    </button>
                </li>
            `
        }).join('')

        const htmlsList = document.createElement('ul');
        htmlsList.className = 'content__section-list';
        htmlsList.innerHTML = htmls;
        artistSection.innerHTML = headingList;
        artistSection.appendChild(htmlsList)
    }
}

Artist.render();

