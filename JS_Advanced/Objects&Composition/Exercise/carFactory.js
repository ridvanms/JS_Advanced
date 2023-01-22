function carFactory(obj) {
    const baseObj = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monstere engine': { power: 200, volume: 3500 },
        'hatchback': { type: 'hatchback', color: obj['color'] },
        'coupe': { type: 'coupe', color: obj['color'] },
    }
    function check(power = obj['power']) {
        if (power <= 90) return baseObj['Small engine'];
        else if (power <= 120) return baseObj['Normal engine'];
        else return baseObj['Monstere engine'];

    }
    const car = {
        model: obj['model'],
        engine: check(),
        carriage: baseObj[obj['carriage']],
        wheels: Array(4).fill(obj['wheelsize'] % 2 === 0 ? --obj['wheelsize'] : obj['wheelsize'])
    }
    return car;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
// {
//     model: 'VW Golf II',
//         engine: {
//             power: 90,
//                 volume: 1800
//     },
//     carriage: {
//         type: 'hatchback',
//             color: 'blue'
//     },
//     wheels: [13, 13, 13, 13]
// }
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
// {
//     model: 'Opel Vectra',
//         engine: {
//             power: 120,
//                 volume: 2400
//     },
//     carriage: {
//         type: 'coupe',
//             color: 'grey'
//     },
//     wheels: [17, 17, 17, 17]
// }