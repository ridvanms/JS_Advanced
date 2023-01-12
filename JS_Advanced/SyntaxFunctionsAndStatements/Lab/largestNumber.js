function largestFunction(...pattern) {
    let number = pattern.reduce((acc, curr) => acc > curr ? acc : curr)
    console.log(`The largest number is ${number}.`)
}
largestFunction(5, -3, 16)
//The largest number is 16.
largestFunction(-3, -5, -22.5)
//The largest number is -3.