function show() {
    document.getElementById("text-box-img").style.display = "block";
}

function backbutton() {
    document.getElementById("text-frames-img").style.display = "none";
    document.getElementById("back-button-img").style.display = "none";
    document.getElementById("jar-img").style.display = "block";
    document.getElementById("text-box-img").style.display = "none";
}

function viewall() {
    document.getElementById("text-frames-img").style.display = "block";
    document.getElementById("back-button-img").style.display = "block";
    document.getElementById("jar-img").style.display = "none";
    document.getElementById("text-box-img").style.display = "none";
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}