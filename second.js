//question 1

var fruits = ['Apple', 'Banana', 'Orange'];
// Element by telling Index 
console.log(fruits[2])
//index of Banana
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

//replace Banana with Mango
fruits[1] = 'Mango';
console.log(fruits);
// pop
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

//push
fruits.push('Watermelon');
console.log(fruits);

fruits.unshift('Kola');
console.log(fruits);

/* question-2 */
var num1 = 13;
var num2 = 79;
var num3 = 45;
if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
    else{console.log(num3)}
}
else{
    if(num2>num3){
        console.log(num2);
    }
    else{console.log(num3);}
}

// question 2
var myResult =85;
var tomResult = 66;
var janeResult = 95;
var peterResult = 56;
var johnResult = 40;
if(myResult>=60){
    if(myResult>=80){
        console.log('you A grade');
    }
    else{console.log('you B grade')}
   
}
if(myResult<60 && myResult>=40 ){
    if(myResult>=50){
        console.log('you C grade');
    }
    else{console.log('you D grade');}
}
else{
    if(myResult<40){
        console.log('you Fail')
    }
   
}
//Tom result
if(tomResult>=60){
    if(tomResult>=80){
        console.log('Tom A grade');
    }
    else{console.log('Tom B grade')}
   
}
if(tomResult<60 && tomResult>=40 ){
    if(tomResult>=50){
        console.log('Tom C grade');
    }
    else{console.log('TomD grade');}
}
else{
    if(tomResult<40){
        console.log('Tom Fail')
    }
   
}
