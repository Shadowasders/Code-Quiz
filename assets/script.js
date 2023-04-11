var quizContent = document.querySelector(".questionbox");
var timer = document.querySelector('#timer');
timer.append('placeholder');



// setting up questions and answers.
var questionAnswers = [
    {
        question: "What does HTML stand for?",
        answerset: ["He Tells Me Langugage", "Hello Timmy More Lasagna", "HyperText Markup Language","HyperTest Markup sLang"],
        answer: "Hypertext Markup Language",
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
        answerset: ["long and descriptive names for what each variable is going to be used for.", "CamelCase", "Use the initials for what the variable is going to be used for.",  "Whatever you want."],
        answer: "CamelCase",
   },
   {
        question: "How are arrays indicated in Javascript?",
        answerset: ["Curly braces - {}", "Brackets - []", "Parenthesis - () ", "Quotation marks - ''"],
        answer: "Brackets - []"
   },
]