function circleArea(value) {
    consol
    if (typeof value !== 'number') return `We can not calculate the circle area, because we receive a ${typeof value}.`
    else
        return `${(Math.pow(value, 2) * Math.PI).toFixed(2)}`
}
circleArea(5)
//78.54
circleArea('name')
//We can not calculate the circle area, because we receive a string.
