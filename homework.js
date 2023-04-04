// 1. write a function that will take 3 numbers and will return the max number
// 2. write a function that will take 3 parameters and will return the min number
/* (using if-else && using Math.max and Math.min) */

function maxNumber(num1 , num2 , num3) {
    console.log(num1, num2, num3)
    if(num1 > num2 && num1 > num3){
        console.log('num1 is bigger')
    }
    else if(num2 > num1 && num2 > num3){
        console.log(' num2 is bigger')
    }
    else{console.log('num3 is bigger')}
    
}

const numbers= maxNumber(84 , 99 ,77)

//
function getMaxOfArray(numArray) {
 console.log(numArray)
 console.log(Math.max(...numArray))
    
}
const marks = [85 , 99 , 77];
const winner = getMaxOfArray(marks);


// write a function to get the lowest person in an array

function minInArray(numbers) {
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const heights = [ 167, 190, 165, 137, 157];
const smaller = minInArray(heights);
console.log('smallest person is:', smaller)


function add( a, b){
output = a+ b;
console.log(output)
}
function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))