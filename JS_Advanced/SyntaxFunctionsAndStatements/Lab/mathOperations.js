function mathOperations(...pattern) {
    let operator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }
    let result = operator[pattern[2]](pattern[0], pattern[1])
    console.log(result);
}

mathOperations(5, 6, '+')
//11
mathOperations(3, 5.5, '*')
//16.5



// function mathOperations(a, b, operator) {
//     let result = 0
//     switch (operator) {
//         case '+':
//             result = a + b;
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             result = a / b;
//             break;
//         default:
//             console.log('There is not operator like this in math world')
//             break;
//     }
//     console.log(result)
// }


mathOperations(5, 6, '+')
//11
mathOperations(3, 5.5, '*')
//16.5
