function solution(){
    let word = ''
    let obj = {
        append(str){word += str},
        removeStart(num){word = word.slice(num)},
        removeEnd(num){word = word.slice(0,word.length - num)},
        print(){console.log(word)}
    }
    return obj

}



let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
console.log('------');
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();