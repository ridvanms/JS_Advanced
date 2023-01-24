function lowestPrices(arr){
    let obj = arr.reduce((acc,curr)=> {
        let [town,product,price] = curr.split(' | ')
        if(!acc[product]) acc[product] = {town,price:Number(price)}
        else if(Number(acc[product]['price']) > Number(price)) acc[product] = {town,price} 
        
        return acc
    },{})
    for (const key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
console.log('----------');
lowestPrices(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000"])