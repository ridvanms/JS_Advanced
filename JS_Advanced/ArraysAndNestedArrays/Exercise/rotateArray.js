function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        let removedEl = arr.pop();
        arr.unshift(removedEl)
    }
    return arr.join(' ')
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
// 3 4 1 2
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)
//Orange Coconut Apple Banana