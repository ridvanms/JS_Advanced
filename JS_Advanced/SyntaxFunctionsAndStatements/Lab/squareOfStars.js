function squareOfStars(number) {
    let result = ''
    for (let col = 0; col < number; col++) {
        for (let rows = 0; rows < number; rows++) {
            result += '* '
        }
        result += '\n'
    }
    console.log(result)
}
squareOfStars(1);
//[*]
squareOfStars(2);
squareOfStars(5)