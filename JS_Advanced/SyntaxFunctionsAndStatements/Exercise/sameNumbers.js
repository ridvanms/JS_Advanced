function sameNumbers(number) {
    let sumOFdigits = String(number).split('').reduce((acc, num) => acc + +num, 0)
    return String(number).split('').filter(a => a !== String(number)[0]).length === 0 ? `true\n${sumOFdigits}` : `false\n${sumOFdigits}`
}
console.log(sameNumbers(2222222))
//true
console.log(sameNumbers(1234))
//false