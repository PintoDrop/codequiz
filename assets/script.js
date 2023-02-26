// var button1 = document.getElementById("1")
// var button2 = document.getElementById("2");
// var button3 = document.getElementById("3");
// var button4 = document.getElementById("4");
var beginBTN = document.getElementById("begin")
var beginQuiz = document.getElementById("begin");

const get=document.getElementById('begin');
get.click();

function clickEvent(){
  console.log("Click Even triggered")
  currentQuestion= 0;
  
  let questions = [
  {
    prompt: "What does HTML stand for?\n (a) Hyperbolic Time Means Lazy\n (b) Hyper-Text Markup Language\n (c) Hiding Text Markup Lists",
    answer: "b"
  },
  {
    prompt: "What does DOM stand for?\n (a) Document Obsolete Margin\n (b) Danger Over Model\n (c) Document Object Model",
    answer: "c"
  } 
  ]
  var score = 0;
  
  for(var i=0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++; 
    alert("Correct!");    
  } else {
    alert("Incorrect");
  }
  }
  
  alert("You answered " + score + "/" + questions.length + " correctly");
}


// var sec = 25;
// var time = setInterval(myTimer, 1000);

// function myTimer(){
//   document.getElementById('timer').innerHTML = sec + ('sec left');
//   sec--;
//   if (sec == -1) {
//     clearInterval(time);
//     alert ('Times up!' : (''));
//   } 
// }

// document.getElementById("begin").addEventListener("click", () => {
//   startQuiz();
//   var questions = startQuiz();
//   document.getElementById("questions")
// });

document.getElementById("begin").addEventListener('click', event => {
  // questions();
  document.getElementById("questions").classList.remove('hidden')
})