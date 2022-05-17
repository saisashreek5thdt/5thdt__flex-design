
var reviews_info = [
    {
    review: "Animation is about creating the illusion of life. And you can't create it if you don't have one.",
    name: "Brad Bird"
},
 {
    review: "Because we strongly believe that Education is everybody's right.",
    name: "Vikram Seth"
}];

var review_container = document.getElementById("reviews_container");
document.getElementById(0).style.pointerEvents="none"
for (let i = 0; i < reviews_info.length; i++) {
    var card_block = document.createElement('div');
    card_block.className = 'card';
    card_block.id = "review_card"+i;
    review_container.appendChild(card_block);

    var review_block = document.createElement('div');
    review_block.className = 'educator-review';
    card_block.appendChild(review_block);

    var review = document.createElement('p');
    review.className = 'educator_review';
    review.textContent = reviews_info[i].review;
    review_block.appendChild(review);

    var name_block = document.createElement('div');
    name_block.className = 'educator-name';
    card_block.appendChild(name_block);

    var edu_name = document.createElement('p');
    edu_name.className = 'educator_name';
    edu_name.textContent = reviews_info[i].name;
    name_block.appendChild(edu_name);

    var profession_block = document.createElement('div');
    profession_block.className = 'profession';
    card_block.appendChild(profession_block);

    var profession = document.createElement('p');
    profession.className = 'educator_profession';
    profession.textContent = '';
    profession_block.appendChild(profession);
    // card_block[0].add('active');
}

document.getElementById(0).style.pointerEvents="none"
document.getElementById("review_card1").style.display="none"
let cards = document.querySelector('.card');
// cards[0].add('active');
let i = 0;
function previous_slide(id) {
    console.log("previous");
    document.getElementById(0).style.pointerEvents="auto"
    document.getElementById(1).style.pointerEvents="none"
    document.getElementById("review_card0").style.display="flex"
    document.getElementById("review_card1").style.display="none"
    // document.getElementsByClassName("card")[i].classList.remove('active');
    // i = (i - 1) % reviews_info.length;
    // document.getElementsByClassName("card")[i].classList.add('active');
}

function next_slide(id) {
    console.log("next");
    document.getElementById(0).style.pointerEvents="none"
    document.getElementById(1).style.pointerEvents="auto"
    document.getElementById("review_card0").style.display="none"
    document.getElementById("review_card1").style.display="flex"
    // document.getElementsByClassName("card")[i].classList.remove('active');
    // i = (i + 1) % reviews_info.length;
    // document.getElementsByClassName("card")[i].classList.add('active');

}