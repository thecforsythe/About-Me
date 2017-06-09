'use strict'; //program will read this string and read the file accordingly

//Welcome
var userName = prompt ('Before we play the About Chuck guessing game, please enter your name.');
alert('Welcome ' + userName + '! Lets get started.' );

//Function 0 - a generic Function

//Array of user prompts
var userPrompts = ['True or False, Chuck\'s full name is Charles Forsythe?',
'True or False, Chuck once lived in Colorado?',
'True or False, Chuck Chuck is a painter by training?',
'True or False, Chuck a father?',
'True or False, Chuck wants to work for you?'];

 //Array of correct answers
 var correctAnswers = ['FALSE',
 'TRUE',
 'FALSE',
 'TRUE',
 'TRUE'];

//Array of user alerts when anser is correct
var correctAlerts = ['Way to go ' + userName + ', that is correct!','You got it!', 'Bingo!', 'Right!', 'You got that darn right!'];

//Array of user alerts when anser is wrong
var incorrectAlerts = ['WRONG!!!','Nope!','Negative, Ghost Rider', 'Too Bad', 'False']

//Array of confirm statments after answer is stated
var followUpConfirm = [/*1*/ 'Chuck is a nickname his parents decided to call him for fun! And it stuck... Chuck\'s real name is Christopher. Your score is ' + score + '.',
/*2*/
 'While Chuck currently resides in Iowa, he has also lived in Minnesota, Pennsylvania, New York and Colorado. That\'s where he met his lovely wife Nicole. Your score is ' + score + '.',
 /*3*/ 'Chuck earned an MFA from the University of Iowa in Printmaking. Printmaking is the utilization of historic and contemporary technology to reproduce images for artistic purposes. In grad school Chuck made prints featuring bacteria, among other things, which were visual metaphores for the existing world around us that goes unseen or un-noticed... Kind of like Javascript! Your score is ' + score + '.',
 /*4*/
 'Hard to believe but Chuck is the father of a 6 year old named Colin. Colin likes to get dirty and also boss Chuck around. Maybe one day he will be a great manager. Your score is ' + score + '.',
 /*4*/ 'Chuck is seeking opportunities to combine his artistic talents with practical knowledge to give users an enriching and problem free user experience. Your score is ' + score + '.'] ;
 +
 var score = 0;
 +function playGame() {
 +  while (/*some condition*/) {
 +    for (var i = 0; i < questions.length; i++) {
 +    userAnswers[i] = getUserAnswers(i);
 +    userAnswers[i] = getUpperCase(i);
 +    }
 +  }
 +}


