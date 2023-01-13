function greatestDivisor(...pattern) {
    let gratestNumber = pattern[0] > pattern[1] ? pattern[0] : pattern[1]
    for (let i = gratestNumber; i >= 1; i--) {
        if (pattern[0] % i === 0 && pattern[1] % i === 0) return `${i}`
    }
}
console.log(greatestDivisor(15, 5))
//5
console.log(greatestDivisor(2154, 458))
//2