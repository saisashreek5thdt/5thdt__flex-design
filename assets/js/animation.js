const anim_videos = [
    { videosrc: 'assets/video/animation/1.mp4' },
    { videosrc: 'assets/video/animation/2.mp4' },
    { videosrc: 'assets/video/animation/3.mp4' },
    { videosrc: 'assets/video/animation/4.mp4' },
    // { videosrc: 'assets/video/animation/5.mp4' },
    { videosrc: 'assets/video/animation/6.mp4' },
    { videosrc: 'assets/video/animation/7.mp4' },
    { videosrc: 'assets/video/animation/8.mp4' },

]
const anim_youtube_videos = [
    { videosrc: 'https://www.youtube.com/embed/4CWfQeja8TQ' },
    { videosrc: 'https://www.youtube.com/embed/MmThIEqIub4' },
    { videosrc: 'https://www.youtube.com/embed/mBeBuZbQV6w' },
    { videosrc: 'https://www.youtube.com/embed/Jh4hBvyfSUc' },
    { videosrc: 'https://www.youtube.com/embed/2sRkD6VTYEk' }
]

const img_3d_view_info = [
    { videosrc: "https://sketchfab.com/models/5d4544bab3164e3e8e9f76ece1bf08ff/embed" },
    { videosrc: "https://sketchfab.com/models/323a13f06c2a4445b1db793d5ca96574/embed" },
    { videosrc: "https://sketchfab.com/models/0d332056d02847a7935c6b31dab29280/embed" },
    { videosrc: "https://sketchfab.com/models/30fcc954a96a45e0b76b7644becfdaa9/embed" }
]

