class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.solidCars = []
        this.totalIncome = 0;
    }
    addCar(model,horsepower,price,mileage){
        
        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({model,horsepower,price,mileage})
        // {model, horsepower, price, mileage} 
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model,desiredMileage){
        
        let car = this.availableCars.find(el => el.model === model)
        if(!car)throw new Error(`${model} was not found!`)

        if(car.mileage <= desiredMileage){
            car.price = car.price
        }else if(car.mileage - desiredMileage <= 40000){
            car.price *= 0.95;
        }else if(car.mileage - desiredMileage > 40000){
            car.price *= 0.90;
        }
        
        let horsepower = car.horsepower;
        let soldPrice = car.price;
        this.solidCars.push({model,horsepower,soldPrice})
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar(){
        if(!this.availableCars.length) return `There are no available cars`
        let result = `-Available cars:`
        
        for (const car of this.availableCars) {
            result += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
        }
        return result
    }
    salesReport(criteria){
        if(criteria === 'horsepower'){
           this.solidCars =  this.solidCars.sort((a,b)=>{
            return b.horsepower - a.horsepower
           })
        }else if(criteria === 'model'){
            this.solidCars =  this.solidCars.sort((a,b)=>{
              return  b[criteria].localeCompare(a[criteria])
            })
        }else {
            throw new Error('Invalid criteria!')
        }
        let result = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.solidCars.length} cars sold:`,
        ];
        this.solidCars.forEach((car) =>
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));
        return result.join("\n");
    }
   
}
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

//////////////////////////////////////////////

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

//////////////////////////////////////////////////

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport('horsepower'));