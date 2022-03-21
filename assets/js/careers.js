const info = [{
        id: 1,
        title: "UI/UX",
        imagesrc: "./assets/images/career/ui-ux1.svg"
    },
    {
        id: 2,
        title: "Full Stack Development",
        imagesrc: "./assets/images/career/full-stack1.svg"
    },
    {
        id: 3,
        title: "React JS",
        imagesrc: "./assets/images/career/react-angular1.svg"
    },
    {
        id: 4,
        title: "Angular JS",
        imagesrc: "./assets/images/career/react-angular1.svg"
    },
    {
        id: 5,
        title: "2D Animator",
        imagesrc: "./assets/images/career/animator-editor1.svg"
    },
    {
        id: 6,
        title: "Illustrators",
        imagesrc: "./assets/images/career/illustrator1.svg"
    },
    {
        id: 7,
        title: "Video Editor",
        imagesrc: "./assets/images/career/animator-editor1.svg"
    },
    {
        id: 8,
        title: "Mobile App Developer",
        imagesrc: "./assets/images/career/mobile-dev1.svg"
    }
];

function showUploadform(id) {
    console.log("working img");
    for (let i = 0; i < info.length; i++) {
        if (id == info[i].id) {
            document.getElementById("card-title").innerText = info[i].title;
            document.getElementById("card-image").src = info[i].imagesrc;
        }
    }
}
// showUploadform(id); {
//     let i = id;
//     let Id = data.id[i];
//     let imagePath = data.id[i].imgpath
//     if (i == Id) {
//         document.getElementById("")
//     }
// };