function userPrompts = (var question(i) = prompt (userPrompts[i]).toUpperCase()){

function ifStatement = (if(question(i) === correctAnswers[i]) {
   correctAlerts(i)
 console.log('Question ' + consoleQuestionNumber + ' Correct.');
 score += 1;
 }

function elseStatement = (else {
   incorrectAlerts(i)
   console.log('Question ' + consoleQuestionNumber + '  Wrong.')
 }

function followConfirm = (confirm(followUpConfirm(i))
console.log('Total score is: ' + score);


 +
 +function getUpperCase() {
 +  userAnswers[i] = userAnswers[i].toUpperCase();
 +}
 +
 +function checkAnswer() {
 +
 +}


  ///////////////////////////














//Question 1
var score = 0;
var consoleQuestionNumber = 1;
var question1 = prompt ('True or False, Chuck\'s full name is Charles Forsythe?').toUpperCase();
if(question1 === 'FALSE') {
  alert('Way to go ' + userName + ', that is correct!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Nickname');
  score += 1;
} else {
  alert('WRONG!!!');
  console.log('Question ' + consoleQuestionNumber + '  Wrong. Nickname');
}
confirm('Chuck is a nickname his parents decided to call him for fun! And it stuck... Chuck\'s real name is Christopher. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//I declined to make a function to condense the code because I wanted to vary the responses so the game is not so monotonous
//Found the idea for the score at https://stackoverflow.com/questions/17193857/javascript-touppercase

//Question 2
var question2 = prompt ('True or False, Chuck once lived in Colorado?').toUpperCase();
if(question2 === 'TRUE') {
  alert('You got it!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. States');
  score += 1;
} else {
  alert('Nope!');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. States');
}
confirm('While Chuck currently resides in Iowa, he has also lived in Minnesota, Pennsylvania, New York and Colorado. That\'s where he met his lovely wife Nicole. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//Question 3
var question3 = prompt ('True or False, Chuck Chuck is a painter by training?').toUpperCase();
if(question3 === 'FALSE') {
  alert('Bingo!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Printmaker');
  score += 1;
} else {
  alert('Negative, Ghost Rider');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Printmaker');
}
confirm('Chuck earned an MFA from the University of Iowa in Printmaking. Printmaking is the utilization of historic and contemporary technology to reproduce images for artistic purposes. In grad school Chuck made prints featuring bacteria, among other things, which were visual metaphores for the existing world around us that goes unseen or un-noticed... Kind of like Javascript! Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//Question 4
var question4 = prompt ('True or False, Chuck a father?').toUpperCase();
if(question4 === 'TRUE') {
  alert('Right!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Father');
  score += 1;
} else {
  alert('Too Bad');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Father');
}
confirm('Hard to believe but Chuck is the father of a 6 year old named Colin. Colin likes to get dirty and also boss Chuck around. Maybe one day he will be a great manager. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//Question 5 Having a Parsing error in question 5


var Question5 = prompt('Chuck like collecting tools, especially wood working tools. Can you guess how many hand planes Chuck owns?');
var realNumber = parseInt(Question5);
console.log(realNumber);
var q5GuessCount = 0;

if(realNumber === 6) {
  alert('good job');
  score += 1;
  guessCount += 1;
  console.log('q5GuessCount: ' + q5GuessCount + ' Input Number: ' + realNumber);
} else { //deleted else if
  for(var i = 0; i < 3; i++) {
    if(realNumber < 6) {
      Question5 = prompt('too low try again');
      guessCount += 1;
      console.log('q5GuessCount: ' + q5GuessCount + ' Input Number: ' + realNumber);
    }
  }
} else if {
      if(realNumber > 6) {
        Question5 = prompt('too high try again');
        guessCount += 1;
        console.log('q5GuessCount: ' + q5GuessCount + ' Input Number: ' + realNumber); }
} else if {
      if(realNumber === 6) {
      alert('Right!')
      score += 1;
      guessCount += 1;
      console.log('q5GuessCount: ' + q5GuessCount + ' Input Number: ' + realNumber);
      }
} else {
      if(isNaN) {
      prompt('Enter a number only, please.')
      guessCount += 1;
      console.log('q5GuessCount: ' + q5GuessCount + ' Input Number: ' + realNumber);
        }
      } */

//Question 6

var question6Answers = ['pizza','sushi','tacos'];
var arrayTotal = question6Answers.length;
console.log('Array Length: ' + arrayTotal);
// Prompt
var question6 = prompt('Can you guess one of Chuck\'s favorite things to eat?').toLowerCase();
//Response
for(var i = 0; i < arrayTotal; i++){
  if(question6 === question6Answers[i]) {
    alert('Right, I love ' + question6Answers[i] + '.');
    break;
    console.log(i);
  } else {
//  for(var i = 0; i < 6; i++){
    prompt('Guess Again');
//Why is it looping 4 times!!!

//Question 7
var guessCount = 0;
//Guess count idea fount at: https://stackoverflow.com/questions/12691691/count-the-number-of-times-an-input-has-been-made-javascript

var question5 = prompt ('True or False, Chuck wants to work for you?').toUpperCase();
if(question5 === 'TRUE') {
  alert('You got that darn right!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Work');
  score = score + 1;
} else {
//Thanks for the help Keith and Benjamin
  do{
    question5 = prompt('Try again....').toUpperCase();
    guessCount += 1;
  } while (question5 !== 'TRUE');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Work');
  console.log('Guess Count: ' + guessCount);
  score = score + 1;
}
if(guessCount > 1) {
  alert('Right!!!!!');
}
confirm('Chuck is seeking opportunities to combine his artistic talents with practical knowledge to give users an enriching and problem free user experience. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;







//Final Message
if(score === 5) {
  alert('You got a perfect score, You must really know Chuck well!');
  console.log(userName + ' is a savant!');
} else if(score === 1){
  alert('You did\'t get one question correct! You really should get to know me better!');
  console.log(userName + ' is a moron');
} else {
  alert(score + ' out of 5. Not too bad for a beginner.');
  console.log(userName + ' is OK');
}
confirm('Thanks for playing the game ' + userName + '.');
