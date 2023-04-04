/* 1. write string, number and boolean type variable */
const country  = 'Bangladesh';
const age = 52;
const independent = true;

console.log(typeof country);
console.log( typeof age);
console.log (typeof independent);

const student = {name: 'Agun', age:17, class: 10 };
const friendsAge =[21, 22, 19, 23, 25]
console.log(typeof student);
console.log(Array.isArray(friendsAge))

/* 2. let and const variable declare */
const myName = 'Mainul';
let month = 'march';
month = 'May';
console.log(month)

/* 3. do +, -, *, /, %  of two variable */
const myNumber = 22;
const yourNumber = 7;
const myYourNumber = myNumber + yourNumber;
// console.log(myYourNumber);
const myYourDif = Math.abs(myNumber - yourNumber);
// console.log(myYourDif );
const MoreYouMe = myNumber * yourNumber;
// console.log(MoreYouMe);
const YouMeFinish = myNumber / yourNumber;
// console.log(YouMeFinish);
const remainder = myNumber % yourNumber;
// console.log(remainder);

/* 4. comparison two variable */
const yourResult = 4.55;
const myResult = 4.95;
const isReally = yourResult < myNumber;
// console.log(isReally);
const isReal = yourResult == myResult;
// console.log(isReal);
const isTrue = myResult !== yourResult;
console.log(isTrue)

/* 5-6. use && and || condition in two variable */
if(yourResult > myResult || yourResult === myResult){
    console.log('lets love')
}
// else{console.log('Bye')}

const behaviorIsNice = true
if(yourResult <myResult && behaviorIsNice === true){
    console.log( 'I want to marry you')
}
 else{console.log('see you again')}

 /* 7. display 7 to 19 odd numbers by while loop */

 let j = 7;
 while( j <= 19){
    console.log(j)
    j = j + 2;
 }