var arts_info_main1 = [
  {
    title: "2D-ANIMATION",
    imgsrc: "assets/images/arts/2d-animation/3.jpg",
  },
  {
    title: "2D-BG-GAME",
    imgsrc: "assets/images/arts/2d-bg-game/1.jpg",
  },
  {
    title: "2D-DRAGON-GAME",
    imgsrc: "assets/images/arts/2d-dragon-game/1.jpg",
  },
  {
    title: "2D-GAME-CHARACTER-VARIATION",
    imgsrc: "assets/images/arts/2d-game-character-variation/1.jpg",
  },
  // {
  //     arts_info0: [],
  //     arts_info1: [],
  // }
];
var arts_info_main2 = [
  {
    title: "CAT-CHARACTER",
    imgsrc: "assets/images/arts/cat-character/1.jpg",
  },
  {
    title: "GUILD-MASTER-CONCEPT",
    imgsrc: "assets/images/arts/guild-master-concept/1.jpg",
  },
  {
    title: "MAHABHARATHA-GAME",
    imgsrc: "assets/images/arts/mahabharatha-game/3.jpg",
  },
  {
    title: "STORYBOARD",
    imgsrc: "assets/images/arts/storyboard/1.jpg",
  },
  // {
  //     arts_info0: [],
  //     arts_info1: [],
  // }
];

