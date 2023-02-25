var beginQuiz = document.getElementById("begin");
// var button1 = document.getElementById("1")
// var button2 = document.getElementById("2");
// var button3 = document.getElementById("3");
// var button4 = document.getElementById("4");

function hideunhide(){
  
}

var questions = [
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

alert("You got " + score + "/" + questions.length);

// var question1 = document.getElementById ("q1");

// document.getElementById("box1").addEventListener("click", changeColor);
// function changeColor() {
//   document.getElementById("box1").innerHTML = "CLICK!";
//   document.getElementById("box1").style.backgroundColor = "Green";
// }

document.getElementById("begin").addEventListener('click', event => {
  document.getElementById("questions").classList.remove('hidden')
})