const companies_logos_info = [
    { imgsrc: "assets/images/client/bulbul-logo.svg" },
    { imgsrc: "assets/images/client/ncert.svg" },
    { imgsrc: "assets/images/client/ritzy-logo.svg" },
    { imgsrc: "assets/images/client/Sanskrit_logo.svg" },
    { imgsrc: "assets/images/client/tv8.svg" },
    { imgsrc: "assets/images/client/cogo-logo.svg" },
    { imgsrc: "assets/images/client/little-einstein-logo.svg" },

]

var companies_section = document.getElementById("companies_logo_section");

for (let i = 0; i < companies_logos_info.length; i++) {
    
    var flex_block = document.createElement("div");
    flex_block.className = "p-2 flex-fill bd-highlight";
    companies_section.appendChild(flex_block);

    var card_block = document.createElement("div");
    card_block.className = "logo";
    flex_block.appendChild(card_block);

    var card_img_block = document.createElement("embed");
    card_img_block.src = companies_logos_info[i].imgsrc;
    card_img_block.alt = "image";
    card_block.appendChild(card_img_block);
}