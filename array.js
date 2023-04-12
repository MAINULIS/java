// array
const product = [{name: 'phone', price:21000},
{name: 'laptop', price:32000},
{name: 'head phone', price:2000},
]
// console.log(product);
// console.log(product[0])

// array like object. it is an object
const products = {
    '0':12,
    '1': 32,
    '3':22
}
// console.log(Array.isArray(products));


function compare(a, b) {

    if (a == b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result1 = compare(15, "15");
   
//    console.log(result);


function compare(a, b) {

    if (a.toString() === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare(25, 25);
   
   console.log(result);

   console.log("123" + 123);

   
