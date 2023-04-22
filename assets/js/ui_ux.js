const all_img_info = [
    { imgsrc: "assets/images/projects/project1.png" },
    { imgsrc: "assets/images/projects/project2.png" },
    { imgsrc: "assets/images/projects/project3.png" },
];
const education_img_info = [
    { imgsrc: "assets/images/projects/project1.png" },
    { imgsrc: "assets/images/projects/project2.png" },
];

const clients_logo_info = [
    // { imgsrc: "assets/images/client/cogo-logo.svg" },
    { imgsrc: "assets/images/client/cags-logo.svg" },
    { imgsrc: "assets/images/client/korroboree-logo.svg" },
    { imgsrc: "assets/images/client/tictactoe-logo.svg" },
]
const social_img_info = [{ imgsrc: "assets/images/projects/project3.png" }];

document.getElementById("opt0").style.color = "var(--color-neon-dark)";
// all
var all_img_container = document.getElementById("all_container");

for (let i = 0; i < all_img_info.length; i++) {
    var col_block = document.createElement("div");
    col_block.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3";
    all_img_container.appendChild(col_block);

    var anim_card_block = document.createElement("div");
    anim_card_block.className = "anim-card";
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement("div");
    card_block.className = "card";
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement("img");
    card_img_block.src = all_img_info[i].imgsrc;
    card_block.appendChild(card_img_block);

    var view_button = document.createElement("button");
    view_button.className = "view_more";
    view_button.textContent = "VIEW";
    view_button.setAttribute("onclick", "load_all_images(" + i + ")");
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);
}

var education_img_container = document.getElementById("illustrators_container");

for (let i = 0; i < education_img_info.length; i++) {
    var col_block = document.createElement("div");
    col_block.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3";
    education_img_container.appendChild(col_block);

    var anim_card_block = document.createElement("div");
    anim_card_block.className = "anim-card";
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement("div");
    card_block.className = "card";
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement("img");
    card_img_block.src = education_img_info[i].imgsrc;
    card_block.appendChild(card_img_block);

    var view_button = document.createElement("button");
    view_button.className = "view_more";
    view_button.textContent = "VIEW";
    view_button.setAttribute("onclick", "load_education_images(" + i + ")");
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);
}

var social_img_container = document.getElementById("img_3d_container");

for (let i = 0; i < social_img_info.length; i++) {
    var col_block = document.createElement("div");
    col_block.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3";
    social_img_container.appendChild(col_block);

    var anim_card_block = document.createElement("div");
    anim_card_block.className = "anim-card";
    col_block.appendChild(anim_card_block);

    var card_block = document.createElement("div");
    card_block.className = "card";
    anim_card_block.appendChild(card_block);

    var card_img_block = document.createElement("img");
    card_img_block.src = social_img_info[i].imgsrc;
    card_block.appendChild(card_img_block);

    var view_button = document.createElement("button");
    view_button.className = "view_more";
    view_button.textContent = "VIEW";
    view_button.setAttribute("onclick", "load_social_images(" + i + ")");
    view_button.setAttribute("data-bs-toggle", "modal");
    view_button.setAttribute("data-bs-target", "#exampleModalCenter");
    card_block.appendChild(view_button);
}

function all_img() {
    document.getElementById("all_container").style.display = "flex";
    document.getElementById("illustrators_container").style.display = "none";
    document.getElementById("img_3d_container").style.display = "none";
    for (let i = 0; i < 3; i++) {
        document.getElementById("opt" + i).style = "none";
    }
    document.getElementById("opt0").style.color = "var(--color-neon-dark)";
}

function Illustrator() {
    console.log("working");
    document.getElementById("all_container").style.display = "none";
    document.getElementById("illustrators_container").style.display = "flex";
    document.getElementById("img_3d_container").style.display = "none";
    for (let i = 0; i < 3; i++) {
        document.getElementById("opt" + i).style = "none";
    }
    document.getElementById("opt1").style.color = "var(--color-neon-dark)";
}

function img_3d() {
    console.log("working");
    document.getElementById("all_container").style.display = "none";
    document.getElementById("illustrators_container").style.display = "none";
    document.getElementById("img_3d_container").style.display = "flex";
    for (let i = 0; i < 3; i++) {
        document.getElementById("opt" + i).style = "none";
    }
    document.getElementById("opt2").style.color = "var(--color-neon-dark)";
}

function load_all_images(id) {
    document.getElementById("modal_img").src = "none";
    document.getElementById("modal_img").src = all_img_info[id].imgsrc;
}

function load_education_images(id) {
    document.getElementById("modal_img").src = "none";
    document.getElementById("modal_img").src = education_img_info[id].imgsrc;
}

function load_social_images(id) {
    document.getElementById("modal_img").src = "none";
    document.getElementById("modal_img").src = social_img_info[id].imgsrc;
}

// Companies we are working with 
var companies_section = document.getElementById("companies_logo_section");

for (let i = 0; i < clients_logo_info.length; i++) {
    var card_block = document.createElement("div");
    card_block.className = "logo";
    companies_section.appendChild(card_block);

    var card_img_block = document.createElement("embed");
    card_img_block.src = clients_logo_info[i].imgsrc;
    card_img_block.alt = "image";
    card_block.appendChild(card_img_block);
}