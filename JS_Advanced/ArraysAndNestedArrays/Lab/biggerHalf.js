function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice((arr.length) / 2)
}
biggerHalf([4, 7, 2, 5]);
//[5, 7]
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
//[7, 14, 19, 19]