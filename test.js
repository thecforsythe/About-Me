//Question 4

/*
var question4 = prompt ('True or False, Chuck a father?').toUpperCase();
if(question4 === 'TRUE') {
  alert('Right!');
  console.log('Question ' + consoleQuestionNumber + ' Correct. Father');
  score = score + 1;
} else {
  alert('Too Bad');
  console.log('Question ' + consoleQuestionNumber + ' Wrong. Father');
}

var score = 1; // remove before pushing

confirm('Hard to believe but Chuck is the father of a 6 year old named Colin. Colin likes to get dirty and also boss Chuck around. Maybe one day he will be a great manager. Your score is ' + score + '.');
console.log('Total score is: ' + score);
consoleQuestionNumber = consoleQuestionNumber + 1;
*/

//Question 5
/*var question5 = prompt ('Chuck really enjoys making things by hand, including woodworking. He also likes collecting tools. Can you guess how many woodworking hand planes Chuck owns?');
if(question5 === '6') {
  alert('How did you know?');
  console.log(question5);
  //console.log('Question ' + consoleQuestionNumber + ' Correct. 6 Planes');
  score += 1;
} else {
  for // question5
}
 } else {
  var loopAnswer
  for(var loopAnswer = 0; loopAnswer < 4; 1++) {
    console.log(Question5)
  };
} */
var tuna = prompt('guess a number');
console.log(tuna);
var realNumber = parseInt(tuna);
console.log(realNumber);

if(realNumber === 6) {
  alert('good job');
} else {
  for(var i = 0; i < 3; i++) {
    if(tuna >= '6') {
      tuna = prompt('too low try again');
    }
  }
}
  /*  } else if {
      if(tuna  '6') {
        tuna = prompt('too low try again');
      break;
    }
  }
}

var tuna = prompt('guess a number');
if(tuna === '6') {
  alert('good job');
} else {
  for(var i = 0; i < 3; i++) {
    if(tuna !== '6') {
      tuna = prompt('try again');
    } else {
      break;
    }
  }
}
*/
