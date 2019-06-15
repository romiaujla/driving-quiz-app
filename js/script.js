'use strict';

// This function will handle the click on the Retry Quiz Button on the result page. If the user chooses to Retake the Quiz, he will be taken to the first page where the application begins.
function handleRestartingQuiz() {

    // Event Listener for a button click on the Retry Quiz Button on the result page
    $('.quiz-result-page').on('click', '.retry-quiz', function (e) {

        console.log(`Retry Quiz Button Clicked`);
        $('.quiz-result-page').hide();
        $('.quiz-intro-page').show();

    });
}

// Returns the value of the question number in the STORE
function getQuestionNumber(){
    return STORE.questionNumber;
}

// Returns the current score of the user stored in the STORE database
function getScore(){
    return STORE.score;
}

// This function handles the functionality to continue the quiz once the user has seen the answer and proceed to the next question if quiz is completed will take the user to the result screen
function handleContinuationOfTheQuiz() {

    // Event Listener for the Button click on the Continue button on the Answer Page
    $('.quiz-answer-page').on('click', '.continue-button', function (e) {

        console.log(`Continue button clicked`);
        $('.quiz-answer-page').hide();
        $('.quiz-result-page').show();

    });

}

// Return the HTML of the 
function getAnswerPageText(result, qNum)
{
    return `<h2 class="answer-heading ${result}">
                ${result} Answer
            </h2>
            <div class="question-image ${result}">
                <img src="${STORE.questions[qNum].img.src}" alt="${STORE.questions[qNum].img.alt}">
            </div>
            <div class="answer ${result}">
                    ${STORE.questions[qNum].answerInfo}
            </div>
            <button class="continue-button app-button">Continue</button>`;
}

// Will Render the Page depending on the result of the user whether it is correct or not
function renderAsnwerPage(){
    let correctAnswer = true;
    let result = "";
    if(correctAnswer){
        result = "correct"
    }else{
        result = "incorrect"
    }
    const answerHTML = getAnswerPageText(result, getQuestionNumber())
    $('.quiz-answer-page').html(answerHTML);
}

// This function handles the button click on Submit Answer on the question page and takes the user to the answer page and increments the 'score' if the answer is correct 
function handleSubmitAnswer() {

    // Event Listener for the page submit, when user clicks submit
    $('.quiz-question-page').on('submit', 'form', function (e) {

        console.log(`Submit Answer Clicked`);

        // Prevent the page from refreshing automatically as it is a form button
        e.preventDefault();

        // Hide the current Page and then calls the renderAsnwerPage to make the page ready for the answer and fadeIn in the answer page.
        $('.quiz-question-page').fadeOut(200);
        renderAsnwerPage();
        $('.quiz-answer-page').delay(250).fadeIn(200);

    });

}

// Returns the HTML text for the question 
function getQuestionText(qNum) {
    return `<div class="question-page-header">
                <div class="question-num">
                    Question ${qNum+1}/5
                </div>
                <div class="user-score">
                    Score ${getScore()}/${qNum}
                </div>
            </div>
            <div class="quesiton-section">
                <form action="" class="options">
                    <fieldset>
                        <legend role="question">
                            <h3 class="question">
                                ${STORE.questions[qNum].question}
                            </h3>
                        </legend>
                        <div class="question-image" role="question image">
                            <img src="${STORE.questions[qNum].img.src}" alt="${STORE.questions[qNum].img.alt}">
                        </div>
                        <label for="option-a" class="option" id="a">
                        <input type="radio" name="answer-option" id="option-a" value="${STORE.questions[qNum].options[0]}" required>
                        <span class="option-text">${STORE.questions[qNum].options[0]}</span>
                        </label>
                        <label for="option-b" class="option" id="b">
                        <input type="radio" name="answer-option" id="option-b" value="${STORE.questions[qNum].options[1]}" required>
                        <span class="option-text">${STORE.questions[qNum].options[1]}</span>
                        </label>
                        <label for="option-c" class="option" id="c">
                        <input type="radio" name="answer-option" id="option-c" value="${STORE.questions[qNum].options[2]}" required>
                        <span class="option-text">${STORE.questions[qNum].options[2]}</span>
                        </label>
                        <label for="option-d" class="option" id="d">
                        <input type="radio" name="answer-option" id="option-d" value="${STORE.questions[qNum].options[3]}" required>
                        <span class="option-text">${STORE.questions[qNum].options[3]}</span>
                        </label>
                        <button type="submit" class="submit-answer app-button">Submit Answer</button>
                    </fieldset>
                </form>
            </div>`;
}

// This function will add the question's HTML to .quiz-question-page section
function renderQuestionPage() {
    const questionHTML = getQuestionText(getQuestionNumber());
    $('.quiz-question-page').html(questionHTML);
}

// The function handles the functionality of the Start Quiz Button on the first page
function handleStartingTheQuiz() {

    // Event Listener on the start button for the home page
    $('.start-quiz-button').on('click', function (e) {

        console.log(`Start Quiz Clicked`);

        // Hide the current Page and then call the renderQuestion to make the page ready for the questioin to be asked and fadeIn in the question page.
        $('.quiz-intro-page').fadeOut(200);
        renderQuestionPage();
        $('.quiz-question-page').delay(250).fadeIn(200);

    });

}

// The handleQuizApp will call the funnctions for handling the user clicks and all the Quiz app realted functionality will be called here, this is also the main callback function when the page loads. 
function handleQuizApp() {
    handleStartingTheQuiz();
    handleSubmitAnswer();
    handleContinuationOfTheQuiz();
    handleRestartingQuiz();
}

$(handleQuizApp);