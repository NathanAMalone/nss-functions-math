const addNumb = (number1, number2) => {
    const sum = number1 + number2
    return sum
}

const doubleNumb = (prodFunc) => {
    const product = prodFunc * 2
    return product
}

let number1 = 5
let number2 = 20
let sumFunc = addNumb(number1, number2)
console.log(sumFunc)
let doubled = doubleNumb(sumFunc)
console.log(doubled)