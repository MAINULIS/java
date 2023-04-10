// the argument is an array like object.
function add (num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[4]);
}
add(12, 33, 43 , 2, 77, 18)