const journal_images0 = [
    {imgsrc:"assets/images/education_images/Activity 6.svg"},
    {imgsrc:"assets/images/education_images/Activity 6-1.svg"},
    {imgsrc:"assets/images/education_images/Activity 6-2.svg"}
];
const journal_images1 = [
    {imgsrc:"assets/images/education_images/Activity 7.svg"},
    {imgsrc:"assets/images/education_images/Activity 7-1.svg"},
    {imgsrc:"assets/images/education_images/Activity 7-2.svg"}
];
const journal_images2 = [
    {imgsrc:"assets/images/education_images/Activity 8.svg"},
    {imgsrc:"assets/images/education_images/Activity 8-1.svg"}
];
const journal_images3 = [
    {imgsrc:"assets/images/education_images/Activity 9.svg"},
    {imgsrc:"assets/images/education_images/Activity 9-1.svg"}
];

document.getElementById("journal_img").src = journal_images0[0].imgsrc;
document.getElementById("a0").style.color="var(--color-neon-dark)";

document.getElementById("journal_images0").style.display = "block";
document.getElementById("journal_images1").style.display = "none";
document.getElementById("journal_images2").style.display = "none";
document.getElementById("journal_images3").style.display = "none";

function journal1(id){
    document.getElementById("journal_img").src = journal_images0[0].imgsrc
    document.getElementById("journal_images0").style.display = "block";
    document.getElementById("journal_images1").style.display = "none";
    document.getElementById("journal_images2").style.display = "none";
    document.getElementById("journal_images3").style.display = "none";
    for(let i=0; i<4; i++){
        document.getElementById("a"+i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function journal2(id){
    document.getElementById("journal_img").src = journal_images1[0].imgsrc
    document.getElementById("journal_images0").style.display = "none";
    document.getElementById("journal_images1").style.display = "block";
    document.getElementById("journal_images2").style.display = "none";
    document.getElementById("journal_images3").style.display = "none";
    console.log(id)
    for(let i=0; i<4; i++){
        document.getElementById("a"+i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function journal3(id){
    document.getElementById("journal_img").src = journal_images2[0].imgsrc;
    document.getElementById("journal_images0").style.display = "none";
    document.getElementById("journal_images1").style.display = "none";
    document.getElementById("journal_images2").style.display = "block";
    document.getElementById("journal_images3").style.display = "none";
    console.log(id)
    for(let i=0; i<4; i++){
        document.getElementById("a"+i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function journal4(id){
    document.getElementById("journal_img").src = journal_images3[0].imgsrc;
    document.getElementById("journal_images0").style.display = "none";
    document.getElementById("journal_images1").style.display = "none";
    document.getElementById("journal_images2").style.display = "none";
    document.getElementById("journal_images3").style.display = "block";
    console.log(id)
    for(let i=0; i<4; i++){
        document.getElementById("a"+i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

let journals_info = 0;
let start = 0;
// 2D-Animation
function load_journal_img(id) {
    journals_info = id;
    start = 0;
    console.log(id);
    // console.log(id[0].imgsrc);
    var animation_2d = document.getElementById("animation_2d");
    var carousel_indicator = document.getElementById("carousel_indicators");
    document.getElementById("animation_2d").innerHTML = "";
    carousel_indicator.innerHTML = "";
    document.getElementById("nextclick").style.pointerEvents = "none";
    document.getElementById("prevclick").style.pointerEvents = "none";

    for (let i = 0; i < journals_info.length; i++) {

        var carousel_img = document.createElement("img");
        carousel_img.src = "";
        carousel_img.src = journals_info[i].imgsrc;
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
    // if (arts_info.length > 5) {
    //     document.getElementById("nextclick").style.pointerEvents = "auto";
    // }
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
        // if ((i + 1) == arts_info.length) {
        //     document.getElementById("nextclick").style.pointerEvents = "none";
        // }
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