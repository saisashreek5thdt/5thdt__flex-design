const myquestions = [{
        question: "1. Who is making the Web Standards?",
        optionA: "Mozilla",
        optionB: "Microsoft",
        optionC: "Opera",
        optionD: "The WWW Consortium",
        Answer: "optionD"
    },

    {
        question: "2. Choose the correct HTML tag for largest heading",
        optionA: "Head",
        optionB: "H1",
        optionC: "H6",
        optionD: "Heading",
        Answer: "optionB"
    },
    {
        question: "3. Correct HTML tag for inserting a line break?",
        optionA: "br /br",
        optionB: "lb /",
        optionC: "br /",
        optionD: "br/",
        Answer: "optionD"
    },
    {
        question: "4. Choose the correct HTML tag to make a text bold",
        optionA: "bold",
        optionB: "b",
        optionC: "bb",
        optionD: "br",
        Answer: "optionB"
    },
    {
        question: "5. HTML tag to make a text in italic",
        optionA: "Italic",
        optionB: "I",
        optionC: "It",
        optionD: "Ita",
        Answer: "optionB"
    },
    {
        question: "6. CSS stands for -",
        optionA: "Cascade style sheets",
        optionB: "Color and style sheets",
        optionC: "Cascading style sheets",
        optionD: "Cascading style sheets",
        Answer: "optionC"
    },
    {
        question: "7. Are negative values allowed in padding property?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Can't say",
        optionD: "May be",
        Answer: "optionB"
    },
    {
        question: "8. Which of the following is not a type of combinator?",
        optionA: ">",
        optionB: "~",
        optionC: "+",
        optionD: "*",
        Answer: "optionD"
    },
    {
        question: "9. Which type of CSS is used in the below code?",
        optionA: "Inline CSS",
        optionB: "Internal CSS",
        optionC: "It",
        optionD: "Ita",
        Answer: "optionB"
    },
    {
        question: "10. Which CSS roperty controls the font-size?",
        optionA: "font-size",
        optionB: "font-style",
        optionC: "text-size",
        optionD: "text-style",
        Answer: "optionB"
    }
];

let i = 0;
let j = 0;

function questionsOptions() {
    document.getElementById("question-label").innerText = myquestions[i].question;
    document.getElementById("option1-label").innerHTML = myquestions[i].optionA;
    document.getElementById("option2-label").innerHTML = myquestions[i].optionB;
    document.getElementById("option3-label").innerHTML = myquestions[i].optionC;
    document.getElementById("option4-label").innerHTML = myquestions[i].optionD;
}

function start() {
    document.getElementById("question").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementsByClassName("button")[i].style.backgroundColor = "#3BC195";
    disablePrevButton()
    questionsOptions()
}

// document.getElementsByClassName("option")[i];

function nextQuestion() {
    let Option1 = document.getElementById("option1");
    let Option2 = document.getElementById("option2");
    let Option3 = document.getElementById("option3");
    let Option4 = document.getElementById("option4");

    document.getElementById("input-box1").style = "none";
    document.getElementById("input-box2").style = "none";
    document.getElementById("input-box3").style = "none";
    document.getElementById("input-box4").style = "none";

    if (i < myquestions.length - 1 && (Option1.checked === true || Option2.checked === true || Option3.checked === true || Option4.checked === true)) {

        i++;
        enablePrevButton();
        unCheckRadioButtons();

        document.getElementsByClassName("button")[i - 1].style = " ";
        document.getElementsByClassName("button")[i].style.backgroundColor = "#3BC195";
        document.getElementById("error-text").style.display = "none";
        document.getElementById("prev-button-disable").style.display = "none";
        document.getElementById("prev-button").style.display = "block";

        if (i == myquestions.length - 1) {
            document.getElementById("next-button").style.display = "none"
            document.getElementById("submit-button").style.display = "block"
            document.getElementById("next-button-disable").style.display = "block";
            document.getElementById("next-button2").style.display = "none";
            disableNextButton2();
        }
    } else {
        document.getElementById("error-text").style.display = "block";
    }
    questionsOptions();
}

