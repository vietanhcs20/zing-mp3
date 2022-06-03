const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const mvSection = $('.content__section-mv')

const MV = {
    type: 'MV',
    listMV: [
        {
            name: "Một Bước Yêu Vạn Dặm Đau",
            author: "Mr. Siro",
            time: "11:54",
            authorAvatar: "./assets/img/mvArtists/artist1.jpg",
            image: "./assets/img/MVs/mv1.jpg"
        },
        {
            name: "Simple Love",
            author: "Obito, Seachains, Davis",
            time: "03:54",
            authorAvatar: "./assets/img/mvArtists/artist2.jpg",
            image: "./assets/img/MVs/mv2.jpg"
        },
        {
            name: "Lời Yêu Ngây Dại",
            author: "Kha",
            time: "04:33",
            authorAvatar: "./assets/img/mvArtists/artist3.jpg",
            image: "./assets/img/MVs/mv3.jpg"
        },
        {
            name: "24H",
            author: "LyLy, Magazine",
            time: "04:18",
            authorAvatar: "./assets/img/mvArtists/artist4.jpg",
            image: "./assets/img/MVs/mv4.jpg"
        },
        {
            name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
            author: "Da LAB, Tóc Tiên",
            time: "05:45",
            authorAvatar: "./assets/img/mvArtists/artist5.jpg",
            image: "./assets/img/MVs/mv5.jpg"
        },

        {
            name: "Yêu Đơn Phương",
            author: "OnlyC, Karik",
            time: "05:02",
            authorAvatar: "./assets/img/mvArtists/artist6.jpg",
            image: "./assets/img/MVs/mv6.jpg"
        },
        {
            name: "Phía Sau Em",
            author: "Kay Trần, Binz",
            time: "04:06",
            authorAvatar: "./assets/img/mvArtists/artist7.jpg",
            image: "./assets/img/MVs/mv7.jpg"
        },
        {
            name: "Mình Yêu nhau đi",
            author: "Bích Phương",
            time: "03:52",
            authorAvatar: "./assets/img/mvArtists/artist8.jpg",
            image: "./assets/img/MVs/mv8.jpg"
        },
        {
            name: "Đừng Về Trễ (Acoustic Version)",
            author: "Sơn Tùng MTP",
            time: "04:41",
            authorAvatar: "./assets/img/mvArtists/artist9.jpg",
            image: "./assets/img/MVs/mv9.jpg"
        },
        {
            name: "Hơn Cả Yêu",
            author: "Đức Phúc",
            time: "05:43",
            authorAvatar: "./assets/img/mvArtists/artist10.jpg",
            image: "./assets/img/MVs/mv10.jpg"
        },
        {
            name: "Vì Yêu Cứ Đâm Đầu",
            author: "MIN, Đen, JustaTee",
            time: "04:01",
            authorAvatar: "./assets/img/mvArtists/artist11.jpg",
            image: "./assets/img/MVs/mv11.jpg"
        },
        {
            name: "Sao Anh Chưa Về Nhà",
            author: "AMEE, Ricky Star",
            time: "04:36",
            authorAvatar: "./assets/img/mvArtists/artist12.jpg",
            image: "./assets/img/MVs/mv12.jpg"
        },
        {
            name: "Bigcityboi",
            author: "Binz, Touliver",
            time: "03:43",
            authorAvatar: "./assets/img/mvArtists/artist13.jpg",
            image: "./assets/img/MVs/mv13.jpg"
        },
        {
            name: "Em Không Sai Chúng Ta Sai",
            author: "ERIK",
            time: "06:28",
            authorAvatar: "./assets/img/mvArtists/artist14.jpg",
            image: "./assets/img/MVs/mv14.jpg"
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


        const htmls = this.listMV.map(item => {
            return `
                <li class="content__section-mv-item">
                    <div class="content__section-mv-container">
                        <div class="content__section-banner">
                            <div class="content__section-mv-thumb"
                                style="background: url(${item.image}) center center / cover;">
                                <div class="content__section-mv-overlay">
                                    <span class="content__section-mv-btn">
                                        <ion-icon class="content__section-mv-icon" name="play">
                                        </ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div class="content__section-mv-duration">${item.time}</div>
                        </div>

                    </div>
                    <div class="content__section-mv-info">
                        <div class="content__section-mv-avatar">
                            <img class="content__section-mv-img"
                                src="${item.authorAvatar}">
                        </div>
                        <div class="content__section-mv-text">
                            <div class="content__section-mv-title">${item.name}</div>
                            <div class="content__section-mv-author">${item.author}</div>
                        </div>
                    </div>
                </li>
                `
        }).join('')

        const htmlsList = document.createElement('ul');
        htmlsList.className = 'content__section-list';
        htmlsList.innerHTML = htmls;
        mvSection.innerHTML = headingList;
        mvSection.appendChild(htmlsList);
    }
}

MV.render()
