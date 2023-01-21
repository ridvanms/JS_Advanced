function cityTaxes(name, population, treasury) {
    const taxes = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate },
        applyGrowth(percentage) { this.population += this.population * (percentage / 100) },
        applyRecession(percentage) { this.treasury -= this.treasury * (percentage / 100) }
    }
    return taxes
};
const city1 =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city1);
// {
//name: 'Tortuga',
// population: 7000,
//treasury: 15000,
//taxRate: 10,
//collectTaxes: [Function: collectTaxes],
//applyGrowth: [Function: applyGrowth],
//applyRecession: [Function: applyRecession]
// }
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
// 85000
// 7350