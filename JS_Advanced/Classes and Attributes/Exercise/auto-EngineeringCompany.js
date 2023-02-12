function autoEnge(arr){
    
    let storage = {}
    while(arr[0]){
        let line = arr.shift();
        let [carBrand,carModel,producedCars] = line.split(' | ')
        producedCars = Number(producedCars);

        if(!storage.hasOwnProperty(carBrand)){
            storage[carBrand] = {}
        }
        if(!storage[carBrand].hasOwnProperty(carModel)){
            storage[carBrand][carModel] = 0
        }
        storage[carBrand][carModel] += producedCars;  
    }
    Object.entries(storage)
    .map(el => {
        console.log(`${el[0]}`)
        for (const model in el[1]) {
           console.log(`###${model} -> ${el[1][model]}`)
        }
    })
}
autoEnge(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])