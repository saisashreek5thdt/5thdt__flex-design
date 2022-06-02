function showNext() {
    document.getElementById("firstpage").style.display = "none";
    document.getElementById("secondpage").style.display = "flex";
}

function showPrev() {
    document.getElementById("firstpage").style.display = "flex";
    document.getElementById("secondpage").style.display = "none";
}


function show() {
    document.getElementById("activities-left").style.display = "block";
    document.getElementById("activities-right").style.display = "block";
}

function assesspage() {
    window.location.href = "html/assess.html";
}

function moonshot() {
    window.location.href = "html/moon.html";
}

function powerful() {
    window.location.href = "html/powerful.html";
}

function contrarian() {
    window.location.href = "html/contrarian.html";
}

function kites() {
    window.location.href = "html/kites-activity.html";
}

function wordsMatter() {
    window.location.href = "html/words-matter.html";
}

function jarActivity() {
    window.location.href = "html/jar-activity.html";
}

function videoActivity() {
    window.location.href = "html/video-activity.html";
}

function readingActivity() {
    window.location.href = "html/reading-activity.html";
}

function showSlideBar() {
    document.getElementsByClassName(".footer").style.display = "block";
}

window.onload = (event) => {
    let myAlert = document.querySelectorAll('.toast')[0];
    if (myAlert) {
        let bsAlert = new bootstrap.Toast(myAlert);
        bsAlert.show();
    }
};

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}