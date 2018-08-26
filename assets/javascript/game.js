var correct = 0;
var incorrect = 0;
var time = 5;
var intervalId;
var gameOver = false;
// var right = ['Austria and Italy, R2-D2, Winston Churchill, Mongooses, Post Meridiem, Denver']
var questions = [$('#question1'), $('#question2'), $('#question3'), $('#question4'), $('#question5'), $('#question6')]
for (var i = 0; i <= questions.length; i++){
  var current = questions[i]
  console.log(current)
}

$(document).ready(function() {
  console.log("ready!");
  setUp();
});

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
};

function setUp() {
  $( "#question1, #question2, #question3 , #question4, #question5, #question6, #timeRemaining, #submit, #totals"
  ).hide();
};

$("#startButton").click(function() {
  $("#question1").show();
  $("#timeRemaining").show();
  $("#submit").show();
  $("#startButton").hide();
  run();
  decrement();
  time = 5;
 
});

$("input").click(function(){
  if ($('input:checked').val() === "true"){
  correct++;
    $('#question1').hide();
    $('#question2').show();
  } else {
    incorrect++;
    $('#question1').hide();
    $('#question2').show();
  }
  });

 
  


//if statments 

// try clicks








function decrement() {
  time--;

  $("#timer").text(time);

  if (time === 0) {
    gameOver = true;
    clearInterval(intervalId);
    setUp();
    $("#startButton").show();
    $("#totals").show();
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
  }
};



