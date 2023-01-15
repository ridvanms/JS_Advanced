function sumFirsLast(numbers) {
    return Number(numbers[0]) + Number(numbers[numbers.length - 1])
}
console.log(sumFirsLast(['20', '30', '40']))
//60
sumFirsLast(['5', '10'])
//15