'use strict'; //program will read this string and read the file accordingly

//Welcome
var userName = prompt ('Before we play 5 Facts about Chuck, please enter your name.');
alert('Welcome ' + userName + '! Lets get started.' );

//Question 1
var score = 0;
var consoleQuestionNumber = 1;
var question1 = prompt ('True or False, Chuck\'s full name is Charles Forsythe?').toUpperCase();
if(question1 === 'FALSE') {
  alert('Way to go ' + userName + ', that is correct!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Nickname');
  score = score + 1;
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
  score = score + 1;
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
  score = score + 1;
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
  score = score + 1;
} else {
  alert('Too Bad');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Father');
}
confirm('Hard to believe but Chuck is the father of a 6 year old named Colin. Colin likes to get dirty and also boss Chuck around. Maybe one day he will be a great manager. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//Question 5
var guessCount = 0;
var question5 = prompt ('True or False, Chuck wants to work for you?').toUpperCase();
if(question5 === 'TRUE') {
  alert('You got that darn right!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Work');
  score = score + 1;
} else {
  do{
    question5 = prompt('Try again....').toUpperCase();
    guessCount += 1;
  } while (question5 !== 'TRUE');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Work');
  console.log('Guess Count: ' + guessCount);
}
console.log('Guess Count2: ' + guessCount);
alert('Ok');
confirm('Chuck is seeking opportunities to combine his artistic tallents with practical knowledge to give users an enriching and problem free user experience. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//Final Message
if(score === 5) {
  alert('You got a perfect score, You must really know Chuck well!');
  console.log(userName + ' is a savant!');
} else if(score === 0){
  alert('You did\'t get one question correct! You really should get to know me better!');
  console.log(userName + ' is a moron');
} else {
  alert(score + ' out of 5. Not too bad for a beginner.');
  console.log(userName + ' is OK');
}

confirm('Thanks for playing the game ' + userName + '.');
