let score = 0;
let currentIndex = 0;
let questionsDiv = document.getElementById("questions");
let timer;
let timerElement = document.getElementById("timer");
let correctAnswer;
let incorrectAnswer1;
let incorrectAnswer2;

let questions = [
  {
    prompt: "What does HTML stand for?",
    choices: [
      { text: "Hyperbolic Time Means Lazy!", val: 0 },
      { text: "Hyper-Text Markup Language!", val: 1 },
      { text: "Hiding Text Markup Lists!", val: 0 },
    ],
  },

  {
    prompt: "What does DOM stand for?",
    choices: [
      { text: "Document Obsolete Margin", val: 0 },
      { text: "Danger Over Model", val: 0 },
      { text: "Document Object Model", val: 1 },
    ],
  },

  {
    prompt: "What properties make up the box model?",
    choices: [
      { text: "Margin, Padding, Border", val: 1 },
      { text: "Border, Font-Size, Flex", val: 0 },
      { text: "Function, Header, Float", val: 0 },
    ],
  },
];
let count = questions.length * 10;

// function wingGame() {}

// function loseGame() {}

function endQuiz() {
  clearInterval(timer);
  questionsDiv.innerHTML=""

  //var inputEl = document.createElement();
}

function tick() {
  count--;
  timerElement.textContent = count;
  console.log(count);
  if (count <= 0) {
    endQuiz();
  }
}

const get = document.getElementById("begin");

function renderQuestion() {
  if (currentIndex === 3) {
    endQuiz();
  }

  questionsDiv.innerHTML = "";
  let currentQuestionObj = questions[currentIndex];
  // console.log(currentQuestionObj);
  console.log("Quiz Begins");
  currentQuestion = 0;
  let promptEL = document.createElement("h1");
  promptEL.textContent = currentQuestionObj.prompt;
  questionsDiv.append(promptEL);
  let val = 0;

  for (let i = 0; i < currentQuestionObj.choices.length; i++) {
    let choice = currentQuestionObj.choices[i];
    // console.log(choice, 1234);
    let choiceBtn = document.createElement("button");
    choiceBtn.className = "choice";
    choiceBtn.setAttribute("value", choice["val"]);
    choiceBtn.textContent = `${i + 1} ${choice["text"]}`;
    questionsDiv.appendChild(choiceBtn);
    val = choice["val"];
    choiceBtn.onclick = checkAnswer;
  }
  return val;
}

function getValue() {}

function begin() {
  //console.log("func begin");
  timer = setInterval(tick, 1000);
  renderQuestion();
  getValue();
  //  let questions = [
  //    {
  //      prompt: "What does HTML stand for?",
  //      choices: [
  //        { text: "Hyperbolic Time Means Lazy!", val: 0 },
  //        { text: "Hyper-Text Markup Language!", val: 1 },
  //        { text: "Hiding Text Markup Lists!", val: 0 },
  //      ],
  //    },

  //    {
  //      prompt: "What does DOM stand for?",
  //      choices: [
  //        { text: "Document Obsolete Margin", val: 0 },
  //        { text: "Danger Over Model", val: 0 },
  //        { text: "Document Object Model", val: 1 },
  //      ],
  //      // answer: "Document Object Model",
  //    },

  //    {
  //      prompt: "What properties make up the box model?",
  //      choices: [
  //        { text: "Margin, Padding, Border", val: 1 },
  //        { text: "Border, Font-Size, Flex", val: 0 },
  //        { text: "Function, Header, Float", val: 0 },
  //      ],
  //      // answer: "Margin, Padding, Border",
  //    },
  //  ];

  //  let count = 0;
  //  initTimer();
  //  count = renderQuestion(count, questions, undefined);
  //  console.log(1920, count);
  //  getValue();
}

// }

// function {}
function replay() {}

function checkAnswer(event) {
  console.log(event.target.value);
  currentIndex++;
  if (event.target.value === "0") {
    count -= 5;
  }
  renderQuestion();

}

document.getElementById("begin").addEventListener("click", begin);
replay();

// if (event.target.value === "choice") {
//   // ****check if correct or not
//   //console.log(event.target.questions); not working

//   currentIndex++;
//   val = renderQuestion();
//   console.log(this.event,"THIIIIIISSSSSSS");
// }