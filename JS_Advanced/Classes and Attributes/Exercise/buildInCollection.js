function juiceFlavors(arr){
    const juice = {}
    const juiceBottle = {}

    for (const line of arr) {
        let [juiceName,quantity] = line.split(' => ')
        quantity = Number(quantity);

        if(!juice.hasOwnProperty(juiceName)){
            juice[juiceName] = 0;
        }
        juice[juiceName] += quantity
        
        if(juice[juiceName] >= 1000 ){
            juiceBottle[juiceName] = Math.floor(juice[juiceName] / 1000)
        }
    }
    // for (const juice in juiceBottle) {
    //     console.log(`${juice} => ${juiceBottle[juice]}`)
    // }  
    Object.entries(juiceBottle)
    .map(el => {console.log(`${el[0]} => ${el[1]}`)})
}
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
console.log('------');
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])