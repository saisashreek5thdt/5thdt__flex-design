let Id;

function userText(id) {
    Id = id;
}

function submit() {
    let data = document.getElementById("usercontent").value
    document.getElementById(Id).innerText = data;
    document.getElementsByClassName("notes")[Id].style.display = "block"
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}

// function submit() {
// let data = document.getElementById("usercontent").value;
// document.getElementById("content").value = data;
// }