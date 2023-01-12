function stringLength(...word) {
    let lenghtOfWords = word.length;
    let sumOfWordsLength = word.map(w => +  w.length).reduce((acc, cur) => acc + cur)
    let avgLenght = Math.floor(sumOfWordsLength / lenghtOfWords)

    console.log(sumOfWordsLength)
    console.log(avgLenght);
}
stringLength('chocolate', 'ice cream', 'cake')
//22
//7

stringLength('pasta', '5', '22.3')
//10
//3