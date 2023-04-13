var quizContent = document.querySelector("#quiz");
var flavorText = document.querySelector(".prompt");
var ruleText = document.querySelector(".rules");
var examEl = document.querySelector('#exam');
var timeEl = document.querySelector('#timer');
var questionPromptEl = document.querySelector('.questionPrompt');
var questionOptionsEl = document.querySelector('.questionOptions');
var scoreEl = document.querySelector('#score');
var quizStart = document.querySelector(".start");
var goodEl = document.querySelector("#good");
var badEl = document.querySelector("#bad");
var time = 60;
var timeInterval = 0;
var userScore = 0;
var activeQuestion = 0;
// var rightAnswer = questionAnswers[activeQuestion].answer;

//if (questionAnswers[anwserset].textContent === questionAnswers[currentQuestion].answer)

//on click to change questions currentQuestion.eventListener('click'){
//          if (questionAnswers){
//    currentQuestion ++
//}
//}
// setting up questions and answers.
var questionAnswers = [
    {
        question: "What does HTML stand for?",
        answerset: ["He Tells Me Langugage", "Hello Timmy More Lasagna", "HyperText Markup Language", "HyperTest Markup sLang"],
        answer: "HyperText Markup Language",
    },

    {
        question: ".querySelector is used to effect elements in what programming language?",
        answerset: ["Javascript", "Java", "CSS", "Python"],
        answer: "Javascript"
    },

    {
        question: "When linking a Javascript file to an HTML file, where does it belong on the page?",
        answerset: ["Within the elements you want to affect with Javascript", "Between the end of the main element, and the end of the html element", "In the head element", "At the bottom of the main element"],
        answer: "At the bottom of the main element"
    },

    {
        question: "What is best practice for naming variables?",
        answerset: ["long and descriptive names for what each variable is going to be used for.", "CamelCase", "Use the initials for what the variable is going to be used for.", "Whatever you want."],
        answer: "CamelCase",
    },

    {
        question: "How are arrays indicated in Javascript?",
        answerset: ["Curly braces - {}", "Brackets - []", "Parenthesis - () ", "Quotation marks - ''"],
        answer: "Brackets - []"
    },
];

function userSelectedRight() {
    console.log('right');
    userScore += 10;
    scoreEl.textContent = userScore;
    goodEl.textContent = "Correct!";
    clearText(goodEl);
    activeQuestion++
    questionRoulette();
}
    

function userSelectedWrong() {
    console.log('wrong');
    time -= 10;
    badEl.textContent = "Incorrect!" 
    clearText(badEl);
    activeQuestion++
    questionRoulette();
    
}

function clearText(el) {
    setTimeout(function () {
        el.textContent = "";
    }, 3000);
}

function setScore() {
    examEl.setAttribute("class", "goAway");
    timeEl.setAttribute("class", "goAway");
    
}

function questionRoulette() {
    if(activeQuestion > questionAnswers.length) {
        // run some other function to prompt user name input
        function setScore () {

        }
        // return out of this function
    }

    questionOptionsEl.replaceChildren();
    questionPromptEl.textContent = questionAnswers[activeQuestion].question;
    for (var i = 0; i < 4; i++) {
        var answerChoice = questionAnswers[activeQuestion].answerset[i];
        var answerOption = document.createElement("button");
        answerOption.setAttribute("class", "questions");
        answerOption.textContent = answerChoice;
        questionOptionsEl.append(answerOption);
    }
    
}


questionOptionsEl.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        e.target.textContent === questionAnswers[activeQuestion]["answer"] ? userSelectedRight() : userSelectedWrong();
    }
})

quizStart.addEventListener("click", function () {
    //testing removing whole box 
    quizContent.setAttribute("Class", "goAway");
    examEl.removeAttribute("class", "goAway");
    scoreEl.removeAttribute("class", "goAway");
    timeEl.textContent = time + " seconds remaining";
    // scoreEl.textContent(score)

    timeInterval = setInterval(function () {
        time--;
        timeEl.textContent = time + " seconds remaining";
    }, 1000)

    questionRoulette();

});


