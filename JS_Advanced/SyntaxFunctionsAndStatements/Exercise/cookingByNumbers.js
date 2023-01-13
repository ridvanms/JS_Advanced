function cookingByNumbers(...pattern) {
    let number = pattern.shift();
    const commandsList = {
        'chop': (a) => a / 2,
        'dice': (a) => Math.sqrt(a),
        'spice': (a) => a + 1,
        'bake': (a) => a * 3,
        'fillet': (a) => a * 0.8
    }
    pattern.forEach(comand => {
        number = commandsList[comand](number)
        console.log(number);
    })
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// 16
// 8
// 4
// 2
// 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
// 3
// 4
// 2
// 6
// 4.8