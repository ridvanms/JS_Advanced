class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle (wineName, wineType, price){
        if(this.wines.length >= this.space){
            throw new Error('Not enough space in the cellar.')
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid:false
        })
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ){
        let currentWine = this.wines.find(w => w.wineName === wineName)
        if(!currentWine){
            throw new Error(`${wineName} is not in the cellar.`)
        }else if(currentWine.paid){
            throw new Error(`${wineName} has already been paid.`)
        }
        currentWine.paid = true;
        this.bill += currentWine.price // ?
        return  `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName){
        let currentWine = this.wines.find(w => w.wineName === wineName)
        if(!currentWine){
            throw new Error(`The wine, you're looking for, is not found.`)
        }else if(!currentWine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        for(let i = 0; i<this.wines.length;i++){
            let currentWine1 = this.wines[i]
            if(currentWine1.wineName === wineName) this.wines.splice(i,1);
        }
        return `You drank a bottle of ${wineName}.`
        
    }
    cellarRevision(wineType){
        if(!wineType){
            let result = [
                `You have space for ${this.space - this.wines.length} bottles more.`,
                `You paid ${this.bill}$ for the wine.`
            ]
            this.wines = this.wines.sort((a,b)=>a.wineName.localeCompare(b.wineName))
            for (const wine of this.wines) {
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? `Has Paid`: `Not Paid`}.`)
            }
            return result.join('\n')
        }else{
            let currentWine = this.wines.find(w => w.wineType === wineType)
            if(!currentWine)throw new Error(`There is no ${wineType} in the cellar.`)

            return `${currentWine.wineName} > ${currentWine.wineType} - ${currentWine.paid ? `Has Paid`: `Not Paid`}.`
        }
    }

}




// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// //////////////////////////////////////////////////////////////

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// You drank a bottle of Sauvignon Blanc Marlborough.
// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

//////////////////////////////////////////

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// You bought a Sauvignon Blanc Marlborough for a 120$.
// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

/////////////////////////////

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

// You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// Bodegas Godelia Mencía > Rose - Not Paid.

///////////////////////////////////////

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());

// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.

//////////////////////////////////////////
