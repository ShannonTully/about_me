'use strict';

var score = 0;
var name;

alert('Hello! My name is Shannon and we are going to playing a little guessing game where you have to guess things about me.');
//name
function getName () {
  name=prompt('Before you learn anything about me I\'d like to know what your name is.');//this stupid error causes no problems but wont go away and it upsets me
  console.log('name', name);
}
getName();

//q 1
function questionOne (){
  var height = prompt('So my first question for you, '+name+', is am I 6\'2"? (y or n)');
  var heightUpperCase = height.toUpperCase();
  console.log('6\'2"?', heightUpperCase);
  if(heightUpperCase === 'Y'){
    alert('Yes, '+name+'! I am 6\'2".');
    score++;
    console.log('points: ', score);
  }else{
    alert('You are wrong '+name+'. I am 6\'2".');
  }
}
questionOne();

/*
var hockey = prompt('Okay, '+name+', my next question is am I a hockey player? (y or n)');
var hockeyUpperCase = hockey.toUpperCase();
console.log('play hockey?', hockeyUpperCase);

if(hockeyUpperCase === 'Y'){
  alert('Yes! I am a hockey player '+name+'.');
  score++;
}else{
  alert('You were wrong. I am a hockey player'+name+'.');
}

var bird = prompt('My third question is do I like birds? (y or n)');
var birdUpperCase = bird.toUpperCase();
console.log('like birds?', birdUpperCase);

if(birdUpperCase === 'Y'){
  alert('You are wrong. I hate birds, but I don\'t hate you '+name+'.');
}else{
  alert('You were right! I hate birds, but I don\'t hate you '+name+'.');
  score++;
}

var car = prompt('This question is do I own a Hyundai? (y or n)');
var carUpperCase = car.toUpperCase();
console.log('Hyundai', carUpperCase);

if(carUpperCase === 'Y'){
  alert('Yes, '+name+'! I do own a Hyundai');
  score++;
}else{
  alert('You were wrong '+name+'. I do own a Hyundai');
}

var dog = prompt('For my fifth question I\'ll ask you, '+name+', is do I have a dog? (y or n)');
var dogUppercase = dog.toUpperCase();
console.log('dog?', dogUppercase);

if(dogUppercase === 'Y'){
  alert('Wrong. Cats are the far superior animal. You should know that '+name+'.');
}else{
  alert('Correct. Cats are way better anyways, but you know this '+name+'.');
  score++;
}
*/





function randNumFunc () {
  var randNum = Math.round(Math.random()*10);
  console.log('number to guess', randNum);
  return randNum;
}
var randNum=randNumFunc();

//Question 6
function numQuest () {
  var i = 4;
  var beatNum = false;

  while(i > 0){
    var guessedNum = prompt('Guess what number I am thinking of between 1 and 10.');
    guessedNum = parseInt(guessedNum);
    console.log('guessed number', guessedNum);
    if(guessedNum === randNum){
      alert('Wow, you guessed it '+name+'.');
      score++;
      beatNum = true;
      break;
    } else if(guessedNum < randNum){
      alert('Too low. '+(i - 1)+' tries left.');
    } else if(guessedNum > randNum){
      alert('Too high. '+(i - 1)+' tries left.');
    } else {
      console.log('your if statement broke');
    }
    i--;
    //console.log('you are now below the if statment');
  }

  if(beatNum === false){
    alert('You couldn\'t guess the number '+name+'.');
  }

}
numQuest();

//Question 7
var states = ['california', 'florida', 'oregon', 'maine'];
var beatStates = false;
var j = 6;

while(j >0){
  var guessedState = prompt('Can you guess a state I\'ve lived in other than Washington').toLowerCase();
  console.log('guessedState', guessedState);
  if(guessedState === states[0]){
    alert('Good job, '+name+', you guessed correctly. The other states are '+states[3]+', '+states[1]+', '+states[2]+'.');
    score++;
    beatStates = true;
    break;
  } else if(guessedState === states[1]){
    alert('Good job, '+name+', you guessed correctly. The other states are '+states[3]+', '+states[0]+', '+states[2]+'.');
    score++;
    beatStates = true;
    break;
  }else if(guessedState === states[2]){
    alert('Good job, '+name+', you guessed correctly. The other states are '+states[3]+', '+states[1]+', '+states[0]+'.');
    score++;
    beatStates = true;
    break;
  }else if(guessedState === states[3]){
    alert('Good job, '+name+', you guessed correctly. The other states are '+states[0]+', '+states[1]+', '+states[2]+'.');
    score++;
    beatStates = true;
    break;
  }else if(guessedState !== states[0,1,2,3]){
    alert('Wrong I never lived there. '+(j - 1)+' tries left.');
  }
  j--;
}
if(beatStates === false){
  alert('Too bad '+name+', you got it wrong. The correct answer are '+states[0]+', '+states[1]+', '+states[3]+', '+states[2]+'.');
}

console.log('score', score);

alert('Congrats, '+name+'! You made it through the game. You got ' + score + ' out of 7 correct.');
