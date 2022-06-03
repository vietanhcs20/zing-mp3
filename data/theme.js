const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const themeContainer = $('.modal__container-content');

const modalThemesList = {
    themesList: [
        {
            type: 'Chủ đề',
            themes: [
                {
                    name: 'Zing Music Awards',
                    image: './assets/img/modalThemes/modalTheme1/theme1.jpg'
                },
                {
                    name: 'Tháp Eiffel',
                    image: './assets/img/modalThemes/modalTheme1/theme2.jpg'
                },
            ]
        },
        {
            type: 'Nghệ Sĩ',
            themes: [
                {
                    name: 'Rosé',
                    image: './assets/img/modalThemes/modalTheme2/theme1.jpg'
                },
                {
                    name: 'IU',
                    image: './assets/img/modalThemes/modalTheme2/theme2.jpg'
                },
                {
                    name: 'Ji Chang Wook',
                    image: './assets/img/modalThemes/modalTheme2/theme3.jpg'
                },
                {
                    name: 'Lisa',
                    image: './assets/img/modalThemes/modalTheme2/theme4.jpg'
                },
                {
                    name: 'Jennie Kim',
                    image: './assets/img/modalThemes/modalTheme2/theme5.jpg'
                },
                {
                    name: 'Jisoo',
                    image: './assets/img/modalThemes/modalTheme2/theme6.jpg'
                },
            ]
        },
        {
            type: 'Màu Tối',
            themes: [
                {
                    name: 'Tối',
                    image: './assets/img/modalThemes/modalTheme3/theme1.jpg'
                },
                {
                    name: 'Tím',
                    image: './assets/img/modalThemes/modalTheme3/theme2.jpg'
                },
                {
                    name: 'Xanh Đậm',
                    image: './assets/img/modalThemes/modalTheme3/theme3.jpg'
                },
                {
                    name: 'Xanh Biển',
                    image: './assets/img/modalThemes/modalTheme3/theme4.jpg'
                },
                {
                    name: 'Xanh Lá',
                    image: './assets/img/modalThemes/modalTheme3/theme5.jpg'
                },
                {
                    name: 'Nâu',
                    image: './assets/img/modalThemes/modalTheme3/theme6.jpg'
                },
                {
                    name: 'Hồng',
                    image: './assets/img/modalThemes/modalTheme3/theme7.jpg'
                },
                {
                    name: 'Đỏ',
                    image: './assets/img/modalThemes/modalTheme3/theme8.jpg'
                },
            ]
        },
        {
            type: 'Màu Sáng',
            themes: [
                {
                    name: 'Sáng',
                    image: './assets/img/modalThemes/modalTheme4/theme1.jpg'
                },
                {
                    name: 'Xám',
                    image: './assets/img/modalThemes/modalTheme4/theme2.jpg'
                },
                {
                    name: 'Xanh Nhạt',
                    image: './assets/img/modalThemes/modalTheme4/theme3.jpg'
                },
                {
                    name: 'Hồng Cánh Sen',
                    image: './assets/img/modalThemes/modalTheme4/theme4.jpg'
                },
            ]
        },
    ],
    render: function () {
        const temp = this.themesList.map(function (item) {
            const renderList = item.themes.map(function (value) {
                return `
                <div class="col l-2-4 m-4 s-6 theme__item-container">
                    <div class="theme__item-overlay">
                        <div class="theme__item"
                            style="background: url(${value.image}) no-repeat center center / contain; ">
                        </div>
                        <div class="theme__button-overlay">
                            <div class="theme__button-container">
                                <button class="theme__button theme__button-apply">Áp dụng</button>
                                <button class="theme__button theme__button-preview">Xem trước</button>
                            </div>
                        </div>
                    </div>
                    <div class="theme__name">${value.name}</div>
                </div>
                `;
            });
            const newList = renderList.join('');
            return `<div class="theme__container"> 
                        <h3 class="theme__type">${item.type}</h3> 
                        <div class="row theme__list">
                            ${newList} 
                        </div>
                    </div>`;
        })

        themeContainer.innerHTML = temp.join('');
    }
}

modalThemesList.render()
export { modalThemesList };