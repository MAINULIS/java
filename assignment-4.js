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
