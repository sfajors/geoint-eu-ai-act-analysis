document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var summaryButtons = document.getElementsByClassName("summary-reveal");

    // Handling collapsible sections
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.opacity = 0;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = 1;
            }
        });
    }

    // Handling summary reveal buttons
    for (var i = 0; i < summaryButtons.length; i++) {
        summaryButtons[i].addEventListener("click", function() {
            var summary = this.nextElementSibling;
            if (summary.style.maxHeight) {
                summary.style.maxHeight = null;
                summary.style.opacity = 0;
            } else {
                summary.style.maxHeight = summary.scrollHeight + "px";
                summary.style.opacity = 1;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What is the main fallacy in Article 5 regarding AI practices?",
            answers: ["Slippery slope", "Hasty generalization", "False dilemma", "Circular reasoning"],
            correctAnswer: "Hasty generalization"
        },
        {
            question: "Which article assumes high-risk classification without specific context?",
            answers: ["Article 6", "Article 10", "Article 12", "Article 15"],
            correctAnswer: "Article 6"
        },
        {
            question: "What fallacy does Article 14 primarily exhibit?",
            answers: ["Appeal to authority", "Hasty generalization", "False dilemma", "Appeal to tradition"],
            correctAnswer: "Appeal to authority"
        },
        {
            question: "Which article's fallacy involves overconfidence in data management?",
            answers: ["Article 10", "Article 12", "Article 15", "Article 8"],
            correctAnswer: "Article 10"
        },
        {
            question: "What is criticized in Article 16's approach to AI system safety?",
            answers: ["Appeal to authority", "Slippery slope", "False dilemma", "Circular reasoning"],
            correctAnswer: "Appeal to authority"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const questionContainer = document.querySelector('.question-container');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const resultContainer = document.getElementById('result');

    function displayQuestion(index) {
        const question = questions[index];
        questionContainer.innerHTML = `
            <h3>${question.question}</h3>
            ${question.answers.map(answer => `<button onclick="selectAnswer('${answer}', '${question.correctAnswer}')" class="answer-btn">${answer}</button>`).join('')}
        `;
    }

    window.selectAnswer = function(answer, correctAnswer) {
        if (answer === correctAnswer) {
            resultContainer.textContent = "Correct!";
            resultContainer.style.color = "green";
            score++;
        } else {
            resultContainer.textContent = "Incorrect. The correct answer was: " + correctAnswer;
            resultContainer.style.color = "red";
        }
        nextBtn.style.display = 'block';
    };

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
            nextBtn.style.display = 'none';
            resultContainer.textContent = '';
        } else {
            showResults();
        }
    });

    function showResults() {
        questionContainer.innerHTML = `<h3>Quiz Completed!</h3><p>Your score is ${score} out of ${questions.length}, which is ${(score / questions.length * 100).toFixed(2)}%.</p>`;
        restartBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        resultContainer.textContent = '';
    }

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion(currentQuestionIndex);
        restartBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        resultContainer.textContent = '';
    });

    displayQuestion(currentQuestionIndex);
});