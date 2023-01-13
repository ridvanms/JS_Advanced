function aggregateElements(arr) {
    console.log(arr.reduce((acc, cur) => acc + cur))
    let inversSum = 0;
    arr.forEach(number => {
        inversSum += 1 / number;
    });
    console.log(inversSum)
    console.log(arr.join(''))
}
aggregateElements([1, 2, 3])
//6
//1.833333333333
//123
aggregateElements([2, 4, 8, 16])
//30
//0.9375
//24816
