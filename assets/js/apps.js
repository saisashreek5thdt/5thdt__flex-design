const companies_logos_info = [
    { imgsrc: "assets/images/client/bulbul-logo.svg" },
    { imgsrc: "assets/images/client/ncert.svg" },
    { imgsrc: "assets/images/client/ritzy-logo.svg" },
    { imgsrc: "assets/images/client/Sanskrit_logo.svg" },
    { imgsrc: "assets/images/client/tv8.svg" },
    { imgsrc: "assets/images/client/little-einstein-logo.svg" },
    //{ imgsrc: "assets/images/client/cogo-logo.svg" },
];

var companies_section = document.getElementById("companies_logo_section");

for (let i = 0; i < companies_logos_info.length; i++) {
    // var flex_block = document.createElement("div");
    // flex_block.className = "p-2 flex-fill bd-highlight";
    // companies_section.appendChild(flex_block);

    var card_block = document.createElement("div");
    card_block.className = "logo";
    companies_section.appendChild(card_block);

    var card_img_block = document.createElement("embed");
    card_img_block.src = companies_logos_info[i].imgsrc;
    card_img_block.alt = "image";
    card_block.appendChild(card_img_block);
}

////MOBILE APPLICATION SCREEN SHOTS //////

var apps_title = [
    {
        title: "Social Networking APP",
        imgsrc: "assets/images/apps/shots/network landing.jpg",
    },
    {
        title: "NCERT Educational APP",
        imgsrc: "assets/images/apps/shots/menu 1.jpg",
    },
    {
        title: "Sanskriti Curriculum APP",
        imgsrc: "assets/images/apps/shots/notification screen 1.jpg",
    },
];

//Social Networking APP
var app_title_1 = [
    { imgsrc: "assets/images/apps/shots/network landing.jpg" },
    { imgsrc: "assets/images/apps/shots/menu.jpg" }
];

//NCERT Educational APP
var app_title_2 = [
    { imgsrc: "assets/images/apps/shots/menu 1.jpg" },
    { imgsrc: "assets/images/apps/shots/diary.jpg" },
    { imgsrc: "assets/images/apps/shots/notification screen 1.jpg" }
];

//Sanskriti Curriculum APP
var app_title_3 = [
    { imgsrc: "assets/images/apps/shots/home 1.jpg" },
    { imgsrc: "assets/images/apps/shots/screen profile.jpg" },
    { imgsrc: "assets/images/apps/shots/notification screen 1.jpg" }
];

var cards_container_block1 = document.getElementById("cards_container1");
for (let i = 0; i < apps_title.length; i++) {
    var col_block = document.createElement("div");
    col_block.className = "col-xl-5 col-lg-8 col-md-12 col-sm-10";
    cards_container_block1.appendChild(col_block);

    var anchortag = document.createElement("a");
    anchortag.href = "#";
    anchortag.id = "app_title_" + i;
    anchortag.setAttribute("onclick", "loadimages(" + anchortag.id + ")");
    col_block.appendChild(anchortag);

    var card_block = document.createElement("div");
    card_block.className = "card5";
    anchortag.appendChild(card_block);

    var card_img_block = document.createElement("img");
    card_img_block.src = apps_title[i].imgsrc;
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

let arts_info = 0;
let start = 0;
// 2D-Animation
function loadimages(id) {
    arts_info = id;
    start = 0;
    console.log(id);
    // console.log(id[0].imgsrc);
    var animation_2d = document.getElementById("animation_2d");
    var carousel_indicator = document.getElementById("carousel_indicators");
    document.getElementById("animation_2d").innerHTML = "";
    carousel_indicator.innerHTML = "";
    document.getElementById("nextclick").style.pointerEvents = "none";
    document.getElementById("prevclick").style.pointerEvents = "none";

    for (let i = 0; i < arts_info.length; i++) {

        var carousel_img = document.createElement("img");
        carousel_img.src = "";
        carousel_img.src = arts_info[i].imgsrc;
        carousel_img.className = "d-block w-100 thumbnail";
        carousel_img.id = "img" + i;
        carousel_img.alt = "";
        carousel_img.setAttribute("data-bs-target", "#carouselExampleIndicators");
        carousel_img.setAttribute("data-bs-slide-to", i);
        carousel_img.setAttribute("aria-label", "slide " + i);
        carousel_indicator.appendChild(carousel_img);

        // carousel inner
        var card_block = document.createElement("div");
        card_block.className = "carousel-item";
        animation_2d.appendChild(card_block);

        var image_block = document.createElement("img");

        image_block.src = id[i].imgsrc;
        image_block.className = "d-block w-100";
        image_block.alt = "";
        card_block.appendChild(image_block);

        carousel_indicator.firstElementChild.setAttribute("aria-current", "true");
        animation_2d.firstElementChild.classList.add("active");
        carousel_indicator.firstElementChild.classList.add("active");
    }
    if (arts_info.length > 5) {
        document.getElementById("nextclick").style.pointerEvents = "auto";
    }
}

let clicks = 0;

function nextrow() {
    clicks += 1
        // start = clicks * 5;
    start = start + 5;
    document.getElementById("prevclick").style.pointerEvents = "auto";
    // while (start < arts_info.length) {
    for (let i = 0; i < arts_info.length; i++) {
        document.getElementsByClassName("thumbnail")[i].style.setProperty('display', 'none', 'important');
    }
    for (let i = start; i <= start + 4; i++) {
        console.log(i);
        if (document.getElementById("img" + i)) {
            document.getElementById("img" + i).style.setProperty('display', 'block', 'important');
        }
        if ((i + 1) == arts_info.length) {
            document.getElementById("nextclick").style.pointerEvents = "none";
        }
    }

}

function prevrow() {
    for (let i = 0; i < arts_info.length; i++) {
        document.getElementsByClassName("thumbnail")[i].style.setProperty('display', 'none', 'important');
    }
    for (let i = start; i >= start - 5; i--) {
        console.log(i);
        if (document.getElementById("img" + i)) {
            document.getElementById("img" + i).style.setProperty('display', 'block', 'important');
        }
        if (i == 4) {
            document.getElementById("nextclick").style.pointerEvents = "auto";
            document.getElementById("prevclick").style.pointerEvents = "none";
        }
    }
    start = start - 5;
}