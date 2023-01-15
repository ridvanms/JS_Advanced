function printAnArray(wordsArray, separator) {
    console.log(wordsArray.join(`${separator}`))
}
printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')
// One - Two - Three - Four - Five
printAnArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)
// How about no ? _I_will_not_do_it!