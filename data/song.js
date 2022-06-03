const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const songListContainer = $('.content__song-playlist');


const songList = {
    type: 'Bài hát',
    songsData: [
        {
            image: './assets/img/music/listSong1/song1.jpg',
            song: './assets/music/listSong1/song1.mp3',
            name: 'Cứ Chill Thôi',
            author: 'Chillies, Rhymastic, Suni Hạ Linh',
            duration: '04:30'
        },
        {
            image: './assets/img/music/listSong1/song2.jpg',
            song: './assets/music/listSong1/song2.mp3',
            name: 'Crush',
            author: 'WN, Vani, An An',
            duration: '03:18'
        },
        {
            image: './assets/img/music/listSong1/song3.jpg',
            song: './assets/music/listSong1/song3.mp3',
            name: 'Vô Tình',
            author: 'Xesi, Hoaprox',
            duration: '04:33'
        },
        {
            image: './assets/img/music/listSong1/song4.jpg',
            song: './assets/music/listSong1/song4.flac',
            name: "Because I'm stupid",
            author: 'SS501',
            duration: '04:20',
        },
        {
            image: './assets/img/music/listSong1/song5.jpg',
            song: './assets/music/listSong1/song5.mp3',
            name: 'Mama Boy',
            author: 'AMEE',
            duration: '03:24'
        },
        {
            image: './assets/img/music/listSong1/song6.jpg',
            song: './assets/music/listSong1/song6.mp3',
            name: 'Cửu Vĩ Hồ',
            author: 'Yun, Dr A',
            duration: '06:05'
        },
        {
            image: './assets/img/music/listSong1/song7.jpg',
            song: './assets/music/listSong1/song7.mp3',
            name: 'Anh Đã Quen Với Cô Đơn',
            author: 'Soobin Hoàng Sơn',
            duration: '03:55'
        },
        {
            image: './assets/img/music/listSong1/song8.jpg',
            song: './assets/music/listSong1/song8.mp3',
            name: 'Túy Âm',
            author: 'Xesi, Masew, Nhật Nguyễn',
            duration: '03:22'
        },
        {
            image: './assets/img/music/listSong1/song9.jpg',
            song: './assets/music/listSong1/song9.mp3',
            name: 'Kém Duyên',
            author: 'Rum, NIT, Masew',
            duration: '03:44'
        },
        {
            image: './assets/img/music/listSong1/song10.jpg',
            song: './assets/music/listSong1/song10.flac',
            name: 'Tình Bạn Diệu Kì',
            author: 'AMEE, Ricky Star, Lăng LD',
            duration: '03:08'
        },
        {
            image: './assets/img/music/listSong1/song11.jpg',
            song: './assets/music/listSong1/song11.mp3',
            name: 'Em có Nghe',
            author: 'Kha',
            duration: '04:15'
        },
        {
            image: './assets/img/music/listSong1/song12.jpg',
            song: './assets/music/listSong1/song12.mp3',
            name: 'Lạc Trôi',
            author: 'Sơn Tùng MTP',
            duration: '03:53'
        },
        {
            image: './assets/img/music/listSong1/song13.jpg',
            song: './assets/music/listSong1/song13.mp3',
            name: 'Một Năm Mới Bình An',
            author: 'Sơn Tùng MTP',
            duration: '04:07'
        },
        {
            image: './assets/img/music/listSong1/song14.jpg',
            song: './assets/music/listSong1/song14.mp3',
            name: 'Hongkong1 (Offical Version)',
            author: 'Nguyễn Trọng Tài, San Ji, Double X',
            duration: '04:13'
        },
        {
            image: './assets/img/music/listSong1/song15.jpg',
            song: './assets/music/listSong1/song15.mp3',
            name: 'Gác Lại Âu Lo',
            author: 'Da LAB. Miu Lê',
            duration: '04:42'
        },
        {
            image: './assets/img/music/listSong1/song16.jpg',
            song: './assets/music/listSong1/song16.mp3',
            name: 'Chạy Ngay Đi',
            author: 'Sơn Tùng MTP',
            duration: '04:08'
        },
        {
            image: './assets/img/music/listSong1/song17.jpg',
            song: './assets/music/listSong1/song17.mp3',
            name: 'Cùng Anh',
            author: 'Ngọc Dolil, Hagi, STee',
            duration: '03:17'
        },
        {
            image: './assets/img/music/listSong1/song18.jpg',
            song: './assets/music/listSong1/song18.mp3',
            name: 'Hãy Trao Cho Anh',
            author: 'Sơn Tùng MTP',
            duration: '04:05'
        },
        {
            image: './assets/img/music/listSong1/song19.jpg',
            song: './assets/music/listSong1/song19.mp3',
            name: 'Tộc Ca',
            author: 'Phúc Du, SONBEAT',
            duration: '03:11'
        },
        {
            image: './assets/img/music/listSong1/song20.jpg',
            song: './assets/music/listSong1/song20.mp3',
            name: 'Thiên Lý Ơi',
            author: 'Jack, Bikay',
            duration: '04:16'
        },
        {
            image: './assets/img/music/listSong1/song21.jpg',
            song: './assets/music/listSong1/song21.mp3',
            name: 'Phố Đã Lên Đèn',
            author: 'Huyền Tâm Môn',
            duration: '04:04'
        },
    ],
    render: function () {
        const htmls = songList.songsData.map(function (songItem, index) {
            return `
                <li class="content__song-playlist-item ${index == 0 ? 'play' : ''}" data-index=${index} >
                    <label for="song${index + 1}" class="content__song-playlist-label">
                        <div class="content__song-playlist-info">
                            <div class="content__song-playlist-img-container">
                                <div class="content__song-playlist-img"
                                    style="background: url(${songItem.image}) center center / cover no-repeat">
                                    <div class="content__song-playlist-thumb"></div>
                                    <ion-icon class="content__song-playlist-play" name="play">
                                    </ion-icon>
                                </div>
                            </div>
    
                            <div class="content__song-playlist-info-text">
                                <h4 class="content__song-playlist-name">${songItem.name}</h4>
                                <p class="content__song-playlist-author">${songItem.author}</p>
                            </div>
                        </div>
                        <span class="content__song-playlist-duration">${songItem.duration}</span>
                        <div class="content__song-playlist-options">
                            <span class="content__song-playlist-options-icon-container switch-color hide-on-mobile">
                                <ion-icon class="content__song-playlist-options-icon" name="mic">
                                </ion-icon>
                            </span>
                            <span class="content__song-playlist-options-icon-container switch-color hide-on-mobile active">
                                <ion-icon class="content__song-playlist-options-icon"
                                    name="heart">
                                </ion-icon>
                            </span>
                            <span class="content__song-playlist-options-icon-container dot-btn">
                                <i
                                    class="content__song-playlist-options-icon fa-solid fa-ellipsis "></i>
                            </span>
                        </div>
                    </label>
                </li>`;
        });
        songListContainer.innerHTML = htmls.join('');

    },

    handleEvent: function () {

    }
}

songList.render()
export { songList };

