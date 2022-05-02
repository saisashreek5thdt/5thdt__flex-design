const anim_videos = [
    { videosrc: 'assets/video/animation/1.mp4' },
    { videosrc: 'assets/video/animation/2.mp4' },
    { videosrc: 'assets/video/animation/3.mp4' },
    { videosrc: 'assets/video/animation/4.mp4' },
    { videosrc: 'assets/video/animation/5.mp4' },
    { videosrc: 'assets/video/animation/6.mp4' },
    { videosrc: 'assets/video/animation/7.mp4' },
    { videosrc: 'assets/video/animation/8.mp4' },
    { videosrc: 'assets/video/animation/9.mp4' }
    // { videosrc: 'assets/video/animation/10.mp4' },
]

const anim_imges_row1 = [
    { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/4.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/4.jpg" }

    // { imgsrc: "assets/images/arts/2d-animation/9.jpg" },
    // { imgsrc: "assets/images/arts/2d-animation/10.jpg" },
    // { imgsrc: "assets/images/arts/2d-animation/11.jpg" },
    // { imgsrc: "assets/images/arts/2d-animation/12.jpg" },
    // { imgsrc: "assets/images/arts/2d-animation/13.jpg" },
    // { imgsrc: "assets/images/arts/2d-animation/14.jpg" }
]
const anim_imges_row2 = [
    { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/8.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/8.jpg" }
]

var anim_img_container = document.getElementById("animation_container");

for (let i = 0; i < anim_videos.length; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-md-6 col-lg-4 col-xl-4';
    anim_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    // var anchortag = document.createElement("a");
    // anchortag.href = "#";
    // anchortag.id = i;
    // anchortag.setAttribute("onclick", "loadimages(" + anchortag.id + ")");
    // card_block.appendChild(anchortag);

    var card_video_block = document.createElement('video');
    // card_video_block.muted = true;
    // card_video_block.loop = true;
    // card_video_block.autoplay = true;
    card_video_block.id = i;
    card_block.appendChild(card_video_block);

    var card_source_block = document.createElement('source');
    card_source_block.src = anim_videos[i].videosrc;
    card_source_block.type = 'video/mp4';
    card_video_block.appendChild(card_source_block);


    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'PLAY';
    // view_button.onclick = 'loadimages(' + card_video_block.id + ')';
    view_button.setAttribute('onclick', 'loadimages(' + i + ')');
    // view_button.onclick = function() { loadimages(card_video_block.id) };
    // view_button.addEventListener('click', 'loadimages(' + card_video_block.id + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);

    // var card_body_text = document.createElement('p');
    // card_body_text.className = 'card-text';
    // card_body_text.textContent = 'image' + i;
    // card_body.appendChild(card_body_text);
}

var cards_anim_container1 = document.getElementById("animation_container1");

for (let i = 0; i < anim_imges_row1.length; i++) {

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
    card_img_block.src = anim_imges_row1[i].imgsrc;
    // card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    // var card_body = document.createElement('div');
    // card_body.className = 'card-body';
    // card_block.appendChild(card_body);

    // var card_body_text = document.createElement('p');
    // card_body_text.className = 'card-text';
    // card_body_text.textContent = 'image' + i;
    // card_body.appendChild(card_body_text);
}

var cards_anim_container2 = document.getElementById("animation_container2");

for (let i = 0; i < anim_imges_row2.length; i++) {

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
    card_img_block.src = anim_imges_row2[i].imgsrc;
    // card_img_block.alt = 'image';
    card_block.appendChild(card_img_block);

    // var card_body = document.createElement('div');
    // card_body.className = 'card-body';
    // card_block.appendChild(card_body);

    // var card_body_text = document.createElement('p');
    // card_body_text.className = 'card-text';
    // card_body_text.textContent = 'image' + i;
    // card_body.appendChild(card_body_text);
}

function loadimages(id) {
    console.log(id)
    document.getElementById("modal_video").src = anim_videos[id].videosrc
    console.log(document.getElementById("modal_video").src)
}