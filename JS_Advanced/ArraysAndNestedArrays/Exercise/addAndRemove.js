function addAndRemoves(arrWithCommands) {
    let initialNumber = 1;
    let newArr = [];
    arrWithCommands.forEach(command => {
        command === 'add' ? newArr.push(initialNumber) : newArr.pop();
        initialNumber++;
    });
    console.log(newArr[0] ? newArr.join('\n') : 'Empty')
}
addAndRemoves(['add',
    'add',
    'add',
    'add']);
// 1
// 2
// 3
// 4
console.log('----------');
addAndRemoves(['add',
    'add',
    'remove',
    'add',
    'add']);

//1
//4
//5
console.log('-----------')
addAndRemoves(['remove',
    'remove',
    'remove'])
//Empty
