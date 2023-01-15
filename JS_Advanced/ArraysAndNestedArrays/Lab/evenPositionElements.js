function evenPositonElement(arr) {
    return arr.filter((num, index) => index % 2 === 0).join(' ')
}
evenPositonElement(['20', '30', '40', '50', '60'])
//20 40 60