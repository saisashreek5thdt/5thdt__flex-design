let Id;

function userText(id) {
    Id = id;
}

function submit() {
    let data = document.getElementById("usercontent").value
    document.getElementById(Id).innerText = data;
    document.getElementsByClassName("notes")[Id].style.display = "block"
    document.getElementsByTagName("p1")[Id].style.display = "none"
}

function showtext() {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"
}

// function submit() {
// let data = document.getElementById("usercontent").value;
// document.getElementById("text1").value = data;
// }

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}