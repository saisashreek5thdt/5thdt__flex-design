const description = [{
        id: 1,
        title: "Moana",
        synopsis: "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.",
        imagesrc: "../assets/images/video-activity/sing.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 2,
        title: "Sing",
        synopsis: "A pig (Reese Witherspoon), a mouse (Seth MacFarlane), a porcupine (Scarlett Johansson), a gorilla (Taron Egerton), an elephant (Tori Kelly) and other animals gather at a koala's (Matthew McConaughey) theater for a singing competition",
        imagesrc: "../assets/images/video-activity/sing.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 3,
        title: "Soar",
        synopsis: "Gold Winner of the 42nd Student Academy Awards: A cross between Miyazaki and Pixar, SOAR is an award-winning 3D animated movie about a young girl who must help a tiny boy pilot fly home before it's too late.",
        imagesrc: "../assets/images/video-activity/soar.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 4,
        title: "Brave",
        synopsis: "Brave is set in ancient times in the Scottish kingdom of DunBroch and focuses on a princess named Merida , the daughter of King Fergus and Queen Elinor. When Elinor tells Merida that she must marry a prince, Merida visits a Witch who gives her a spell that will change Elinor's mind.",
        imagesrc: "../assets/images/video-activity/brave.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 5,
        title: "Coco",
        synopsis: "Accompanied by a charming trickster, a young musician embarks on an extraordinary journey through the colorful Land of the Dead to unlock the real story behind his family's history.",
        imagesrc: "../assets/images/video-activity/coco.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 6,
        title: "Inside-out",
        synopsis: "An 11-year-old girl's (Kaitlyn Dias) five emotions try to guide her through a difficult transition after she moves from the Midwest to San Francisco.",
        imagesrc: "../assets/images/video-activity/inside-out.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 7,
        title: "The boy who learned to FLY",
        synopsis: "The Boy Who Learned To Fly is an animated short film showcasing his unique story and what drives him as an elite athlete. From humble beginnings in a Jamaican schoolyard to his ascendence on the world stage, Bolt finds a way to fly past the pressure.",
        imagesrc: "../assets/images/video-activity/fly.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    },
    {
        id: 8,
        title: "Leap",
        synopsis: "After busting out of her rural orphanage, an aspiring ballerina makes her way to the Paris Opera where she joins a class of highly trained dancers who are auditioning for the lead in a production of The Nutcracker ",
        imagesrc: "../assets/images/video-activity/leap.jpg",
        videosrc: "../assets/videos/video-activity/5thdt-video.mp4"
    }
];

function show(id) {
    for (let i = 0; i < description.length; i++) {
        if (id == description[i].id) {
            document.getElementById("movie-title").innerHTML = description[i].title;
            document.getElementById("movie-synopsis").innerHTML = description[i].synopsis;
            document.getElementById("video").src = description[i].videosrc;
            document.getElementById("play-icon").style.display = "none";
        }
    }
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}

// for (let i = 0; i < description.length; i++) {
// const div = document.createElement("div")
// const a = document.createElement("a")
// div.appendChild(a)
// const image = document.createElement("img")
// image.appendChild(a)
// document.getElementById("rowtest").innerHTML = "";
// 
// }

// for (description[i].length; i++;) {
// const div = document.createElement("div")
// const col = document.createElement("col")
// document.getElementById("").appendChild(div).appendChild(col).appendChild(imagesrc) = description[i].imagesrc;

// `<div class="col">
// <a href="#" onclick="show('description[i].id')" id="description[i].id"><img class="movie-icon" src="description[i].imagesrc" alt="moana-img"></a>
// <
// /div>`