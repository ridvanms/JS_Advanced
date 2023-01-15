function printEveryNThElement(arrWithNumbers, n) {
    let newArr = []
    for (let i = 0; i < arrWithNumbers.length; i += n) {
        newArr.push(arrWithNumbers[i])
    }
    return newArr
}
printEveryNThElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2)
// ['5', '31', '20']
console.log('------------')
printEveryNThElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
);
// ['dsa', 'test']
console.log('--------')
printEveryNThElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);
// ['1']
