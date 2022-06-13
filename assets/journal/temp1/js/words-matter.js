function showPage2() {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
    document.getElementById("third-page").style.display = "none";
}

function showPage3() {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "none";
    document.getElementById("third-page").style.display = "block";
}

function back() {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
    document.getElementById("third-page").style.display = "none";
}

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