function sumOfNumbers(n, m) {
    let result = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        result += i
    }
    console.log(result)
}
sumOfNumbers('1', '5')
//15
sumOfNumbers('-8', '20')
//174