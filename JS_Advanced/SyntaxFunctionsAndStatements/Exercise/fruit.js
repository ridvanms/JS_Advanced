function fruit(...pattern) {
    console.log(`I need $${(pattern[1] / 1000 * pattern[2]).toFixed(2)} to buy ${(pattern[1] / 1000).toFixed(2)} kilograms ${pattern[0]}.`)
}
fruit('orange', 2500, 1.80)
// I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35)
// I need $3.67 to buy 1.56 kilograms apple.