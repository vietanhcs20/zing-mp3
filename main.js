import { modalThemesList } from "./data/theme.js";
import { songList } from "./data/song.js";


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const inputSearch = $('.header__input-search-place');
const inputContainer = $('.header__input-search');
const modalThemes = $('.modal');
const modalChecked = $('#check-for-modal');
const modalClose = $('.modal__container-heading-icon');
const settingBtn = $('.setting__btn');
const settingList = $('.setting__list');
const optionBtn = $('.content__user-btn--circle');
const navItems = $$('.content__navigation-item');
const header = $('.header');
const container = $('.container');
const sidebarSwitch = $$('.sidebar__menu-switch-btn');
const sidebar = $('.sidebar');
const switchColorBtn = $$('.switch-color');
const playBtn = $('.footer-center-btn-play');
const songs = $$('.content__song-playlist-item');
const dotBtn = $$('.dot-btn');
const audio = $('#audio');
const controlPlace = $('.footer-center');
const songDuration = $('.footer-center-time-duration');
const progressBar = $('#progress-bar');
const currentTime = $('.footer-center-time');
const nextBtn = $('.footer-center-btn-next');
const prevBtn = $('.footer-center-btn-prev');
const repeatBtn = $('.footer-center-btn-repeat');
const randomBtn = $('.footer-center-btn-random');
const volumeBar = $('.volume-bar');
const muteBtn = $('.footer-right-mic');
const songName = $('.footer-left-title');
const songAuthor = $('.footer-left-author');
const songImage = $('.footer-left-banner');
const sidebarItem = $$('.sidebar__list-item');

