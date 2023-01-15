function negativeOrPositive(arr) {
    let newArr = []
    arr.forEach(number => {
        number < 0 ? newArr.unshift(number) : newArr.push(number)
    });
    newArr.map(number => console.log(number))
}
negativeOrPositive([7, -2, 8, 9])
// - 2
// 7
// 8
// 9
negativeOrPositive([3, -2, 0, -1])
// - 1
// - 2
// 3
// 0