function prevQuestion() {
    document.getElementById("error-text").style.display = "none";

    if (i == 1) {
        disablePrevButton()
        document.getElementById("prev-button-disable").style.display = "block";
        document.getElementById("prev-button").style.display = "none";
    }

    if (i < myquestions.length) {
        i--;
        enableNextButton2()
        document.getElementById("next-button").style.display = "block"
        document.getElementById("submit-button").style.display = "none"
        document.getElementById("next-button2").style.display = "block";
        document.getElementById("next-button-disable").style.display = "none";
        document.getElementsByClassName("button")[i].style.backgroundColor = "#3BC195"
        document.getElementsByClassName("button")[i + 1].style = " ";
    } else {
        disablePrevButton()
    }
    questionsOptions()
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function saveOption() {
    let Option1 = document.getElementById("option1");
    let Option2 = document.getElementById("option2");
    let Option3 = document.getElementById("option3");
    let Option4 = document.getElementById("option4");
    for (let i = 0; i < myquestions.length; i++) {
        if (Option1.checked === true) {

        } else {

        }

    }

}

function endTest() {
    document.getElementById("options-label").style.display = "none";
    document.getElementById("test1").style.display = "block";
}

function disablePrevButton() {
    document.getElementById("prev-button-disable").style.pointerEvents = "none";
}

function disableNextButton() {
    document.getElementById("next-button").style.pointerEvents = "none";
}

function enableNextButton2() {
    document.getElementById("next-button-disable").style.pointerEvents = "auto";
}

function disableNextButton2() {
    document.getElementById("next-button-disable").style.pointerEvents = "none";
}

function enablePrevButton() {
    document.getElementById("prev-button").style.pointerEvents = "auto";
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none";
}

function correctAnswer(id) {
    document.getElementById("error-text").style.display = "none";
    let selectedOption = document.getElementById(id).value;

    for (let i = 0; i < 4; i++) {
        document.getElementById("input-box1").style = "none";
        document.getElementById("input-box2").style = "none";
        document.getElementById("input-box3").style = "none";
        document.getElementById("input-box4").style = "none";
    }
    if (selectedOption == myquestions[i].Answer) {
        document.getElementById(id).parentElement.style.backgroundColor = "#3BC195";
        document.getElementById(id).parentElement.style.color = "white";

    } else if (selectedOption != myquestions[i].Answer) {
        document.getElementById(id).parentElement.style.backgroundColor = "#FF5B00";
        document.getElementById(id).parentElement.style.color = "white";
    }
}


function submitTest() {
    let Option1 = document.getElementById("option1");
    let Option2 = document.getElementById("option2");
    let Option3 = document.getElementById("option3");
    let Option4 = document.getElementById("option4");

    if (Option1.checked === true || Option2.checked === true || Option3.checked === true || Option4.checked === true) {
        window.location.href = "moon.html";

    } else {
        document.getElementById("error-text").style.display = "block";
    }

}





// function select(id) {
// if (id == 0) {
// disablePrevButton()
// document.getElementById("prev-button-disable").style.display = "block";
// document.getElementById("prev-button").style.display = "none";
// } else if (id == myquestions.length) {
// document.getElementById("next-button").style.display = "none"
// document.getElementById("submit-button").style.display = "block"
// document.getElementById("next-button2").style.display = "none";
// document.getElementById("next-button-disable").style.display = "block";
// }
// for (let i = 0; i < 4; i++) {
// document.getElementById("input-box1").style = "none";
// document.getElementById("input-box2").style = "none";
// document.getElementById("input-box3").style = "none";
// document.getElementById("input-box4").style = "none";
// }
// for (let i = 0; i < myquestions.length; i++) {
// document.getElementsByClassName("button")[i].style = "none";
// }
// document.getElementsByClassName("button")[id].style.backgroundColor = "#3BC195";
// document.getElementById("question-label").innerText = myquestions[id].question;
// document.getElementById("option1-label").innerHTML = myquestions[id].optionA;
// document.getElementById("option2-label").innerHTML = myquestions[id].optionB;
// document.getElementById("option3-label").innerHTML = myquestions[id].optionC;
// document.getElementById("option4-label").innerHTML = myquestions[id].optionD;
// 
// i = id;
// 
// }

//indicators to select particular question


// } else {
// document.getElementById(id).style = "none"
// }

// for (let i = 0; i < 4; i++) {
// let Options = document.getElementsByName("option")[i].value;
// console.log(Options);
// }
// let Option2 = document.getElementById("option2").value;
// let Option3 = document.getElementById("option3").value;
// let Option4 = document.getElementById("option4").value;



// 
// if ((Options.checked === true) && (Options == myquestions[i].Answer)) {
// document.getElementById("input-box").style.backgroundColor = "#3BC195"
// document.getElementById("input-box").style.color = "white"
// } else if (((Options.checked === true) && (Options != myquestions[i].Answer))) {
// document.getElementById("input-box").style.backgroundColor = "#FF5B00"
// document.getElementById("input-box").style.color = "white"
// } else {
// document.getElementById("input-box").style = "none"
// }

// if ((document.getElementById("option2").checked === true) && (Option2 == myquestions[i].Answer)) {
// console.log(myquestions[0].Answer)
// document.getElementById("input-box2").style.backgroundColor = "#3BC195"
// document.getElementById("input-box2").style.color = "white"
// } else if (((document.getElementById("option2").checked === true) && (Option1 != myquestions[i].Answer))) {
// document.getElementById("input-box2").style.backgroundColor = "#FF5B00"
// document.getElementById("input-box2").style.color = "white"
// } else {
// document.getElementById("input-box2").style = "none"
// }

// if ((document.getElementById("option3").checked === true) && (Option3 == myquestions[i].Answer)) {
// console.log(myquestions[0].Answer)
// document.getElementById("input-box3").style.backgroundColor = "#3BC195"
// document.getElementById("input-box3").style.color = "white"
// } else if (((document.getElementById("option3").checked === true) && (Option1 != myquestions[i].Answer))) {
// document.getElementById("input-box3").style.backgroundColor = "#FF5B00"
// document.getElementById("input-box3").style.color = "white"
// } else {
// document.getElementById("input-box3").style = "none"
// }

// if ((document.getElementById("option4").checked === true) && (Option4 == myquestions[i].Answer)) {
// console.log(myquestions[0].Answer)
// document.getElementById("input-box4").style.backgroundColor = "#3BC195"
// document.getElementById("input-box4").style.color = "white"

// } else if (((document.getElementById("option4").checked === true) && (Option1 != myquestions[i].Answer))) {
// document.getElementById("input-box4").style.backgroundColor = "#FF5B00"
// document.getElementById("input-box4").style.color = "white"
// } else {
// document.getElementById("input-box4").style = "none"
// }



// let correctAnswer = document.getElementById("options_label");
// let answerq = myquestions.Answer;
// correctAnswer.addEventListener('click')
// 
// correctAnswer.addEventListener('click', () => {
// let options = document.getElementsByName('option');
// options.forEach((option) => {
// if (answerq == document.getElementsByName('option').value) {
//    document.getElementsByName("option").style.border = "1px solid green";
// }
// })
// });

// function correctAnswer(){
// for(let i = 0 ; i < document.getElementsByName("option").length;){
// let options = document.getElementsByName("option")[i].value;
// console.log(options);
// if(options == myquestions[i].Answer){
//   document.getElementsByClassName("opt").style.border = "2px solid green"
//   i++;
// }
// else{
// document.getElementsByClassName("opt").style.border = "2px solid red"
// }
// }
// }



// function correctAnswer() {
// 
// if(j < document.getElementsByName("option").length){
//  let correctAnswerq = document.getElementsByName("option")[j].value;
//  console.log(correctAnswerq);
// 
// i++
// }
// }



// else if(Option1.checked === false || Option2.checked === false || Option3.checked === false || Option4.checked === false){
// 
// }
// 
// else if(i < myquestions.length - 1) {
// else{
// document.getElementById("next-button").style.display="none"
// document.getElementById("submit-button").style.display="block"
// document.getElementById("prev-button-disable").style.display = "block";
// document.getElementById("next-button-disable").style.display = "block";
// document.getElementById("prev-button").style.display = "none";
// document.getElementById("next-button2").style.display = "none";

// disableNextButton();
// disableNextButton2();
// disablePrevButton();          
// }
// unCheckRadioButtons();           

// function nextQuestion(){
// document.getElementById("question1").style.display = "none";
// document.getElementById("question2").style.display = "block";
// }
// 
// function prev(){
// document.getElementById("question1").style.display = "block";
// document.getElementById("question2").style.display = "none";
// }
// 
// function next(){
// document.getElementById("question1").style.display = "none";
// document.getElementById("question2").style.display = "block";
// }

// let allquestions={
// 
// question:"Who invented js ?",
//   optionA: "Douglas Crockford",
//   optionB: "Sheryl Sandberg",
//   optionC: "Brendan Eich",
//   optionD: "Douglas Eich"
// }
// 
// 
// document.getElementById("option1-label").innerHTML=allquestions.optionA;
// function nextQuestion(index){
//   document.getElementById("display-question").innerHTML.display="block"
//   document.getElementById("option-one-label").innerHTML = currentQuestion.option-A;
//   document.getElementById("option-two-label").innerHTML = currentQuestion.option-B;
//   document.getElementById("option-three-label").innerHTML = currentQuestion.option-C;
//   document.getElementById("option-four-label").innerHTML = currentQuestion.option-D;
// }
// function unCheckRadioButtons() {
//   const options = document.getElementsByName("option");
//   for (let i = 0; i < options.length; i++) {
//   options[i].checked = false;
//   }
// }

// const myquestions = [
// {
//    question:"Who invented js",
//    optionA:"Douglas Crockford",
//    optionB:"Sheryl Sandberg",
//    optionC:"Brendan Eich"
// }  
//   ];
//   
//   
//   document.getElementById("option1-label").innerHTML = myquestions[0].optionA;

// document.getElementById("test1").innerHTML ="You are done with the test";
// document.getElementById("question-label").innerText = myquestions[i].question
// document.getElementById("option1-label").innerHTML = ""
// document.getElementById("option2-label").innerHTML = ""
// document.getElementById("option3-label").innerHTML = ""



// document.getElementById("question-label").innerText = myquestions[0].question
// document.getElementById("option1-label").innerHTML = myquestions[0].optionA;
// document.getElementById("option2-label").innerHTML = myquestions[0].optionB;
// document.getElementById("option3-label").innerHTML = myquestions[0].optionC;
// document.getElementById("option4-label").innerHTML = myquestions[0].optionD;
// document.getElementById("test1").style.display ="none";
// document.getElementById("options_label").addEventListener("click", function() {
// document.getElementsByClassName("opt")[i].style.border = "2px solid green"
//   });
// document.getElementById("option4-label").innerHTML = myquestions[0].optionD;
// document.getElementById("test1").style.display ="none";
// document.getElementById("options_label").addEventListener("click", function() {
// document.getElementsByClassName("opt")[i].style.border = "2px solid green"
//   });
//