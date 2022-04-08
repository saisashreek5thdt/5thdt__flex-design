var characters_info = [{
        imgsrc: './assets/images/gaming_images/avatar.png',
    },
    {
        imgsrc: './assets/images/gaming_images/char1.png',
    },
    {
        imgsrc: './assets/images/gaming_images/kid2.png',
    },
    {
        imgsrc: './assets/images/gaming_images/kid3.png',
    },
    {
        imgsrc: './assets/images/gaming_images/avatar.png',
    },
    {
        imgsrc: './assets/images/gaming_images/char1.png',
    },
    {
        imgsrc: './assets/images/gaming_images/kid2.png',
    },
    {
        imgsrc: './assets/images/gaming_images/kid3.png',
    }
]

var characters_section = document.getElementById("characters_row")

for (let i = 0; i <= 7; i++) {
    var char_row = document.createElement('div');
    char_row.className = 'char1-img';
    characters_section.appendChild(char_row);

    var char_img = document.createElement('img');
    char_img.src = characters_info[i].imgsrc;
    char_row.appendChild(char_img);
}