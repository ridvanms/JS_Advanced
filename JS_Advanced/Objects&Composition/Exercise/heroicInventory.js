function heroicInventory(arr){
    return JSON.stringify(arr.reduce((acc,curr,i) => {
        let [name,level,items]  = curr.split(' / ')
         acc.push({name,level:Number(level),items:items.split(', ')})
         return acc
    },[]))
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]}
// ,{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]}
// ,{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])