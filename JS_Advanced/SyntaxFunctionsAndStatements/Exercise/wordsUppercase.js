function wordsUppercase(value) {
    console.log(value.match(/\w+/gm).join(', ').toUpperCase())
}
wordsUppercase('Hi, how are you?')
// HI, HOW, ARE, YOU
