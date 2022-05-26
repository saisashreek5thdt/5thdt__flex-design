const anim_imges_row = [
  { imgsrc: "assets/images/arts/2d-animation/1.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/2.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/3.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/4.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/5.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/6.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/7.jpg" },
  { imgsrc: "assets/images/arts/2d-animation/8.jpg" },
];
const img_3d__info = [
  { imgsrc: "assets/images/apps/L1.png" },
  { imgsrc: "assets/images/apps/L2.png" },
  { imgsrc: "assets/images/apps/D2.png" },
];
const anim_videos = [
  { videosrc: "assets/video/animation/1.mp4" },
  { videosrc: "assets/video/animation/2.mp4" },
  { videosrc: "assets/video/animation/3.mp4" },
  { videosrc: "assets/video/animation/4.mp4" },
  // { videosrc: 'assets/video/animation/5.mp4' },
  { videosrc: "assets/video/animation/6.mp4" },
  { videosrc: "assets/video/animation/7.mp4" },
  { videosrc: "assets/video/animation/8.mp4" },
];

const anim_youtube_videos = [
  { videosrc: "https://www.youtube.com/embed/4CWfQeja8TQ" },
  { videosrc: "https://www.youtube.com/embed/MmThIEqIub4" },
  { videosrc: "https://www.youtube.com/embed/mBeBuZbQV6w" },
  { videosrc: "https://www.youtube.com/embed/Jh4hBvyfSUc" },
  { videosrc: "https://www.youtube.com/embed/2sRkD6VTYEk" },
];

// const img_3d_view_info = [
//   {
//     videosrc:
//       "https://sketchfab.com/models/5d4544bab3164e3e8e9f76ece1bf08ff/embed",
//   },
//   {
//     videosrc:
//       "https://sketchfab.com/models/323a13f06c2a4445b1db793d5ca96574/embed",
//   },
//   {
//     videosrc:
//       "https://sketchfab.com/models/0d332056d02847a7935c6b31dab29280/embed",
//   },
//   {
//     videosrc:
//       "https://sketchfab.com/models/30fcc954a96a45e0b76b7644becfdaa9/embed",
//   },
// ];


// videos
var anim_img_container = document.getElementById("animation_container");

for (let i = 0; i < anim_videos.length; i++) {
  document.getElementById("youtube_link").style.display = "block";
  var col_block = document.createElement("div");
  col_block.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3";
  anim_img_container.appendChild(col_block);

  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var card_video_block = document.createElement("video");
  // card_video_block.muted = true;
  // card_video_block.loop = true;
  // card_video_block.autoplay = true;
  card_video_block.id = i;
  card_block.appendChild(card_video_block);

  var card_source_block = document.createElement("source");
  card_source_block.src = anim_videos[i].videosrc;
  card_source_block.type = "video/mp4";
  card_video_block.appendChild(card_source_block);

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "PLAY";
  view_button.setAttribute("onclick", "loadimages(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(view_button);

  var card_body = document.createElement("div");
  card_body.className = "card-body";
  card_block.appendChild(card_body);
}

var anim_img_container = document.getElementById("animation_container");

for (let i = 0; i < anim_youtube_videos.length; i++) {
  document.getElementById("modal_video").style.display = "block";
  var col_block = document.createElement("div");
  col_block.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3";
  anim_img_container.appendChild(col_block);

  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var card_video_block = document.createElement("iframe");
  card_video_block.title = "YouTube video player";
  card_video_block.src = anim_youtube_videos[i].videosrc;
  card_video_block.setAttribute("frameborder", "0");
  card_video_block.setAttribute("allowFullScreen", "");
  card_video_block.muted = true;
  // card_video_block.setAttribute('controls', '2');
  // card_video_block.setAttribute('modesbranding', '1');
  // card_video_block.setAttribute('autoplay', '1');
  card_video_block.setAttribute("data-bs-toggle", "modal");
  card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");
  // card_video_block.loop = true;
  // card_video_block.autoplay = true;

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "PLAY";
  view_button.setAttribute("onclick", "load_youtube_videos(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(view_button);

  card_video_block.id = i;
  card_block.appendChild(card_video_block);
}

function loadimages(id) {
  var Id = id;

  switch(Id){
    case 0:
      if(Id == 0){
        document.getElementById("modal_video").src= anim_videos[0].videosrc;
      }
       break;
    case 1:
      if(Id == 1){
        document.getElementById("modal_video").src= anim_videos[1].videosrc;
      }
      break;
    case 2:
      if(Id == 2){
        document.getElementById("modal_video").src= anim_videos[2].videosrc;
      }
      break;
    case 3:
      if(Id == 3){
        document.getElementById("modal_video").src= anim_videos[3].videosrc;
      }
       break;
    case 4:
      if(Id == 4){
        document.getElementById("modal_video").src= anim_videos[4].videosrc;
      }
      break;
    case 5:
      if(Id == 5){
        document.getElementById("modal_video").src= anim_videos[5].videosrc;
      }
       break;
    case 6:
      if(Id == 6){
        document.getElementById("modal_video").src= anim_videos[6].videosrc;
      }
       break;
  }
  document.getElementById("youtube_link").style.display = "none";
  document.getElementById("modal_video").style.display = "block";
  // document.getElementById("img_3d").style.display = "none";
  // document.getElementById("modal_video").src = anim_videos[id].videosrc;
  // console.log(document.getElementById("modal_video").src);
}

function load_youtube_videos(id) {
  // console.log(id)
  document.getElementById("youtube_link").style.display = "block";
  document.getElementById("modal_video").style.display = "none";
  document.getElementById("youtube_link").src =
    anim_youtube_videos[id].videosrc;
}



function pause_video() {
  //   document.getElementById("modal_img").src = "none";
  document.getElementById("youtube_link").src = "none";
  document.getElementById("modal_video").src = "none";
  //   document.getElementById("img_3d").src = "none";
  //   document.getElementById("modal_img").style.display = "none";
  document.getElementById("youtube_link").style.display = "none";
  document.getElementById("modal_video").style.display = "none";
}