var arts_info_primary0 = [
  { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/4.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/8.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/9.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/10.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/11.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/12.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/13.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/14.jpg" },
];
var arts_info_primary1 = [
  { imgsrc: "assets/images/arts/2d-bg-game/1.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/2.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/3.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/4.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/5.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/6.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/7.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/8.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/9.jpg" },
  { imgsrc: "assets/images/arts/2d-bg-game/10.jpg" },
];

var arts_info_primary2 = [
  { imgsrc: "assets/images/arts/2d-dragon-game/1.jpg" },
  { imgsrc: "assets/images/arts/2d-dragon-game/2.jpg" },
];

var arts_info_primary3 = [
  { imgsrc: "assets/images/arts/2d-game-character-variation/1.jpg" },
  { imgsrc: "assets/images/arts/2d-game-character-variation/2.jpg" },
  { imgsrc: "assets/images/arts/2d-game-character-variation/3.jpg" },
  { imgsrc: "assets/images/arts/2d-game-character-variation/4.jpg" },
  { imgsrc: "assets/images/arts/2d-game-character-variation/5.jpg" },
];

var arts_info_secondary0 = [
  { imgsrc: "assets/images/arts/cat-character/1.jpg" },
  { imgsrc: "assets/images/arts/cat-character/2.jpg" },
  { imgsrc: "assets/images/arts/cat-character/3.jpg" },
  { imgsrc: "assets/images/arts/cat-character/4.jpg" },
  { imgsrc: "assets/images/arts/cat-character/5.jpg" },
  { imgsrc: "assets/images/arts/cat-character/6.jpg" },
  { imgsrc: "assets/images/arts/cat-character/7.jpg" },
  { imgsrc: "assets/images/arts/cat-character/8.jpg" },
];

var arts_info_secondary1 = [
  { imgsrc: "assets/images/arts/guild-master-concept/1.jpg" },
  { imgsrc: "assets/images/arts/guild-master-concept/2.jpg" },
];

var arts_info_secondary2 = [
  { imgsrc: "assets/images/arts/mahabharatha-game/1.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/2.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/3.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/4.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/5.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/6.jpg" },
  { imgsrc: "assets/images/arts/mahabharatha-game/7.jpg" },
];

var arts_info_secondary3 = [
  { imgsrc: "assets/images/arts/storyboard/1.jpg" },
  { imgsrc: "assets/images/arts/storyboard/2.jpg" },
  { imgsrc: "assets/images/arts/storyboard/3.jpg" },
  { imgsrc: "assets/images/arts/storyboard/4.jpg" },
  { imgsrc: "assets/images/arts/storyboard/5.jpg" },
  { imgsrc: "assets/images/arts/storyboard/6.jpg" },
  { imgsrc: "assets/images/arts/storyboard/7.jpg" },
  { imgsrc: "assets/images/arts/storyboard/8.jpg" },
  { imgsrc: "assets/images/arts/storyboard/9.jpg" },
  { imgsrc: "assets/images/arts/storyboard/10.jpg" },
  { imgsrc: "assets/images/arts/storyboard/11.jpg" },
];

// Left Cards
var cards_container_block1 = document.getElementById("cards_container1");
for (let i = 0; i < arts_info_main1.length; i++) {
  var col_block = document.createElement("div");
  col_block.className = "col-xl-5 col-lg-6 col-md-12 col-sm-12";
  cards_container_block1.appendChild(col_block);

  var anchortag = document.createElement("a");
  anchortag.href = "#";
  anchortag.id = "arts_info_primary" + i;
  anchortag.setAttribute("onclick", "loadimages(" + anchortag.id + ")");
  col_block.appendChild(anchortag);

  var card_block = document.createElement("div");
  card_block.className = "card5";
  anchortag.appendChild(card_block);

  var card_img_block = document.createElement("img");
  card_img_block.src = arts_info_main1[i].imgsrc;
  card_img_block.alt = "image";
  card_img_block.setAttribute("data-bs-toggle", "modal");
  card_img_block.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(card_img_block);

  var card_body = document.createElement("div");
  card_body.className = "card-body";
  card_block.appendChild(card_body);

  var card_body_text = document.createElement("p");
  card_body_text.className = "card-text";
  card_body_text.textContent = arts_info_main1[i].title;
  card_body.appendChild(card_body_text);
}

// Right Cards
var cards_container_block2 = document.getElementById("cards_container2");
for (let i = 0; i < arts_info_main2.length; i++) {
  var col_block = document.createElement("div");
  col_block.className = "col-xl-5 col-lg-5 col-md-12 col-sm-12";
  cards_container_block2.appendChild(col_block);

  var anchortag = document.createElement("a");
  anchortag.href = "#";
  anchortag.id = "arts_info_secondary" + i;
  anchortag.setAttribute("onclick", "loadimages(" + anchortag.id + ")");
  col_block.appendChild(anchortag);

  var card_block = document.createElement("div");
  card_block.className = "card5";
  anchortag.appendChild(card_block);

  var card_img_block = document.createElement("img");
  card_img_block.src = arts_info_main2[i].imgsrc;
  card_img_block.alt = "image";
  card_img_block.setAttribute("data-bs-toggle", "modal");
  card_img_block.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(card_img_block);

  var card_body = document.createElement("div");
  card_body.className = "card-body";
  card_block.appendChild(card_body);

  var card_body_text = document.createElement("p");
  card_body_text.className = "card-text";
  card_body_text.textContent = arts_info_main2[i].title;
  card_body.appendChild(card_body_text);
}

// 2D-Animation
function loadimages(id) {
  let arts_info = id;
  // console.log(arts_info);
  // console.log(id[0].imgsrc);
  var animation_2d = document.getElementById("animation_2d");
  var carousel_indicator = document.getElementById("carousel_indicators");
  document.getElementById("animation_2d").innerHTML = "";
  carousel_indicator.innerHTML = "";
  for (let i = 0; i < arts_info.length; i++) {
    // carousel indicators
    var column_block = document.createElement("div");
    column_block.className = "col g-1";
    carousel_indicator.appendChild(column_block);

    var carousel_img = document.createElement("img");
    carousel_img.src = "";
    carousel_img.src = arts_info[i].imgsrc;
    carousel_img.className = "d-block w-100";
    carousel_img.alt = "";
    carousel_img.setAttribute("data-bs-target", "#carouselExampleIndicators");
    carousel_img.setAttribute("data-bs-slide-to", i);
    carousel_img.setAttribute("aria-label", "slide " + i);
    column_block.appendChild(carousel_img);

    // carousel inner
    var card_block = document.createElement("div");
    card_block.className = "carousel-item";
    animation_2d.appendChild(card_block);

    var image_block = document.createElement("img");
    // var tst = id[i][imgsrc];
    // console.log(id[i])
    image_block.src = id[i].imgsrc;
    // console.log(id[0].imgsrc)
    image_block.className = "d-block w-100";
    image_block.alt = "";
    card_block.appendChild(image_block);
    carousel_indicator.firstElementChild.setAttribute("aria-current", "true");
  }
  // if (arts_info.length >= 5) {
  //     carousel_indicator.firstElementChild.classList.add("not-visible-sx");
  // }
  // var first = document.getElementsByClassName("carousel-inner")
  // var firstChild = document.getElementsByName(animation_2d).firstElementChild;
  // document.getElementById("animation_2d").firstChild(card_block).classList.add('active');
  // first.fi(card_block).classList.add("active");
  // document.getElementsByClassName("carousel-inner").fir
  console.log(carousel_indicator.children[1]);
  animation_2d.firstElementChild.classList.add("active");
  carousel_indicator.firstElementChild.classList.add("active");
}
