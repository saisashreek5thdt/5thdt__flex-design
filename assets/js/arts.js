// var arts_info = [{

// }]

var cards_container_block1 = document.getElementById("cards_container1");
for (let i = 1; i <= 6; i++) {
    var col_block = document.createElement('div');
    col_block.className = 'col-xl-5 col-md-5';
    cards_container_block1.appendChild(col_block);

    var anchortag = document.createElement('a');
    anchortag.href = 'arts-illustrator.html';
    col_block.appendChild(anchortag);

    var card_block = document.createElement('div');
    card_block.className = 'card5';
    anchortag.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = '';
    card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    var card_body_text = document.createElement('p');
    card_body_text.className = 'card-text';
    card_body_text.textContent = 'image' + i;
    card_body.appendChild(card_body_text);
}

var cards_container_block2 = document.getElementById("cards_container2");
for (let i = 1; i <= 6; i++) {
    var col_block = document.createElement('div');
    col_block.className = 'col-xl-5 col-md-5';
    cards_container_block2.appendChild(col_block);

    var anchortag = document.createElement('a');
    anchortag.href = 'arts-illustrator.html';
    col_block.appendChild(anchortag);

    var card_block = document.createElement('div');
    card_block.className = 'card5';
    anchortag.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = '';
    card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    var card_body_text = document.createElement('p');
    card_body_text.className = 'card-text';
    card_body_text.textContent = 'image' + i;
    card_body.appendChild(card_body_text);
}