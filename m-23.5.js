/* 1. write string, number and boolean type variable */
const country = 'Bangladesh';
const age = 52;
const independent = true;

console.log(typeof country);
console.log(typeof age);
console.log(typeof independent);

const student = { name: 'Agun', age: 17, class: 10 };
const friendsAge = [21, 22, 19, 23, 25]
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
if (yourResult > myResult || yourResult === myResult) {
    console.log('lets love')
}
// else{console.log('Bye')}

const behaviorIsNice = true
if (yourResult < myResult && behaviorIsNice === true) {
    console.log('I want to marry you')
}
else { console.log('see you again') }

/* 7. display 7 to 19 odd numbers by while loop */

let j = 7;
while (j <= 19) {
    console.log(j)
    j = j + 2;
}

/* 8. declare an array and see how many element is there, add element, remove element etc. */
const learnedSoFar = ['html', 'css', 'git', 'bootstrap', 'tailwind', 'javaScript'];
console.log(learnedSoFar.length);

learnedSoFar[4] = 'react'
// console.log(learnedSoFar)

learnedSoFar.push('figma', 'icons')
learnedSoFar.unshift('management')
//console.log(learnedSoFar)

learnedSoFar.pop()
learnedSoFar.shift()
// console.log(learnedSoFar);

/*9. show an array through for loop or for-of loop */
for (let i = 0; i <= learnedSoFar.length; i++) {
    const learned = learnedSoFar[i];
    console.log(learned)
}

/* 10. break or continue of a loop ; show 80+ numbers */
const numbers = [91, 33, 83, 77, 80, 64, 88, 44, 102]
// for (let i = 0; i <= numbers.length; i++) {
//     const number = numbers[i];
//     if (number == 80) { break; }
//     console.log(number)
// }

for (let i = 0; i <= numbers.length; i++) {
    const number = numbers[i]
    if (number <= 80) { continue; }
    console.log(number)
}
/* 11. multiplication  */
const num1 = 4;
const num2 = 2;
const num3 = 6;
const multiOfNum = num1 * num2 * num3;
//  console.log(multiOfNum);
function multiplication(number1, number2, number3) {
    sum = number1 * number2 * number3;
    return sum;
}
const result = multiplication(4, 5, 7);
console.log('multiplication result:', result);


/* 12. object declaration and property value change*/
const eidShopping = {
    panjabi: 720,
    pant: 1390,
    shipt: 570,
}
console.log(eidShopping)

/*  problem solving */
// 1. feet to inch  ** 1 foot = 12 inch
function FootToInch(feet) {
    const inches = feet * 12;
    return inches;
}

const lengthInFeet = 2;
const lengthInInches = FootToInch(lengthInFeet);
console.log('result in inches:', lengthInInches)

// 2. centimeter to meter /* 1 meter = 100 centimeter  */

function centimeterToMeter(centimeters) {
    const meter = centimeters / 100;
    return meter;
}

const lengthInCentimeter = 3200;
const lengthInMeter = centimeterToMeter(lengthInCentimeter);
console.log('length in meter:', lengthInMeter);

// 3. paper requirement

function paperRequirements(copyOfBook1, copyOfBook2, copyOfBook3) {
    const paperForBook1 = 100;
    const paperForBook2 = 200;
    const paperForBook3 = 300;

    const totalPaperForBook1 = copyOfBook1 * 100;
    const totalPaperForBook2 = copyOfBook2 * 200;
    const totalPaperForBook3 = copyOfBook3 *300;
     
    const totalPaperForAllBook = totalPaperForBook1 + totalPaperForBook2 + totalPaperForBook3;
    return totalPaperForAllBook
}
const totalPaper = paperRequirements(2, 4, 5);
console.log('total paper number for all books :', totalPaper)