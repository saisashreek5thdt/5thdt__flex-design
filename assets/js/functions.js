// Images section
function images_section(Id) {
  console.log(Id);
  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var card_img_block = document.createElement("img");
  card_img_block.src = index.imgsrc;
  card_block.appendChild(card_img_block);

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "VIEW";
  view_button.setAttribute("onclick", "load_images(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(view_button);
}

// Animated videos section
function videos_section(i) {
  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var card_video_block = document.createElement("video");
  card_video_block.id = i;
  card_block.appendChild(card_video_block);

  var card_source_block = document.createElement("source");
  card_source_block.src = index.videosrc;
  card_source_block.type = "video/mp4";
  card_video_block.appendChild(card_source_block);

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "PLAY";
  view_button.setAttribute("onclick", "loadimages(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(view_button);
}

function videos_section2(i) {
  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var card_video_block = document.createElement("video");
  card_video_block.id = i;
  card_block.appendChild(card_video_block);

  var card_source_block = document.createElement("source");
  card_source_block.src = index.videosrc;
  card_source_block.type = "video/mp4";
  card_video_block.appendChild(card_source_block);

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "PLAY";
  view_button.setAttribute("onclick", "loadimages(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  card_block.appendChild(view_button);
}

// 3D_view image section
function images_3d_section(i) {
  var anim_card_block = document.createElement("div");
  anim_card_block.className = "anim-card";
  col_block.appendChild(anim_card_block);

  var card_block = document.createElement("div");
  card_block.className = "card";
  anim_card_block.appendChild(card_block);

  var col_block2 = document.createElement("div");
  col_block2.className = "sketchfab-embed-wrapper";
  card_block.appendChild(col_block2);

  var card_video_block = document.createElement("iframe");
  card_video_block.title = "Cupboard";
  card_video_block.src = index.videosrc;
  card_video_block.setAttribute("frameborder", "0");
  card_video_block.setAttribute("allowFullScreen", "");
  card_video_block.setAttribute("mozallowFullScreen", "true");
  card_video_block.setAttribute("webkitallowFullScreen", "true");
  card_video_block.setAttribute("allow", "fullscreen;", "xr-spatial-tracking");
  card_video_block.setAttribute("xr-spatial-tracking", "");
  card_video_block.setAttribute("execution-while-out-of-viewport", "");
  card_video_block.setAttribute("execution-while-not-rendered", "");
  card_video_block.setAttribute("web-share", "");
  card_video_block.setAttribute("data-bs-toggle", "modal");
  card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");

  var view_button = document.createElement("button");
  view_button.className = "view_more";
  view_button.textContent = "VIEW";
  view_button.setAttribute("onclick", "load_3d_img(" + i + ")");
  view_button.setAttribute("data-bs-toggle", "modal");
  view_button.setAttribute("data-bs-target", "#exampleModalCenter");
  col_block2.appendChild(view_button);

  card_video_block.id = i;
  col_block2.appendChild(card_video_block);
}

// Youtube videos section
function youtube_videos_section(i) {
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
  card_video_block.src = index.videosrc;
  card_video_block.setAttribute("frameborder", "0");
  card_video_block.setAttribute("allowFullScreen", "");
  card_video_block.muted = true;
  card_video_block.setAttribute("data-bs-toggle", "modal");
  card_video_block.setAttribute("data-bs-target", "#exampleModalCenter");

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
