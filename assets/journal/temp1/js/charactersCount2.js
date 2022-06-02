function countChars(obj) {
    var maxLength = 40;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    if (charRemain == maxLength) {
        document.getElementsByClassName("btn-primary")[0].style.pointerEvents = "none";
    } else if (charRemain < 0) {
        document.getElementsByClassName("btn-primary")[0].style.pointerEvents = "none";
        document.getElementById("charNum").innerHTML = '<span style="margin-left: -140px; margin-top: -12px; position: absolute; font-weight:500;">You have exceeded the maximum limit</span>';
    } else {
        document.getElementById("charNum").innerHTML = '<span style="margin-left: -140px; margin-top: -12px; font-weight:500;"> Remaining char : </span>' + charRemain;
        document.getElementsByClassName("btn-primary")[0].style.pointerEvents = "auto";
    }
}