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
  console.log('Question ' + consoleQuestionNumber + ' Correct');
  score = score + 1;
} else {
  alert('WRONG!!!');
  console.log('Question ' + consoleQuestionNumber + '  Wrong');
}
confirm('Chuck is a nickname his parents decided to call him for fun! And it stuck... Chuck\'s real name is Christopher. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;

//I declined to make a function to condense the code because I wanted to vary the responses so the game is not so monotonous
//Found the idea for the score at https://stackoverflow.com/questions/17193857/javascript-touppercase

//Question 2
var question2 = prompt ('True or False, Chuck once lived in Colorado?').toUpperCase();
if(question1 === 'TRUE') {
  alert('You got it!');
  console.log('Question ' + consoleQuestionNumber + ' Correct');
  score = score + 1;
} else {
  alert('Nope!');
  console.log('Question ' + consoleQuestionNumber + ' Wrong');
}
confirm('While Chuck currently resides in Iowa, he has also lived in Minnesota, Pennsylvania, New York and Colorado. That\'s where he met his lovely wife Nicole. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;
