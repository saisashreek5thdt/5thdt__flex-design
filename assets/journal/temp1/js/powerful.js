let Id;

function userText(id) {
    Id = id;
}

function submit() {
    let data = document.getElementById("usercontent").value
    document.getElementById(Id).innerText = data;
    document.getElementsByClassName("notes")[Id].style = 'background-image: linear-gradient(to right, #F2F1EC 10px, transparent 10px), linear-gradient(to left, #F2F1EC 10px, transparent 10px), repeating-linear-gradient(#F2F1EC, #F2F1EC 30px, #ccc 30px, #ccc 31px, #F2F1EC 31px); line-height: 31px; width: 262px; height: 190px;margin-top: -95px; margin-left: 7px; font-size: 11px; font-style: oblique; filter: drop-shadow(0px 0px 0px #707070);  color: grey'
    document.getElementsByClassName("notes")[Id].style.display = "block"
    document.getElementsByTagName("p1")[Id].style.display = "none"
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}


// function userText(id) {
// document.getElementById
// }
// function click(id) {
// Id = document.getElementById(id).value
// console.log(this.Id)
// }

// function submit() {
// let data = document.getElementById("usercontent").value
// document.getElementById("content1").innerHTML = data;
// document.getElementById("content1").style.display = "block"
// document.getElementsByTagName("p1")[0].style.display = "none"
// }
// function maxLength(id) {
// if (!('maxLength' in id)) {
// var max = id.attributes.maxLength.value;
// id.onkeypress = function() {
// if (this.value.length >= max) return false;
// };
// }
// }
// 
// maxLength(document.getElementById("content"));
// 
// document.getElementById('content').onkeyup = function() {
// document.getElementById('count').innerHTML = "Characters left: " + (150 - this.value.length);
// };


// let data1=document.getElementById("content1").value;
// let data2=document.getElementById("usercontent").value;
// let data3=document.getElementById("usercontent").value;
// document.getElementById()

// document.getElementById("staticBackdrop").hidden="true"
// let data1=document.getElementById("usercontent").value;
// let data2=document.getElementById("usercontent").value;
// document.getElementById("content1").value=data1;
// document.getElementById("content2").value=data2;