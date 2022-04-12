var review_container = document.getElementById("reviews_container");

for (let i = 1; i <= 1; i++) {
    var card_block = document.createElement('div');
    card_block.className = 'card d-flex flex-column';
    card_block.id = i;
    review_container.appendChild(card_block);

    var profile = document.createElement('div');
    profile.className = 'profile_pic';
    card_block.appendChild(profile);

    var profile_img = document.createElement('img');
    profile_img.src = '';
    profile.appendChild(profile_img);

    var review_block = document.createElement('div');
    review_block.className = 'educator-review';
    card_block.appendChild(review_block);

    var review = document.createElement('p');
    review.className = 'educator_review';
    review.textContent = 'Review';
    review_block.appendChild(review);

    var name_block = document.createElement('div');
    name_block.className = 'educator-name';
    card_block.appendChild(name_block);

    var edu_name = document.createElement('p');
    edu_name.className = 'educator_name';
    edu_name.textContent = 'Name' + i;
    name_block.appendChild(edu_name);

    var profession_block = document.createElement('div');
    profession_block.className = 'profession';
    card_block.appendChild(profession_block);

    var profession = document.createElement('p');
    profession.className = 'educator_profession';
    profession.textContent = 'Profession';
    profession_block.appendChild(profession);

    // card_block[0].add('active');
}


let cards = document.querySelector('.card');
// cards[0].add('active');
let i = 0;

function previous_slide() {
    console.log("previous");
    cards[i].classList.remove('active');
    i = (i - 1) % cards.length;
    cards[i].classList.add('active');
}

function next_slide() {
    console.log("next");
    cards[i].classList.remove('active');
    i = (i + 1) % cards.length;
    cards[i].classList.add('active');

}

window.addEventListener("scroll", showFunction);

function showFunction() {
    console.log("you scrolled");
    document.getElementById("worksheet").style.display = "block";

}