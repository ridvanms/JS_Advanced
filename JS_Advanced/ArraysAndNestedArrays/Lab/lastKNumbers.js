function lastKNumbers(n, k) {
    let newArr = [1]
    for (let i = 1; i < n; i++) {
        sum = newArr.slice(i - k < 0 ? 0 : i - k).reduce((acc, curr) => acc + curr);
        newArr.push(sum)
    }
    return newArr
}
lastKNumbers(6, 3)
//[1, 1, 2, 4, 7, 13]
lastKNumbers(8, 2)
//[1, 1, 2, 3, 5, 8, 13, 21]