//issues: Timer not stopping at 0
//questions ending not starting setScore function 
//returning from high score list

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
var scoreScreenEl = document.querySelector("#scoreinput");
var topButtonEl = document.querySelector(".highscores");
var topScoreListEl = document.querySelector("#halloffame");
var time = 60;
var timeInterval = 0;
var userScore = 0;
var activeQuestion = 0;
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
    scoreEl.textContent = "Score: " + userScore;
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
    scoreScreenEl.removeAttribute("class", "goAway");
}

// function startAgain() {
//     questionRoulette();
// }

function highScoreList () {
    quizContent.setAttribute("class", "goAway");
    examEl.setAttribute("class", "goAway");
    scoreScreenEl.setAttribute("class", "goAway");
    scoreEl.setAttribute("class", "goAway");
    timeEl.setAttribute("class", "goAway");
    topButtonEl.textContent = "Back to start";
    topScoreListEl.removeAttribute("class", "goAway");
    // topScoresEl.addEventListener("click", questionRoulette);
}

topButtonEl.addEventListener("click", highScoreList);
console.log(activeQuestion);
    console.log(questionAnswers.length);

function questionRoulette() {
    if(activeQuestion > questionAnswers.length); {
        setScore();
        clearInterval(timeInterval);
    }
        questionOptionsEl.replaceChildren();
        questionPromptEl.setAttribute("class", "prompt");
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
    //starting quiz on button click
    quizContent.setAttribute("Class", "goAway");
    examEl.removeAttribute("class", "goAway");
    scoreEl.removeAttribute("class", "goAway");
    timeEl.textContent = time + " seconds remaining";

    timeInterval = setInterval(function () {
        time--;
        timeEl.textContent = time + " seconds remaining";

    }, 1000)
    //starting question loop
    questionRoulette();

});


