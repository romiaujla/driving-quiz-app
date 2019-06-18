'use strict';

// Global Variables
const totalNumberOfQuestions = STORE.questions.length;

// returns the question number
function getQuestionNumber(){
    return STORE.questionNumber;
}
// returns the value of the score
function getScore(){
    return STORE.score;
}
// Increments the question number
function incrementQuestionNumber(){
    ++STORE.questionNumber;
}
// Increments the score
function incrementScore(){
    ++STORE.score;
}

// Resets the score and question number to 0
function resetAllVariables(){
    STORE.score = 0;
    STORE.questionNumber = 0;
}

// This function will handle the click on the Retry Quiz Button on the result page. If the user chooses to Retake the Quiz, he will be taken to the first page where the application begins.
function handleRestartingQuiz() {

    // Event Listener for a button click on the Retry Quiz Button on the result page
    $('.quiz-result-page').on('click', '.retry-quiz', function (e) {

        // Hide current page and then callback the function to reset score and questionNumber and then load the quiz-into-page.
        $('.quiz-result-page').fadeOut(200);
        resetAllVariables();

        // Empty the html from all the other pages.
        $('.quiz-question-page').html('');
        $('.quiz-answer-page').html('');
        $('.quiz-result-page').html('');

        $('.quiz-intro-page').delay(250).fadeIn(200);

    });
}

// Get the HTML for the result page based on the users score and ask to retry the quiz based ont the uesrs result.
function getResultPageHTML(){
    let score = STORE.score;
    return `<h2 class="result-header">Your Result</h2>
            <div class="result">
                <p class="score">Score ${score}</p>
                <p class="total">Out of ${totalNumberOfQuestions}</p>
            </div>
            <div class="result-caption">${STORE.resultCaptions[score]}</div>
            <button class="retry-quiz app-button">Retry Quiz</button>`;
}

// Set the HTML for the result page 
function renderResultPage(){
    const resultHTML = getResultPageHTML();
    $('.quiz-result-page').html(resultHTML);
}

// This function handles the functionality to continue the quiz once the user has seen the answer and proceed to the next question if quiz is completed will take the user to the result screen
function handleContinuationOfTheQuiz() {

    // Event Listener for the Button click on the Continue button on the Answer Page
    $('.quiz-answer-page').on('click', '.continue-button', function (e) {
        
        $('.quiz-answer-page').fadeOut(200);
        incrementQuestionNumber();
        let qNum = getQuestionNumber();

        // Checks if the question number is less than the total number of the questions, if yes then render the next question else render the result page with the users score
        if(qNum < totalNumberOfQuestions){
            renderQuestionPage();
            $('.quiz-question-page').delay(250).fadeIn(200);
        }else{
            renderResultPage();
            $('.quiz-result-page').delay(250).fadeIn(200);
        }

    });

}

// Return the HTML of the answer Page
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



// This function will check if the users selected answer is correct or not.
function checkAnswer(){
    const userAnswer = $('input[name="answer-option"]:checked').val();
    let qNum = getQuestionNumber();
    const correctAnswer = STORE.questions[qNum].answer;

    if(userAnswer === correctAnswer){
        console.log("condition met");
        return true;
    }

    return false;
}

// Will Render the Page depending on the result of the user whether it is correct or not
function renderAsnwerPage(){
    let correctAnswer = checkAnswer();
    let result = "";
    if(correctAnswer){
        result = "correct"
        incrementScore();
    }else{
        result = "incorrect"
    }
    const answerHTML = getAnswerPageText(result, getQuestionNumber());
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
                    Question ${qNum+1}/${totalNumberOfQuestions}
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
                        <input type="radio" name="answer-option" id="option-a" value="0" required>
                        <span class="option-text">${STORE.questions[qNum].options[0]}</span>
                        </label>
                        <label for="option-b" class="option" id="b">
                        <input type="radio" name="answer-option" id="option-b" value="1" required>
                        <span class="option-text">${STORE.questions[qNum].options[1]}</span>
                        </label>
                        <label for="option-c" class="option" id="c">
                        <input type="radio" name="answer-option" id="option-c" value="2" required>
                        <span class="option-text">${STORE.questions[qNum].options[2]}</span>
                        </label>
                        <label for="option-d" class="option" id="d">
                        <input type="radio" name="answer-option" id="option-d" value="3" required>
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

// This function changes the style for the selected input radio button changes the background of the label element so the user is aware of what his/her selection is 
function handleUserAnswerSelection(){    
    $('.quiz-question-page').on("click", "label", function(event){
        if($(this).find('input[type="radio"]').is(':checked')){
            // Remove .selected class from any previous selections
            $('.quiz-question-page label').removeClass('selected');
            // Add the class the new selection that the user has made
            $(this).addClass('selected');
        }
    });
}

// The handleQuizApp will call the funnctions for handling the user clicks and all the Quiz app realted functionality will be called here, this is also the main callback function when the page loads. 
function handleQuizApp() {
    handleStartingTheQuiz();
    handleUserAnswerSelection();
    handleSubmitAnswer();
    handleContinuationOfTheQuiz();
    handleRestartingQuiz();
}

$(handleQuizApp);