const app = {
    playlist: songList.songsData,
    currentIndex: 0,
    currentTime: 0,
    currentVolume: 50,
    isRandom: false,
    isReapeat: false,
    removeBackground() {
        const songBg = $('.content__song-playlist-item.play');
        songBg.classList.remove('play')
        songs[this.currentIndex].classList.add('play');
    },
    caculateTime(time) {
        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;
        const text = m + ':' + s;
        return text;
    },
    updateInfo() {
        const name = this.playlist[this.currentIndex].name;
        const author = this.playlist[this.currentIndex].author;
        const image = this.playlist[this.currentIndex].image;
        songName.innerText = name;
        songAuthor.innerText = author;
        songImage.style.background = `url(${image}) center center / cover`;
    },
    loadSong() {
        const src = this.playlist[this.currentIndex].song;
        audio.src = src;
        audio.currentTime = this.currentTime;

        audio.onloadeddata = () => {
            songDuration.innerText = this.caculateTime(audio.duration);
            let percent = Math.floor(audio.currentTime / audio.duration) * 100;
            progressBar.value = percent;
        }
    },

    playSong() {
        this.loadSong();
        if (Array.from(playBtn.classList).includes('stopped')) {
            playBtn.classList.remove('stopped')
            controlPlace.classList.remove('stopped')
        }
        this.removeBackground();
        audio.play()
    },
    stopSong() {
        this.currentTime = audio.currentTime;
        audio.pause();
    },
    nextSong() {
        this.currentTime = 0;
        if (this.currentIndex >= this.playlist.length - 1) {
            this.currentIndex = 0;
        }
        else {
            ++this.currentIndex;
        }

        this.playSong();
    },
    prevSong() {
        this.currentTime = 0;
        if (this.currentIndex < 0) {
            this.currentIndex = this.playlist.length - 1;;
        }
        else {
            --this.currentIndex;
        }
        console.log(this.currentIndex)

        this.playSong();
    },

    handleEvents: function () {
        this.updateInfo();
        this.loadSong()
        audio.volume = this.currentVolume / 100;
        const _this = this;
        // Xử lý border radius cho input
        inputSearch.onfocus = () => {
            inputContainer.classList.add('onfocus');
        }
        inputSearch.onblur = () => {
            inputContainer.classList.remove('onfocus');
        }

        // Xử lý ẩn và hiện Modal
        modalThemes.onclick = function (e) {
            if (e.target.closest('.modal__container') && e.target != modalClose) {
                e.stopPropagation();
            }
            else {
                modalChecked.click();
            }
        }

        // Xử lý ẩn và hiện Setting
        document.onclick = function (e) {
            settingBtn.classList.remove('active');
            optionBtn.classList.remove('active');
        }

        settingBtn.onclick = function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
        }

        settingList.onclick = function (e) {
            e.stopPropagation();
        }


        optionBtn.onclick = function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
        }

        // Xử lý nhấn vào nút trên navigation
        navItems.forEach(navItem => {
            navItem.onclick = () => {
                const preActive = $('.content__navigation-item.active');
                preActive.classList.remove('active');
                navItem.classList.add('active');
            }
        })

        sidebarItem.forEach(item => {
            item.onclick = function () {
                const preActive = $('.sidebar__list-item.active');
                preActive.classList.remove('active');
                this.classList.add('active')
            }
        })


        // Scroll header
        container.onscroll = function (e) {
            var scrollTop = container.scrollTop;
            if (scrollTop > 0) {
                header.classList.add('scroll');
            }
            else {
                header.classList.remove('scroll');

            }
        }

        // Switch sidebar
        sidebarSwitch.forEach(btn => {
            btn.onclick = () => {
                sidebar.classList.toggle('small');
            }
        })

        // Dots button stop Bubble
        dotBtn.forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
            }
        })

        // Switch play btn
        playBtn.onclick = function (e) {
            e.stopPropagation();
            this.classList.toggle('stopped')
            controlPlace.classList.toggle('stopped')
            if (Array.from(controlPlace.classList).includes('stopped')) {
                _this.stopSong();
            }
            else {
                _this.playSong();
            }
        }

        // Switch color button
        switchColorBtn.forEach(btn => {
            btn.onclick = function (e) {
                e.stopPropagation();
                this.classList.toggle('active')
            }
        })

        songs.forEach(song => {
            song.onclick = (e) => {
                const index = e.target.closest('.content__song-playlist-item').dataset.index;
                if (index != this.currentIndex) {
                    if (Array.from(playBtn.classList).includes('stopped')) {
                        playBtn.classList.remove('stopped')
                        controlPlace.classList.remove('stopped')
                    }
                    this.currentIndex = index;
                    this.currentTime = 0;
                    this.updateInfo();
                    this.playSong()
                }
            };
        })

        audio.ontimeupdate = () => {
            this.currentTime = audio.currentTime;
            const percent = Math.floor(this.currentTime / audio.duration * 100);
            progressBar.value = percent;
            currentTime.innerText = this.caculateTime(audio.currentTime)
        }

        progressBar.oninput = () => {
            let percent = progressBar.value;
            let time = percent * audio.duration / 100;
            audio.currentTime = time;
            this.currentTime = time;
            this.playSong();
        }

        audio.onended = () => {
            this.nextSong();
            this.updateInfo();
        }

        nextBtn.onclick = () => {
            this.nextSong();
            this.updateInfo();
        }

        prevBtn.onclick = () => {
            this.prevSong();
            this.updateInfo();
        }

        repeatBtn.onclick = () => {
            repeatBtn.classList.toggle('active')
            if (Array.from(repeatBtn.classList).includes('active')) {
                this.isReapeat = true;
            }
            else {
                this.isReapeat = false;
            }
        }

        randomBtn.onclick = () => {
            randomBtn.classList.toggle('active')
            if (Array.from(randomBtn.classList).includes('active')) {
                this.isRandom = true;
            }
            else {
                this.isRandom = false;
            }
        }

        volumeBar.oninput = () => {
            let percent = volumeBar.value;
            this.currentVolume = percent / 100;
            audio.volume = this.currentVolume;
        }

        muteBtn.onclick = function () {
            this.classList.toggle('active')
            if (Array.from(this.classList).includes('active')) {
                audio.muted = true;
            }
            else {
                audio.muted = false;
            }
        }
    },

    start: function () {
        this.handleEvents();
    }
}

app.start();

