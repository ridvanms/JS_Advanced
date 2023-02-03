function argumentInfo(...arr){
    let newMap =new Map();
    for (const el of arr) {
        let type = typeof el
        console.log(`${type}: ${el}`)
        if(!newMap.has(type))newMap.set(type,0) 
        newMap.set(type,+newMap.get(type) + 1) 
    }
    Array.from(newMap)
    .sort((a,b)=> b[1] - a[1])
    .map((el,i)=> console.log(`${el[0]} = ${el[1]}`))
    
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1