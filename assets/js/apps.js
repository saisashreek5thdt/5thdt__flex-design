const companies_logos_info = [
    { imgsrc: "assets/images/client/bulbul-logo.svg" },
    { imgsrc: "assets/images/client/ncert-logo.svg" },
    { imgsrc: "assets/images/client/ritzy-logo.svg" },
    { imgsrc: "assets/images/client/Sanskrit_logo.svg" },
    { imgsrc: "assets/images/client/tv8.svg" },
    { imgsrc: "assets/images/client/bulbul-logo.svg" },
    { imgsrc: "assets/images/client/ncert-logo.svg" },
    { imgsrc: "assets/images/client/ritzy-logo.svg" },
    { imgsrc: "assets/images/client/Sanskrit_logo.svg" },
    { imgsrc: "assets/images/client/tv8.svg" }

]

var companies_section = document.getElementById("companies_logo_section");

for (let i = 0; i < companies_logos_info.length; i++) {
    var card_block = document.createElement("div");
    card_block.className = "logo";
    companies_section.appendChild(card_block);

    var card_img_block = document.createElement("embed");
    card_img_block.src = companies_logos_info[i].imgsrc;
    card_img_block.alt = "image";
    card_block.appendChild(card_img_block);
}