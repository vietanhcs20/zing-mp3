const $ = document.querySelector.bind(document)
const playlistSection = $('.content__section-playlist')


var Playlist =
{
    type: 'Playlist',
    listPlaylist: [
        {
            name: "V-Pop: The A-List",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist1.jpg"
        },
        {
            name: "Rồi Tới Luôn",
            author: "Nal",
            image: "./assets/img/playlists/playlist2.jpg"
        },
        {
            name: "Nhạc Q.Tế",
            author: "Lạc Trôi",
            image: "./assets/img/playlists/playlist3.jpg"
        },
        {
            name: "Những bản hit của Rap Việt",
            author: "Bigcityboi",
            image: "./assets/img/playlists/playlist4.jpg"
        },
        {
            name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist5.jpg"
        },
        {
            name: "Những bản nhạc Dance hay nhất",
            author: "Đạt Tấn",
            image: "./assets/img/playlists/playlist6.jpg"
        },
        {
            name: "Em Hát Ai Nghe",
            author: "Ngọc Trâm",
            image: "./assets/img/playlists/playlist7.jpg"
        },
        {
            name: "Chill cùng Đen Vâu",
            author: "Trà My",
            image: "./assets/img/playlists/playlist8.jpg"
        },
        {
            name: "Những bản hit hay nhất của Sơn Tùng MTP",
            author: "Nguyễn Thành Công",
            image: "./assets/img/playlists/playlist9.jpg"
        },
        {
            name: "Thế Giới V-Pop Vol. 3",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist10.jpg"
        },
        {
            name: "BodyTalk",
            author: "Lâm Huy",
            image: "./assets/img/playlists/playlist11.jpg"
        },
        {
            name: "Playlist Này Chill Phết",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist12.jpg"
        },
        {
            name: "BlackJack",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist13.jpg"
        },
        {
            name: "4U - On Repeat",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist14.jpg"
        },
        {
            name: "Những Bài Hát Hay Nhất Của Mr. Siro",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist15.jpg"
        },
        {
            name: "Top EDM Songs Of 2018",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist16.jpg"
        },
        {
            name: "Giai Điệu Và Trào Lưu Gây Sốt",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist17.jpg"
        },
        {
            name: "Những Bài Hát Hay Nhất Của HKT",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist18.jpg"
        },
        {
            name: "100% Gây Nghiện",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist19.jpg"
        },
        {
            name: "Nhạc Việt Được Nghe Nhiều Nhất",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist20.jpg"
        },
        {
            name: "Dance Việt Hay Nhất",
            author: "Zing MP3",
            image: "./assets/img/playlists/playlist21.jpg"
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



        const htmls = this.listPlaylist.map(item => {
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
                    <p class="content__section-item-author">${item.author}</p>
                </div>
            </div>
        </li> 
            `
        }).join('')

        const htmlsList = document.createElement('ul');
        htmlsList.className = 'content__section-list';
        htmlsList.innerHTML = htmls;


        playlistSection.innerHTML = headingList;
        playlistSection.appendChild(htmlsList)
    }
}

Playlist.render()
