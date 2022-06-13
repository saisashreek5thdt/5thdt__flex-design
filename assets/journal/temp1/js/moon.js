function nextpage() {
    document.getElementById("first-page").style.display = "none"
    document.getElementById("second-page").style.display = "block"
}
let Options = document.getElementsByClassName("form-check-input")[i]
if (Options.checked == true) {
    document.getElementById()
}

function submit() {
    let data = document.getElementById("usercontent").value;
    document.getElementById("content").value = data;
    enableSubmit()
}


function textareabox() {
    disableSubmit()
    document.getElementById("textareabox").style.display = "block"

}
// function teaxtareabox2(id) {
// if (id.value != " ") {
// document.getElementsByClassName("btn-primary")[0].style.pointerEvents = "auto";
// }
// }

function hidet() {
    enableSubmit();
    document.getElementById("textareabox").style.display = "none"
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}

function disableSubmit() {
    document.getElementById("submit").style.pointerEvents = "none";
}

function enableSubmit() {
    document.getElementById("submit").style.pointerEvents = "auto";
}