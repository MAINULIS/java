/* an Object can take as element an array, an object and even a function*/
const nayok ={
    name: 'Shakib Khan',
    id: 211,
    address: 'Dhaka',
    isSingle: true,
    friends:['apu', 'bubli', 'puja', 'salman'],
    movies:[{name: 'no.1', year: 2015}, {name:'king khan', year:2018}],
    act: function () {
        console.log('acting like shakib khan')
    },
    car:{
        brand: 'tesla',
        price: 50000000,
        made: 2023,
        manufacturer:{
            name:'tesla',
            ceo:'elon mask',
            country:'USA'
        }
    }
}
// console.log(nayok);
console.log(nayok.act())