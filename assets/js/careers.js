const openings_info = [{
        id: 0,
        title: "UI/UX",
        imagesrc: "./assets/images/career/ui-ux1.svg"
    },
    {
        id: 1,
        title: "Full Stack Development",
        imagesrc: "./assets/images/career/full-stack1.svg"
    },
    {
        id: 2,
        title: "Metaverse",
        imagesrc: "./assets/images/career/react-angular1.svg"
    },
    {
        id: 3,
        title: "Production(2D & 3D)",
        imagesrc: "./assets/images/career/react-angular1.svg"
    },
    {
        id: 4,
        title: "Animator(2D/3D)",
        imagesrc: "./assets/images/career/animator-editor1.svg"
    },
    {
        id: 5,
        title: "Illustrator(2D/3D)",
        imagesrc: "./assets/images/career/illustrator1.svg"
    },
    {
        id: 6,
        title: "Video Editor",
        imagesrc: "./assets/images/career/animator-editor1.svg"
    },
    {
        id: 7,
        title: "Mobile App Developer",
        imagesrc: "./assets/images/career/mobile-dev1.svg"
    }
];

var people_container = document.getElementById("openings_row");

for (let i = 0; i < openings_info.length; i++) {

    // column block
    var col_block = document.createElement('div');
    col_block.className = 'col-md-6 col-lg-4 col-xl-3';
    openings_row.appendChild(col_block);

    // card block
    var card_block = document.createElement('div');
    card_block.className = 'card2';
    col_block.appendChild(card_block);

    // card block image
    var img_block = document.createElement('div');
    img_block.className = 'service_img';
    card_block.appendChild(img_block);

    var image = document.createElement('img');
    image.Id = 'service_img1' + i;
    image.id = image.Id;
    img_block.appendChild(image);
    image.src = openings_info[i].imagesrc;


    // card block name
    var service = document.createElement('div');
    service.className = 'service_name';
    card_block.appendChild(service);

    var heading1 = document.createElement('h4');
    heading1.Id = 'service_name1' + i;
    heading1.id = heading1.Id;
    service.appendChild(heading1);
    heading1.innerText = openings_info[i].title;
    console.log(openings_info[i].title);

    // card block button
    var aply_btn = document.createElement('button');
    aply_btn.className = 'btn-apply';
    // aply_btn.Id = i;
    aply_btn.id = i;
    aply_btn.textContent = 'Apply Now';
    aply_btn.setAttribute('onclick', 'showUploadform(' + i + ')');
    aply_btn.setAttribute('data-bs-toggle', 'modal');
    aply_btn.setAttribute('data-bs-target', '#exampleModal');
    card_block.appendChild(aply_btn);
    console.log(aply_btn.id);
}

function showUploadform(id) {
    console.log(id);
    // console.log("working img");
    for (let i = 0; i < openings_info.length; i++) {
        if (id == openings_info[i].id) {
            document.getElementById("card-title").innerText = openings_info[i].title;
            document.getElementById("card-image").src = openings_info[i].imagesrc;
        }
    }
}
document.getElementById("view_button").onclick = function() {
    window.location = "#openings_list";
};