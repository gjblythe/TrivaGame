$(document).ready(function() {
  console.log("ready!");
  $("#begin, #select, #timeRemaining, #totals").hide();
  start();
});
var guess = "";
var correct = 0;
var correctAns =[];
var incorrect = 0;
var incorrectAns = [];
var time = 60;
var intervalId;
var gameOver = false;
var progress = 0;
//for loop has caused some trouble for me.
//would like to optoimize with for loop for both the Objects and the coices array

qOne = {
  text: "What two countries are linked by the Brenner Pass?",
  choices: [
    "Peru and Boliva",
    "Austria and Italy",
    "Norway and Finland",
    "Belarus and Ukraine"
  ],
  winner: "Austria and Italy"
};

qTwo = {
  text: "Who is C3-PO's sidekick?",
  choices: ["R4-D5", "IG 88", "R2-D2", "Nien Nunb"],
  winner: "R2-D2"
};

qThree = {
  text: "Who was made the first honorary citizen of the U.S.?",
  choices: [
    "Winston Churchill",
    "Nelson Mandela",
    "Marquis de Lafayette",
    "Charles Dickens"
  ],
  winner: "Winston Churchill"
};

qFour = {
  text: "What is the plural of mongoose?",
  choices: [" Mongeese", " Mongoose", " Mongeeses", "Mongooses"],
  winner: "Mongooses"
};

qFive = {
  text: "What is p.m. an abbreviation for, as in 5 p.m.?",
  choices: ["Pat Morita", "Patriae Mar", "Post Meridiem", "Post Mortem"],
  winner: "Post Meridiem"
};

qSix = {
  text:
    "What city was chosen to host and then refused the 1976 Winter Olympics?",
  choices: ["Denver", "Innsbruck", "Lillehammer", "Montreal"],
  winner: "Denver"
};

for (var i = 0; i < game.length; i++) {
  goRound = question[i];
  console.log(goRound);
};

function question(question) {
  $("#question").text(question.text);
  for (var i = 0; i < question.choices.length; i++) {
    buttons = question.choices[i];
    console.log(buttons);
    $("#questions").append(
      '<button  class="btn btn-secondary btn-lg btn-block">' +
        buttons +
        "</button>"
    );
  };

  $("button").click(function() {
    console.log($(this).text());
    guess = $(this).text();
    if (guess === question.winner) {
      correct++;
      progress++;
      correctAns.push(guess);
      console.log(correctAns);
      $("#questions").empty();
      progressGame();
      console.log(guess);
    } else {
      incorrect++;
      progress++;
      incorrectAns.push(guess)
      $("#questions").empty();
      progressGame();
      console.log(incorrectAns);
    }
    console.log("c" + correct, "i" + incorrect);
  });
  console.log(question.winner);
};

function progressGame() {
  if (progress === 1) {
    question(qTwo);
  } else if (progress === 2) {
    question(qThree);
  } else if (progress === 3) {
    question(qFour);
  } else if (progress === 4) {
    question(qFive);
  } else {
    question(qSix);
  }
};


function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
};
function stop() {
  clearInterval(intervalId);
};

function decrement() {
  time--;
  $("#timeRemaining").show();
  $("#timer").text(time);
  if (time === 0 || progress === 6) {
    stop();
    $("#questions").empty();
    $("#begin, #select, form, #timeRemaining, #questions, #game").hide();
    $("#startButton").show();
    $("#totals, #correct, #incorrect").show();
    $('#correct').text("Correct: " + correct);
    $('#correctAns').text(correctAns);
    $('#incorrect').text("Incorrect: " + incorrect);
    $('#incorrectAns').text(incorrectAns)
  }; 
};

function start(){
$("#startButton").click(function() {
  $("#timeRemaining").show();
  $("#startButton, #totals").hide();
  $("#begin, #select, #game, #questions").show();
  question(qOne);
  run();
  decrement();
  time = 60;
  progress = 0;
  correct = 0;
  incorrect = 0;
  incorrectAns = [];
  correctAns = [];
});
};

