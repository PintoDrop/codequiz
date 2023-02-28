var score = 0;
var currentIndex = 0;
var questionsDiv = document.getElementById("questions");
var timer;
var timerElement = document.getElementById("timer");

var questions = [
  {
    prompt: "What does HTML stand for?",
    choices: [
      "Hyperbolic Time Means Lazy",
      "Hyper-Text Markup Language",
      "Hiding Text Markup Lists",
    ],
    answer: "Hyper-Text Markup Language",
  },

  {
    prompt: "What does DOM stand for?",
    choices: [
      "Document Obsolete Margin",
      "Danger Over Model",
      "Document Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    prompt: "What properties make up the box model?",
    choices: [
      "Margin, Padding, Border",
      "Border, Font-Size, Flex",
      "Function, Header, Float",
    ],
    answer: "Margin, Padding, Border",
  },
];
var count = questions.length * 10;

// function wingGame() {}

// function loseGame() {}

function initTimer() {
  timer = setInterval(tick, 1000);
  clearTimeout();
}

function tick() {
  count--;
  timerElement.textContent = count;
  console.log(count);
  if (count <= 0) {
    // stop()
    clearInterval(timer);
    // clearTimeout();
    return;
  }
}

// call function to end quiz
// function endQuiz() {
//   clearInterval(myInterval);
//   if (count <= 0) {
//     clearTimeout();
//   if (response == questions[i].answer) {
//     score++;
//     alert("Correct!");
//   } else {
//       alert("Incorrect");

//     }
// }

const get = document.getElementById("begin");

function renderQuestion() {
  questionsDiv.innerHTML = ''
  var currentQuestionObj = questions[currentIndex];
  console.log(currentQuestionObj);
  console.log("Quiz Begins");
  currentQuestion = 0;
  var promptEL = document.createElement("h1");
  promptEL.textContent = currentQuestionObj.prompt;
  questionsDiv.append(promptEL);

  for (var i = 0; i < currentQuestionObj.choices.length; i++) {
    var choice = currentQuestionObj.choices[i];
    console.log(choice);
    var choiceBtn = document.createElement("button");
    choiceBtn.className = "choice";
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = `${i} ${choice}`;
    questionsDiv.appendChild(choiceBtn);
  }
}

function begin() {
  initTimer();
  renderQuestion();
  // if (response == questions[i].answer) {
  //   score++;
  //   // alert("Correct!");
  // } else {
  //   alert("Incorrect");
  // }
  // alert("You answered " + score + "/" + questions.length + " correctly");
}

// }

// function {}

questionsDiv.addEventListener("click", function (event) {
  if (event.target.className === "choice") {
    // check if correct or not
    currentIndex++
    renderQuestion();
  }
});

document.getElementById("begin").addEventListener("click", begin);
endQuiz();

// if (response == questions[i].answer) {
//   score++;
//   alert("Correct!");
// } else {
//   alert("Incorrect");
// }

// question: "What does HTML stand for?",
// choiceA: "Hyperbolic Time Means Lazy",
// choiceB: "Hyper-Text Markup Language",
// choiceC: "Hiding Text Markup Lists",
// correctAnswer: "b",

//   {
//   prompt: "How do you dance?\n (a) Document Obsolete Margin\n (b) Danger Over Model\n (c) Document Object Model",
//   answer: "a"
// },
