var characters_info = [
    { imgsrc: "assets/images/arts/guild-master-concept/1.jpg" },
    { imgsrc: "assets/images/arts/2d-game-character-variation/1.jpg" },
    { imgsrc: "assets/images/arts/2d-game-character-variation/3.jpg" },
    { imgsrc: "assets/images/arts/2d-game-character-variation/1.jpg" },
]

var characters_section = document.getElementById("characters_row")

for (let i = 0; i < characters_info.length; i++) {
    var char_row = document.createElement('div');
    char_row.className = 'char1-img';
    characters_section.appendChild(char_row);

    var char_img = document.createElement('img');
    char_img.src = characters_info[i].imgsrc;
    char_row.appendChild(char_img);
}