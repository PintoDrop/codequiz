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
    // correctAnswer: "Hyper-Text Markup Language!",
    // incorrectAnswer1: "Hiding Text Markup Lists!",
    // incorrectAnswer2: "Hyperbolic Time Means Lazy!",
  },

  {
    prompt: "What does DOM stand for?",
    choices: [
      { text: "Document Obsolete Margin", val: 0},
      { text: "Danger Over Model", val: 0},
      { text: "Document Object Model", val: 1},
    ],
    // answer: "Document Object Model",
  },

  {
    prompt: "What properties make up the box model?",
    choices: [
      { text: "Margin, Padding, Border", val: 1},
      { text: "Border, Font-Size, Flex", val: 0},
      { text: "Function, Header, Float", val: 0},
    ],
    // answer: "Margin, Padding, Border",
  },
];
let count = questions.length * 10;

// function wingGame() {}

// function loseGame() {}

function endQuiz() {
  
}

function initTimer() {
  timer = setInterval(tick, 1000);
  clearTimeout();
}

function tick() {
  count--;
  timerElement.textContent = count;
  console.log(count);
  if (count <= 0) {
    clearInterval(timer);
    return;
  }
}

// call function to end quiz
function endQuiz() {
  return
}

const get = document.getElementById("begin");

// function renderQuestion() {
//   questionsDiv.innerHTML = ''
//   let currentQuestionObj = questions[currentIndex];
//   // console.log(currentQuestionObj);
//   console.log("Quiz Begins");
//   currentQuestion = 0;
//   let promptEL = document.createElement("h1");
//   promptEL.textContent = currentQuestionObj.prompt;
//   questionsDiv.append(promptEL);
//   let val = 0;
  
  
//     for (let i = 0; i < currentQuestionObj.choices.length; i++) {
//       let choice = currentQuestionObj.choices[i];
//       // console.log(choice, 1234);
//       let choiceBtn = document.createElement("button");
//       choiceBtn.className = "choice";
//       choiceBtn.setAttribute("value", choice["val"]);
//       choiceBtn.textContent = `${i+1} ${choice["text"]}`;
//       questionsDiv.appendChild(choiceBtn);
//       val = choice["val"];
//     }
//   return val
// }
function renderQuestion(i, questions, val){
  console.log('this value = ', i, questions, val);
  let text = document.getElementById("text");
  let answers = document.getElementsByClassName("ans");
  console.log(text);
  console.log(answers);
  
  text.innerHTML= questions[i].prompt;

  
  for (let index = 0; index < answers.length; index++) {
    let answer=answers[index];
    // answer.innerHTML=questions[index].choices[index];
    answer.innerHTML = questions[index].choices[index]["text"];
    answer.value = questions[index].choices[index]["val"];
  }
  return i++
}

function loadQuestion(count, question){

}

function getValue() {


}


function begin() {
  console.log("func begin");

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
      // answer: "Document Object Model",
    },

    {
      prompt: "What properties make up the box model?",
      choices: [
        { text: "Margin, Padding, Border", val: 1 },
        { text: "Border, Font-Size, Flex", val: 0 },
        { text: "Function, Header, Float", val: 0 },
      ],
      // answer: "Margin, Padding, Border",
    },
  ];

  let count = 0;
  initTimer();
  count = renderQuestion(count, questions, undefined);
  console.log(1920, count)
  getValue();
  // if (response == questions[i].answer) {
  //   score++;
  //   console.log("Correct!");
  // } else {
    //   console.log("Incorrect");
    // }
    // console.log("You answered " + score + "/" + questions.length + " correctly");
  }
  
  // }
  
  // function {}
  function replay() {
    
  }
  
  questionsDiv.addEventListener("click", function (event) {
    if (event.target.className === "choice") {
      // ****check if correct or not
      console.log(event.target.questions)
      
      currentIndex++
      val = renderQuestion();
      console.log(this);
    }
  });
  
  document.getElementById("begin").addEventListener("click", begin);
  replay();
  // event();
  // endQuiz();
  
  //    if (response == questions[i].answer) {
    //   score++;
    //   alert("Correct!");
    // } else {
      //   alert("Incorrect");
      // }
      // alert("You answered " + score + "/" + questions.length + " correctly");

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
