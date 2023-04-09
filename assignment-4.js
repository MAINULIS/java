/* problem-1 : take a positive number as an input . then continuously multiply 3 with the number, then add 10 with the result, then divided the result with 2 and then subtract 5 from the result. then return the ultimate result. */

function mindGame(aNumber) {
    if (typeof aNumber !== 'number') {
        return 'Input should be a number'
    }
    firstResult = aNumber * 3;
    secondResult = firstResult + 10;
    thirdResult = secondResult / 2;
    ultimateResult = thirdResult - 5;

    return ultimateResult;
}

/* problem-2: (finding even or odd) take input a string word or sentence and count how many  total character is there. if the character number is even, show output even. else odd.*/

function evenOdd(aString) {
    if (typeof aString !== 'string') {
        return 'Input should be a string'
    }
    const remainder = aString.length % 2;
    if (remainder === 0) {
        return 'even'
    }
    else { return 'odd' }
}

/* problem-3 : (less or gater than seven) take a number as input. calculate difference of the input number and seven. if the difference is less than 7, return the difference. otherwise return double of the input */

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Input should be a number'
    };
    difference = number - 7;
    if (difference < 7) {
        return difference
    }
    else { return number * 2 };
}

/* problem -4: (Finding Bad data) take an array as input. if any number is less than zero, it is 'bad data'. and if number is greater than zero, it is 'good data'.Now I have to return how many 'bad data is there */

let myArray = [7, 21, -4, -9, 10, -99, -32,];

function findingBadData(myArray) {
    let badNumbers = [];

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] < 0) {
            badNumbers.push(myArray[i]);
        }
    }
    return badNumbers.length;
}

/* problem-5 :(convert gems to diamond) take three friends gems number as 3 input parameter. three friends gems power is such as 21, 32, 43. now find out how many diamond will get from this tree friends gems. if diamond number is more than 1000*2, subtract 2000 from total diamond. and that will be final result.*/

function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
    if (typeof friend1Gems !== 'number' || typeof friend2Gems !== 'number' || typeof friend3Gems !== 'number') {
        return 'Input should be number'
    };
    const friend1GemPower = 21;
    const friend2GemPower = 32;
    const friend3GemPower = 43;

    const friend1Diamond = friend1Gems * friend1GemPower;
    const friend2Diamond = friend2Gems * friend2GemPower;
    const friend3Diamond = friend3Gems * friend3GemPower;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;

    if (totalDiamond > 1000 * 2) { return totalDiamond - 2000 }
    else { return totalDiamond };

}