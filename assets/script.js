//REF- Local storage file in week2 folder 26
let startBtn = document.querySelector(".start-btn");
let displayQuestion = document.querySelector("#displayQuestion");
let displayAnswers1 = document.querySelector(".option1");
let displayAnswers2 = document.querySelector(".option2");
let displayAnswers3 = document.querySelector(".option3");
let displayAnswers4 = document.querySelector(".option4");
let displayAnswers5 = document.querySelector(".option5");
let timerDisplay = document.querySelector(".timer");
let playerName = document.querySelector(".playerName");
let playerScore = document.querySelector(".playerScore");
let score = localStorage.getItem("savedScore") || 0;
let highScore = 0;
let timeLeft = 100;
let isPlaying = false;
let playerInput = "";

//questions array
var questionList = [
  { question: "1 + 2?", answers: [3, 4, 5, 6, 22], correctAnswer: "3" },
  { question: "2 + 2?", answers: [3, 4, 5, 6, 32], correctAnswer: "4" },
  { question: "3 + 2?", answers: [3, 4, 5, 6, 8], correctAnswer: "5" },
  { question: "4 + 2?", answers: [3, 4, 5, 6, 9], correctAnswer: "6" },
  { question: "5 + 2?", answers: [71, 4, 5, 6, 7], correctAnswer: "7" },
];
let correctAnswer1 = questionList[0].correctAnswer;
let correctAnswer2 = questionList[1].correctAnswer;
let correctAnswer3 = questionList[2].correctAnswer;
let correctAnswer4 = questionList[3].correctAnswer;
let correctAnswer5 = questionList[4].correctAnswer;

let selectedQuestion = questionList[0].question;
let selectedAnswers1 = questionList[0].answers[0];
let selectedAnswers2 = questionList[0].answers[1];
let selectedAnswers3 = questionList[0].answers[2];
let selectedAnswers4 = questionList[0].answers[3];
let selectedAnswers5 = questionList[4].answers[4];

function goTime() {
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (!timeLeft) {
      clearInterval(timer);
      timeLeft = 100;
    }
  }, 1000);
  question1();

  //current question\
  // console.log(questionList[0].question);
  // console.log(questionList[0].answers[0]);

  //timeLeft
  function question1() {
    displayQuestion.textContent = selectedQuestion;
    displayAnswers1.textContent = selectedAnswers1;
    displayAnswers2.textContent = selectedAnswers2;
    displayAnswers3.textContent = selectedAnswers3;
    displayAnswers4.textContent = selectedAnswers4;
    displayAnswers5.textContent = selectedAnswers5;
  }
  function right1() {
    if (selectedAnswers1 == correctAnswer1) {
      score++;
      console.log("win1");
      question2();
    }
  }
  function question2() {
    let selectedQuestion = questionList[1].question;
    let selectedAnswers1 = questionList[1].answers[0];
    let selectedAnswers2 = questionList[1].answers[1];
    let selectedAnswers3 = questionList[1].answers[2];
    let selectedAnswers4 = questionList[1].answers[3];
    let selectedAnswers5 = questionList[1].answers[4];
    displayQuestion.textContent = selectedQuestion;
    displayAnswers1.textContent = selectedAnswers1;
    displayAnswers2.textContent = selectedAnswers2;
    displayAnswers3.textContent = selectedAnswers3;
    displayAnswers4.textContent = selectedAnswers4;
    displayAnswers5.textContent = selectedAnswers5;
  }
  function right2() {
    if (selectedAnswers2 == correctAnswer2) {
      score++;
      console.log("win2");
      question3();
    }
  }
  function question3() {
    let selectedQuestion = questionList[2].question;
    let selectedAnswers1 = questionList[2].answers[0];
    let selectedAnswers2 = questionList[2].answers[1];
    let selectedAnswers3 = questionList[2].answers[2];
    let selectedAnswers4 = questionList[2].answers[3];
    let selectedAnswers5 = questionList[2].answers[4];
    displayQuestion.textContent = selectedQuestion;
    displayAnswers1.textContent = selectedAnswers1;
    displayAnswers2.textContent = selectedAnswers2;
    displayAnswers3.textContent = selectedAnswers3;
    displayAnswers4.textContent = selectedAnswers4;
    displayAnswers5.textContent = selectedAnswers5;
  }
  function right3() {
    if (selectedAnswers3 == correctAnswer3) {
      score++;
      console.log("win3");
      question4();
    }
  }
  function question4() {
    let selectedQuestion = questionList[3].question;
    let selectedAnswers1 = questionList[3].answers[0];
    let selectedAnswers2 = questionList[3].answers[1];
    let selectedAnswers3 = questionList[3].answers[2];
    let selectedAnswers4 = questionList[3].answers[3];
    let selectedAnswers5 = questionList[3].answers[4];
    displayQuestion.textContent = selectedQuestion;
    displayAnswers1.textContent = selectedAnswers1;
    displayAnswers2.textContent = selectedAnswers2;
    displayAnswers3.textContent = selectedAnswers3;
    displayAnswers4.textContent = selectedAnswers4;
    displayAnswers5.textContent = selectedAnswers5;
  }
  function right4() {
    if (selectedAnswers4 == correctAnswer4) {
      score++;
      console.log("win4");
      question5();
    }
  }
  function question5() {
    let selectedQuestion = questionList[4].question;
    let selectedAnswers1 = questionList[4].answers[0];
    let selectedAnswers2 = questionList[4].answers[1];
    let selectedAnswers3 = questionList[4].answers[2];
    let selectedAnswers4 = questionList[4].answers[3];
    let selectedAnswers5 = questionList[4].answers[4];
    displayQuestion.textContent = selectedQuestion;
    displayAnswers1.textContent = selectedAnswers1;
    displayAnswers2.textContent = selectedAnswers2;
    displayAnswers3.textContent = selectedAnswers3;
    displayAnswers4.textContent = selectedAnswers4;
    displayAnswers5.textContent = selectedAnswers5;
    console.log(selectedAnswers5, questionList[4].answers[4]);
  }
  function right5() {
    if (selectedAnswers5 == correctAnswer5) {
      score++;
      console.log("win 5");
      endGame();
    }
  }

  // console.log(score);

  displayAnswers1.addEventListener("click", right1);
  displayAnswers2.addEventListener("click", right2);
  displayAnswers3.addEventListener("click", right3);
  displayAnswers4.addEventListener("click", right4);
  displayAnswers5.addEventListener("click", right5);
}

function endGame() {
  clearInterval(timer);

  localStorage.setItem("savedScore", score);
  let playerInput = prompt("what be your name?");
  playerName.textContent = playerInput;
  playerScore.textContent = score;
  isPlaying = false;
}
//start timer
//setup 1st question

//timer
//setInterval()
//render to page

//loadQuestion
//render the question with multi choice
// current question ++

//checkAnswer
//check which button was clicked
//compare to right answer
// act on right/wrong
//loadQuestion()

//end game
//called at end of timer or when the current question > # of questions
//cancel timer
// prompt for initials
//local storage
//1) read ls and store in js var
//2) check if null
//3)update js var with new score
//4) render to page
//5) save updated var
// make highScore visible

//prompt play again
//start game
//triggered event listener on start game btn
startBtn.addEventListener("click", goTime);
