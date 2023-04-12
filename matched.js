
const numbers = [32, 44, 91, 12, 71];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for of loop
for(const number of numbers){
    // console.log(number);
}

const products =[
    {id:1, name:'xiomi one night phone', price:21000},
    {id:2, name:'iphone', price:121000},
    {id:3, name:'mac book air', price:21000},
    {id:4, name:'lenova yoga laptop', price:201000},
    {id:5, name:'dell inspiron laptop', price:91000},
    {id:6, name:'samsung s52 phone', price:49000},
    {id:7, name:'Nokia black diamond', price:31000},
    {id:8, name:' one plus Phone', price:21000},
]

// for(product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
       }
    }
    return matched;
}
const result = matchedProducts(products, 'laptop');
console.log(result);

