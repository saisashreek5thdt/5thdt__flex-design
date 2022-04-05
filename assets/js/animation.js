var anim_img_container = document.getElementById("animation_container");

for (let i = 1; i <= 6; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-md-6 col-lg-4 col-xl-4';
    anim_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = '';
    // card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    var card_body_text = document.createElement('p');
    card_body_text.className = 'card-text';
    card_body_text.textContent = 'image' + i;
    card_body.appendChild(card_body_text);
}

var cards_anim_container1 = document.getElementById("animation_container1");

for (let i = 1; i <= 6; i++) {

    // var col_block = document.createElement('div');
    // col_blockcards_anim_container.className = 'col-md-6 col-lg-4 col-xl-4';
    // cards_anim_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-img-card';
    cards_anim_container1.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = '';
    // card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    var card_body_text = document.createElement('p');
    card_body_text.className = 'card-text';
    card_body_text.textContent = 'image' + i;
    card_body.appendChild(card_body_text);
}

var cards_anim_container2 = document.getElementById("animation_container2");

for (let i = 1; i <= 6; i++) {

    // var col_block = document.createElement('div');
    // col_blockcards_anim_container.className = 'col-md-6 col-lg-4 col-xl-4';
    // cards_anim_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-img-card';
    cards_anim_container2.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = '';
    // card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    var card_body_text = document.createElement('p');
    card_body_text.className = 'card-text';
    card_body_text.textContent = 'image' + i;
    card_body.appendChild(card_body_text);
}