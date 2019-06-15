'use strict';

// This function will handle the click on the Retry Quiz Button on the result page. If the user chooses to Retake the Quiz, he will be taken to the first page where the application begins.
function handleRestartingQuiz(){

    // Event Listener for a button click on the Retry Quiz Button on the result page
    $('.quiz-result-page').on('click','.retry-quiz',function(e){

        console.log(`Retry Quiz Button Clicked`);
        $('.quiz-result-page').hide();
        $('.quiz-intro-page').show();

    });
}

// This function handles the functionality to continue the quiz once the user has seen the answer and proceed to the next question if quiz is completed will take the user to the result screen
function handleContinuationOfTheQuiz(){

    // Event Listener for the Button click on the Continue button on the Answer Page
    $('.quiz-answer-page').on('click','.continue-button',function(e){

        console.log(`Continue button clicked`);
        $('.quiz-answer-page').hide();
        $('.quiz-result-page').show();

    });

}


// This function handles the button click on Submit Answer on the question page and takes the user to the answer page and increments the 'score' if the answer is correct 
function handleSubmitAnswer(){

    // Event Listener for the page submit, when user clicks submit
    $('.quiz-question-page').on('submit', 'form', function(e){

        console.log(`Submit Answer Clicked`);

        // Prevent the page from refreshing automatically as it is a form button
        e.preventDefault();
        
        $('.quiz-question-page').hide();
        $('.quiz-answer-page').show();

    });

}

// The function handles the functionality of the Start Quiz Button on the first page
function handleStartingTheQuiz(){

    // Event Listener on the start button for the home page
    $('.start-quiz-button').on('click',function (e){

        console.log(`Start Quiz Clicked`);
        $('.quiz-intro-page').hide();
        $('.quiz-question-page').show();

    });

}

// The handleQuizApp will call the funnctions for handling the user clicks and all the Quiz app realted functionality will be called here, this is also the main callback function when the page loads. 
function handleQuizApp(){
    handleStartingTheQuiz();
    handleSubmitAnswer();
    handleContinuationOfTheQuiz();
    handleRestartingQuiz();
}

$(handleQuizApp);