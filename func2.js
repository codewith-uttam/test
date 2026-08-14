// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }

// addTwoNumbers(10, 20);

// function addThreeNumbers (a, b, c,) {
//     console.log(a+b+c)

// }
// addThreeNumbers (7, 19,50)


// function add() {
// let sum = 0

// for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i ]
//     console.log (`the sum is ${sum}`)
// }
// }
// add (9, 5)
// add (10, 30, 44)

// create a function fruitslist. pass fruits name as induvidual argument and print them
function fruitsList() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`the arguments ${i + 5}is ${arguments[i]}`);
    }

}
fruitsList('apple', 'banana', 'orange');
