import { question } from 'readline-sync'

// let answer = question('Who are you?')
// console.log(`Hello ${answer} nice to meet you`)


//Uppgift 1

// let city= question('Where are you from?')
// if( city== 'Karlstad'){
  //   console.log(`What do you think of ${city} ${answer}?`)
  // } else{
    //   console.log(`Oh thats a nice city, why dont you move to Karlstad?`)
    // }
    
//Uppgift 2
// let x= Number(question('Please enter a number '))
// let y= Number(question('another one '))
// console.log(`The sum is ${x + y}`)


//Uppgift 3
// let fråga= question('Write a password ')
// const lösenord=('Ali17ali17')

// if (fråga== lösenord){
  //   console.log('Well done you took the same password as mine ')
  
  // }else{
    //   console.log(`Wrong password, the right password should be ${lösenord}`)
    // }
    
    
//Uppgift 4
// let x= Number(question('Skriv ett tal: '));

// if (x < 100) {
//   console.log('Talet är mindre än 100');
// }else if (x == 100){
//   console.log('Talet är lika med 100');
// }else if (x > 100) {
//   console.log('Talet är större än 100')
// }

let guess=Number(question('Guess the number: '))
let secret = Math.floor(Math.random() * 100) + 1
let guessCount = 0;
let maxGuesses = 10;

if (guess == secret) {
  console.log('Amazing your answer were correct')
} else if (guess > secret ) {
  console.log('Your number were to high')
} else if (guess < secret) {
  console.log('Your number were to low')
}

