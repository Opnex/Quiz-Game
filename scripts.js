// Define the questions array (corrected from 'question' to 'questions')
const questions = [
    {
        question: "What is 3 + 7?",
        options: ["12", "9", "10", "21"], // Standardized to 'options'
        correctAnswer: 2 
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Earth", "Uranus", "Saturn"],
        correctAnswer: 0
    },
    {
        question: "Multiply 5 by 4",
        options: ["15", "9", "25", "20"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Abuja"],
        correctAnswer: 2
    },
    {
        question: "Who is the father Aluta?",
        options: ["Okeowo", "Asefon", "Clement", "Likedat"],
        correctAnswer: 0
    }
];
console.log(questions);

let score = 0;
let currentQuestionIndex = 0;


const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const optionsEI = document.querySelector(".options");
const submitBtn = document.querySelector(".submit-btn");
const resultsContainer = document.querySelector(".results-container");
const scoreEl = document.querySelector(".score");
const resultsTable = document.querySelector(".results-table");


// Display the current question and options
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    optionsEI.innerHTML = '';
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="option" value="${index}">
            ${option}
        `;
        optionsEI.appendChild(label);
    });
}
console.log(displayQuestion);

// Handle answer submission
function handleSubmit() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert('Please select an answer');
        return;
    }

    const answer = parseInt(selected.value);
    const question = questions[currentQuestionIndex];
    question.userAnswer = answer;
    if (answer === question.correctAnswer) {
        score++;
        question.isCorrect = true;
    } else {
        question.isCorrect = false;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}
console.log(handleSubmit);

// Display the quiz results
function displayResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreEl.textContent = score;
    resultsTable.innerHTML = '';
    questions.forEach((question) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${question.question}</td>
            <td>${question.options[question.userAnswer]}</td>
            <td>${question.options[question.correctAnswer]}</td>
            <td>${question.isCorrect ? 'Correct' : 'Incorrect'}</td>
        `;
        resultsTable.appendChild(row);
    });
}
console.log(displayResults);

// Add event listener to submit button
submitBtn.addEventListener('click', handleSubmit);

// Start the quiz
displayQuestion();

