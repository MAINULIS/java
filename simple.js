/* get sum of 1-5 numbers  */
// let sum = 0;
// for(let i = 0; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum)

// reverse way

// let sum = 0;
// for( i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

function sum(i){
  if( i == 1){
    return 1;
  }
    return  i + sum(i-1);
}
const result = sum(5);
console.log(result);

// this is a example of recursive function. And the process is called recursion. 