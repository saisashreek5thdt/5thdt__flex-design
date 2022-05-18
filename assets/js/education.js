document.getElementById("0").style.color="var(--color-neon-dark)";

function books_option(id){
    console.log(document.getElementsByClassName("mastery_reviews_bg")[i])
    document.getElementsByClassName("mastery_reviews_bg")[i].style.display="block";
    document.getElementsByClassName("low_stakes_practice_bg")[i].style.display="none";
    document.getElementsByClassName("mastery_quizz_bg")[i].style.display="none";
    document.getElementsByClassName("lessons_bg")[i].style.display="none";
    // document.getElementById("#journals").style.display="none";
    // document.getElementById("#comics").style.display="none";
    // document.getElementById("#educators").style.display="none";
    for(let i=0; i<7; i++){
        document.getElementById(i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function journals_option(id){
    document.getElementsByClassName("mastery_reviews_bg")[i].style.display="none";
    document.getElementsByClassName("low_stakes_practice_bg")[i].style.display="block";
    document.getElementsByClassName("mastery_quizz_bg")[i].style.display="none";
    document.getElementsByClassName("lessons_bg")[i].style.display="none";
    for(let i=0; i<7; i++){
        document.getElementById(i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function comics_option(id){
    document.getElementsByClassName("mastery_reviews_bg")[i].style.display="none";
    document.getElementsByClassName("low_stakes_practice_bg")[i].style.display="none";
    document.getElementsByClassName("mastery_quizz_bg")[i].style.display="block";
    document.getElementsByClassName("lessons_bg")[i].style.display="none";
    for(let i=0; i<7; i++){
        document.getElementById(i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}

function educators_option(id){
    document.getElementsByClassName("mastery_reviews_bg")[i].style.display="none";
    document.getElementsByClassName("low_stakes_practice_bg")[i].style.display="none";
    document.getElementsByClassName("mastery_quizz_bg")[i].style.display="none";
    document.getElementsByClassName("lessons_bg")[i].style.display="block";
    for(let i=0; i<7; i++){
        document.getElementById(i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}