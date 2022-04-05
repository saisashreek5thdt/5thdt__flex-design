var characters_info = [{
    imgsrc: ''
}]

var characters_section = document.getElementById("characters_row")

for (let i = 0; i <= 5; i++) {
    var char_row = document.createElement('div');
    char_row.className = 'char1-img';
    characters_section.appendChild(char_row);

    var char_img = document.createElement('img');
    char_row.appendChild(char_img);
}