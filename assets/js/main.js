let squad_info = [{
        id: 0,
        name1: "Shri Dr. D.S.N.Rao",
        title: "Chairman",
        imagesrc: "./assets/images/team/director.svg",
    },
    {
        id: 1,
        name1: "Shri Jagadish Prasad Sharma",
        title: "Managing Director",
        imagesrc: "./assets/images/team/mdirector.svg",
    },
    {
        id: 2,
        name1: "Rajiv Sharma",
        title: "Founder",
        imagesrc: "./assets/images/team/founder1.svg",
    },
    {
        id: 3,
        name1: "Priya Niyogi",
        title: "Co Founder",
        imagesrc: "./assets/images/team/founder2.svg",
    },
    {
        id: 4,
        name1: "Sai Sashreek D",
        title: "Team Lead",
        imagesrc: "./assets/images/team/sashreek.svg",
    },
    {
        id: 5,
        name1: "Rakesh Raj",
        title: "Creative Head",
        imagesrc: "./assets/images/team/rakesh.svg",
    },
    {
        id: 6,
        name1: "Deepak Singh",
        title: "Sr.Animator",
        imagesrc: "./assets/images/team/deepak.svg",
    },
];

var reviews_info = [{
    review: "You have been absolutely wonderful for Kinship Center, and I can't thank you enough for all your tremendous skills, support and patience specially during our merger. You will always be Kinship Center's vendor of choice!",
    name: "Liam Olivia",
    profession: "Assitant Professor , University Of Arizona",
}, ];

let i = 0;
var people_container = document.getElementById("team_container");

for (let i = 0; i < squad_info.length; i++) {

    //column block
    var col_block = document.createElement("div");
    col_block.className = "col-md-6 col-lg-4 col-xl-3";
    people_container.appendChild(col_block);

    //ourteam block
    var team_block = document.createElement("div");
    team_block.className = "our-team";
    col_block.appendChild(team_block);

    //image block
    var image_block = document.createElement("div");
    image_block.className = "picture";
    team_block.appendChild(image_block);

    var image = document.createElement("img");
    var imageId = "squad_image" + i;

    image.id = imageId;
    image.alt = "image1";
    image_block.appendChild(image);
    image.src = squad_info[i].imagesrc;
    console.log(image.src);

    //social block
    var social_block = document.createElement("ul");
    social_block.className = "social";
    team_block.appendChild(social_block);

    //ourteam name block
    var name_block1 = document.createElement("li");
    social_block.appendChild(name_block1);

    var name_text1 = document.createElement("a");
    name_text1.className = "name";
    name_text1.href = "#";
    name_text1.Id = "squad_name" + i;
    name_text1.id = name_text1.Id;
    name_block1.appendChild(name_text1);
    name_text1.innerText = squad_info[i].name1;
    console.log(squad_info[i].name1);

    //ourteam title block
    var name_block2 = document.createElement("li");
    social_block.appendChild(name_block2);

    var name_text2 = document.createElement("a");
    name_text2.className = "sub_title";
    name_text2.href = "#";
    name_text2.Id = "title" + i;
    name_text2.id = name_text2.Id;
    name_block2.appendChild(name_text2);
    name_text2.innerText = squad_info[i].title;
}

//Home page reviews
var review_container = document.getElementById("reviews_container");

// for (let i = 1; i <= 1; i++) {
//   var card_block = document.createElement("div");
//   card_block.className = "card d-flex flex-column";
//   card_block.id = i;
//   review_container.appendChild(card_block);

// var quotes = document.createElement('p');
// quotes.className = 'double_quotes';
// card_block.appendChild(quotes);
// var profile = document.createElement('div');
// profile.className = 'profile_pic';
// card_block.appendChild(profile);

// var profile_img = document.createElement('img');
// profile_img.src = '';
// profile.appendChild(profile_img);

// var review_block = document.createElement("div");
// review_block.className = "educator-review double_quotes";
// card_block.appendChild(review_block);

// var review = document.createElement("p");
// review.className = "educator_review";
// review.textContent = reviews_info[0].review;
// review_block.appendChild(review);

// var name_block = document.createElement("div");
// name_block.className = "educator-name";
// card_block.appendChild(name_block);

// var edu_name = document.createElement("p");
// edu_name.className = "educator_name";
// edu_name.textContent = reviews_info[0].name;
// name_block.appendChild(edu_name);

// var profession_block = document.createElement("div");
// profession_block.className = "profession";
// card_block.appendChild(profession_block);

// var profession = document.createElement("p");
// profession.className = "educator_profession";
// profession.textContent = reviews_info[0].profession;
// profession_block.appendChild(profession);

// card_block[0].add('active');
// }

// function showSquadImg(id) {
//     console.log("working img");
//     for (let i = 0; i < squad_info.length; i++) {
//         if (id == squad_info[i].id) {
//             document.getElementById("squad-image").src = squad_info[i].imagesrc;
//         }
//     }
// }

// document.getElementById("domain").onclick = function() {
//     window.location = "#domains";
// }
// document.getElementById("story").onclick = function() {
//     window.location = "#our_story";
// }
// document.getElementById("people").onclick = function() {
//     window.location = "#team_section1";
// }