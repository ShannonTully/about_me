'use strict';

var score = 0;

alert('Hello! My name is Shannon and we are going to playing a little guessing game where you have to guess things about me.');

var name = prompt('Before you learn anything about me I\'d like to know what your name is.');
console.log('name', name);

var height = prompt('So my first question for you, '+name+', is am I 6\'2"? (y or n)');
var heightUpperCase = height.toUpperCase();
console.log('6\'2"?', heightUpperCase);

if(heightUpperCase === 'Y'){
  alert('Yes, '+name+'! I am 6\'2".');
  score++;
}else{
  alert('You are wrong '+name+'. I am 6\'2".');
}

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

var dog = prompt('For my fifth and final question I\'ll ask you, '+name+', is do I have a dog? (y or n)');
var dogUppercase = dog.toUpperCase();
console.log('dog?', dogUppercase);

if(dogUppercase === 'Y'){
  alert('Wrong. Cats are the far superior animal. You should know that '+name+'.');
}else{
  alert('Correct. Cats are way better anyways, but you know this '+name+'.');
  score++;
}

console.log('score', score);

alert('Congrats, '+name+'! You made it through the game. You got ' + score + ' out of 5 correct.');
