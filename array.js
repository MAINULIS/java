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
console.log(Array.isArray(products));