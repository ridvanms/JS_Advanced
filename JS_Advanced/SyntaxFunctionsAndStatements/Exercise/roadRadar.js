function roadRadar(speed, place) {
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (limits[place] >= speed) return `Driving ${speed} km/h in a ${limits[place]} zone`
    let difference = speed - limits[place]
    let status = ''
    if (difference <= 20) status = 'speeding'
    else if (difference <= 40) status = 'excessive speeding'
    else status = 'reckless driving'
    return `The speed is ${difference} km/h faster than the allowed speed of ${limits[place]} - ${status}`
}
console.log(roadRadar(40, 'city'))
//Driving 40 km/h in a 50 zone
console.log(roadRadar(21, 'residential'));
//The speed is 1 km/h faster than the allowed speed of 20 - speeding
console.log(roadRadar(120, 'interstate'));
//The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
console.log(roadRadar(200, 'motorway'));
//The speed is 70 km/h faster than the allowed speed of 130 - reckless driving