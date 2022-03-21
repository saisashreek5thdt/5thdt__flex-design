const squad_info = [{
        id: 1,
        title: "UI/UX",
        imagesrc: "./assets/images/team/director.svg"
    },
    {
        id: 2,
        title: "Full Stack Development",
        imagesrc: "./assets/images/team/mdirector.svg"
    },
    {
        id: 3,
        title: "React JS",
        imagesrc: "./assets/images/team/founder1.svg"
    },
    {
        id: 4,
        title: "Angular JS",
        imagesrc: "./assets/images/team/founder2.svg"
    },
    {
        id: 5,
        title: "2D Animator",
        imagesrc: "./assets/images/team/sashreek.svg"
    },
    {
        id: 6,
        title: "Illustrators",
        imagesrc: "./assets/images/team/rakesh.svg"
    },
    {
        id: 7,
        title: "Video Editor",
        imagesrc: "./assets/images/team/deepak.svg"
    },
    {
        id: 8,
        title: "Mobile App Developer",
        imagesrc: "./assets/images/team/ranadheer.svg"
    }
];

function showSquadImg(id) {
    console.log("working img");
    for (let i = 0; i < squad_info.length; i++) {
        if (id == squad_info[i].id) {
            document.getElementById("squad-image").src = squad_info[i].imagesrc;
        }
    }
}