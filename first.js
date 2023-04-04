/* write a  loop that will show 1 to 100 numbers */
var numbers = 1;
while (numbers<=100){
    // console.log(numbers)
    numbers ++;
}

/* reverse */
for(let i = 100; i >=1; i--){
    //  console.log(i)
}

/* show 50 to 80 all odd numbers */

let num = 51;
while(num <=80){
    // console.log(num);
    num = num+2;
}

for ( let i = 51; i<=80; i=i+2){
    // console.log(i)
}

/* write a function to add 3 numbers */

function sumOfNumber(num1, num2, num3) {
    console.log(num1, num2, num3);
 sum = num1 + num2+ num3;
    return sum;

    
}
let total = sumOfNumber(3, 5, 1)
console.log('total', sum)