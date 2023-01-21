function townPopulation(arr) {
    let newObj = {}
    arr.forEach(element => {
        let [town, population] = element.split(' <-> ')
        if (!newObj[town]) return newObj[town] = +population;
        newObj[town] += +population;
    });
    for (const key in newObj) {
        console.log(`${key} : ${newObj[key]}`)
    }

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])
// Sofia: 1200000
// Montana: 20000
// New York: 10000000
// Washington: 2345000
// Las Vegas: 1000000
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])
// Istanbul: 101000
// Honk Kong: 2100004
// Jerusalem: 2352344
// Mexico City: 23401925

