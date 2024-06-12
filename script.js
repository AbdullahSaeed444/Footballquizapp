const quiz = [
    {
        question: "Who won the 2000 UEFA EUROS",
        ans1text: "England",
        ans2text: "Germany",
        ans3text: "France",
        ans4text: "Portugal",
        answer: "France",
    },
    {
        question: "Which of the following player never played for FC Barcelona",
        ans1text: "Andre Gomes",
        ans2text: "Ricardo Quaresma",
        ans3text: "Ronald Koeman",
        ans4text: "Marco Van Basten",
        answer: "Marco Van Basten",
    },{
        question: "Who have scored the most amound of Fifa World Cup Goals",
        ans1text: "Klose",
        ans2text: "Messi",
        ans3text: "C. Ronaldo",
        ans4text: "Ronaldo Nazrio",
        answer: "Klose",
    },
    {
        question: "What year did Arsenal Lost Uefa Champions League Final",
        ans1text: "2006",
        ans2text: "1999",
        ans3text: "2003",
        ans4text: "2007",
        answer: "2006",

    }
]

const question = document.querySelector("#quiz-question");
console.log(question);
console.log(question.textContent);
const questiona = document.querySelector("#text_option_a");
const questionb = document.querySelector("#text_option_b");
const questionc = document.querySelector("#text_option_c");
const questiond = document.querySelector("#text_option_d");
console.log(questiona.textContent);
console.log(questionb.textContent);
console.log(questionc.textContent);
console.log(questiond.textContent);
const answer = document.querySelector(".answer");
const submit = document.querySelector("#submit");

let currentQuestion = 0;
let score = 0;
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
questiona.textContent = quiz[currentQuestion].ans1text;
questionb.textContent = quiz[currentQuestion].ans2text;
questionc.textContent = quiz[currentQuestion].ans3text;
questiond.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            questiona.textContent = quiz[currentQuestion].ans1text;
            questionb.textContent = quiz[currentQuestion].ans2text;
            questionc.textContent = quiz[currentQuestion].ans3text;
            questiond.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});