const anim_imges_row = [
    { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/4.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/8.jpg" }
]
const anim_imges_row1 = [
    { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/4.jpg" },
]
const anim_imges_row2 = [
    { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
    { imgsrc: "assets/images/arts/2d-animation/8.jpg" },
]

// all 
var all_img_container = document.getElementById("all_container");
for (let i = 0; i < 3; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    all_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = anim_imges_row1[i].imgsrc;
    card_block.appendChild(card_img_block);

    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'VIEW';
    view_button.setAttribute('onclick', 'load_images(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);
}
for (let i = 0; i < 3; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    all_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

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
    view_button.setAttribute('onclick', 'loadimages(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);
}

for (let i = 0; i < 2; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    all_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var col_block2 = document.createElement('div');
    col_block2.className = 'sketchfab-embed-wrapper';
    card_block.appendChild(col_block2);

    var card_video_block = document.createElement('iframe');
    card_video_block.title = 'Cupboard';
    card_video_block.src = img_3d_view_info[i].videosrc;
    card_video_block.setAttribute('frameborder', '0');
    card_video_block.setAttribute('allowFullScreen', '');
    card_video_block.setAttribute('mozallowFullScreen', 'true');
    card_video_block.setAttribute('webkitallowFullScreen', 'true');
    card_video_block.setAttribute('allow', 'fullscreen;', 'xr-spatial-tracking');
    card_video_block.setAttribute('xr-spatial-tracking', '');
    card_video_block.setAttribute('execution-while-out-of-viewport', '');
    card_video_block.setAttribute('execution-while-not-rendered', '');
    card_video_block.setAttribute('web-share', '');
    // card_video_block.setAttribute('controls', '2');
    // card_video_block.setAttribute('modesbranding', '1');
    // card_video_block.setAttribute('autoplay', '1');
    card_video_block.setAttribute("data-bs-toggle", "modal");
    card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");
    // card_video_block.loop = true;
    // card_video_block.autoplay = true;

    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'VIEW';
    view_button.setAttribute('onclick', 'load_3d_img(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    col_block2.appendChild(view_button);

    card_video_block.id = i;
    col_block2.appendChild(card_video_block);
}

// videos 
var anim_img_container = document.getElementById("animation_container");

for (let i = 0; i < anim_videos.length; i++) {
    document.getElementById("youtube_link").style.display = 'block';
    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    anim_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

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
    view_button.setAttribute('onclick', 'loadimages(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);

    var card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_block.appendChild(card_body);
}

var anim_img_container = document.getElementById("animation_container");

for (let i = 0; i < anim_youtube_videos.length; i++) {

    document.getElementById("modal_video").style.display = 'block';
    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    anim_img_container.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_video_block = document.createElement('iframe');
    card_video_block.title = 'YouTube video player';
    card_video_block.src = anim_youtube_videos[i].videosrc;
    card_video_block.setAttribute('frameborder', '0');
    card_video_block.setAttribute('allowFullScreen', '');
    card_video_block.muted = true;
    // card_video_block.setAttribute('controls', '2');
    // card_video_block.setAttribute('modesbranding', '1');
    // card_video_block.setAttribute('autoplay', '1');
    card_video_block.setAttribute("data-bs-toggle", "modal");
    card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");
    // card_video_block.loop = true;
    // card_video_block.autoplay = true;

    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'PLAY';
    view_button.setAttribute('onclick', 'load_youtube_videos(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);

    card_video_block.id = i;
    card_block.appendChild(card_video_block);

}

// scrolling images 
var cards_anim_container1 = document.getElementById("animation_container1");

for (let i = 0; i < anim_imges_row.length; i++) {

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-img-card';
    cards_anim_container1.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = anim_imges_row[i].imgsrc;
    card_block.appendChild(card_img_block);
}

// illustrator images 
var illustrator_designs = document.getElementById("illustrators_container");

for (let i = 0; i < anim_imges_row1.length; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    illustrator_designs.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement('img');
    card_img_block.src = anim_imges_row1[i].imgsrc;
    card_block.appendChild(card_img_block);

    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'VIEW';
    view_button.setAttribute('onclick', 'load_images(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);
}

// 3d images 
var img_3d_designs = document.getElementById("img_3d_container");

for (let i = 0; i < img_3d_view_info.length; i++) {

    var col_block = document.createElement('div');
    col_block.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-3';
    img_3d_designs.appendChild(col_block);

    var anim_card_block = document.createElement('div');
    anim_card_block.className = 'anim-card';
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement('div');
    card_block.className = 'card';
    anim_card_block.appendChild(card_block);

    var col_block2 = document.createElement('div');
    col_block2.className = 'sketchfab-embed-wrapper';
    card_block.appendChild(col_block2);

    var card_video_block = document.createElement('iframe');
    card_video_block.title = 'Cupboard';
    card_video_block.src = img_3d_view_info[i].videosrc;
    card_video_block.setAttribute('frameborder', '0');
    card_video_block.setAttribute('allowFullScreen', '');
    card_video_block.setAttribute('mozallowFullScreen', 'true');
    card_video_block.setAttribute('webkitallowFullScreen', 'true');
    card_video_block.setAttribute('allow', 'fullscreen;', 'xr-spatial-tracking');
    card_video_block.setAttribute('xr-spatial-tracking', '');
    card_video_block.setAttribute('execution-while-out-of-viewport', '');
    card_video_block.setAttribute('execution-while-not-rendered', '');
    card_video_block.setAttribute('web-share', '');
    // card_video_block.setAttribute('controls', '2');
    // card_video_block.setAttribute('modesbranding', '1');
    // card_video_block.setAttribute('autoplay', '1');
    card_video_block.setAttribute("data-bs-toggle", "modal");
    card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");
    // card_video_block.loop = true;
    // card_video_block.autoplay = true;

    var view_button = document.createElement('button');
    view_button.className = 'view_more';
    view_button.textContent = 'VIEW';
    view_button.setAttribute('onclick', 'load_3d_img(' + i + ')');
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    col_block2.appendChild(view_button);

    card_video_block.id = i;
    col_block2.appendChild(card_video_block);
}

function all_img() {
    document.getElementById("all_container").style.display = "flex";
    document.getElementById('illustrators_container').style.display = 'none';
    document.getElementById("img_3d_container").style.display = "none";
    document.getElementById("animation_container").style.display = "none";
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).style = 'none';
    }
    document.getElementById("opt0").style.color = 'var(--color-neon-dark)';
}

function Illustrator() {
    console.log("working");
    document.getElementById("all_container").style.display = "none";
    document.getElementById('illustrators_container').style.display = 'flex';
    document.getElementById("img_3d_container").style.display = "none";
    document.getElementById("animation_container").style.display = "none";
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).style = 'none';
    }
    document.getElementById("opt1").style.color = 'var(--color-neon-dark)';

}

function img_3d() {
    console.log("working");
    document.getElementById("all_container").style.display = "none";
    document.getElementById("illustrators_container").style.display = "none";
    document.getElementById("img_3d_container").style.display = "flex";
    document.getElementById("animation_container").style.display = "none";
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).style = 'none';
    }
    document.getElementById("opt2").style.color = 'var(--color-neon-dark)';

}

function animation_cont() {
    console.log("working");
    document.getElementById("all_container").style.display = "none";
    document.getElementById("illustrators_container").style.display = "none";
    document.getElementById("img_3d_container").style.display = "none";
    document.getElementById("animation_container").style.display = "flex";
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).style = 'none';
    }
    document.getElementById("opt3").style.color = 'var(--color-neon-dark)';

}

// for (let i = 0; i < anim_imges_row1.length; i++) {

//     var col_block = document.createElement('div');
//     col_block.className = 'col-md-6 col-lg-3 col-xl-3';
//     illustrator_designs.appendChild(col_block);

//     var anim_card_block = document.createElement('div');
//     anim_card_block.className = 'anim-card';
//     col_block.appendChild(anim_card_block);

//     var card_block = document.createElement('div');
//     card_block.className = 'card';
//     anim_card_block.appendChild(card_block);

//     var card_img_block = document.createElement('img');
//     card_img_block.src = anim_imges_row1[i].imgsrc;
//     card_block.appendChild(card_img_block);
// }


// var cards_anim_container2 = document.getElementById("animation_container2");

// for (let i = 0; i < anim_imges_row2.length; i++) {

//     var anim_card_block = document.createElement('div');
//     anim_card_block.className = 'anim-img-card';
//     cards_anim_container2.appendChild(anim_card_block);

//     var card_block = document.createElement('div');
//     card_block.className = 'card';
//     anim_card_block.appendChild(card_block);

//     var card_img_block = document.createElement('img');
//     card_img_block.src = anim_imges_row2[i].imgsrc;
//     card_block.appendChild(card_img_block);

// }
function load_images(id) {
    document.getElementById("modal_img").style.display = 'block';
    document.getElementById("youtube_link").style.display = 'none';
    document.getElementById("modal_video").style.display = 'none';
    document.getElementById("img_3d").style.display = 'none';
    document.getElementById("modal_img").src = anim_imges_row1[id].imgsrc;
}

function loadimages(id) {
    console.log(id)
    document.getElementById("modal_img").style.display = 'none';
    document.getElementById("youtube_link").style.display = 'none';
    document.getElementById("modal_video").style.display = 'block';
    document.getElementById("img_3d").style.display = 'none';
    document.getElementById("modal_video").src = anim_videos[id].videosrc
    console.log(document.getElementById("modal_video").src)
}

function load_youtube_videos(id) {
    // console.log(id)
    document.getElementById("modal_img").style.display = 'none';
    document.getElementById("youtube_link").style.display = 'block';
    document.getElementById("modal_video").style.display = 'none';
    document.getElementById("img_3d").style.display = 'none';
    document.getElementById("youtube_link").src = anim_youtube_videos[id].videosrc
        // console.log(document.getElementById("modal_video").src)
}

function load_3d_img(id) {
    document.getElementById("modal_img").style.display = 'none';
    document.getElementById("youtube_link").style.display = 'none';
    document.getElementById("modal_video").style.display = 'none';
    document.getElementById("img_3d").style.display = 'block';
    document.getElementById("img_3d").src = img_3d_view_info[id].videosrc
}