function daysInMonth(day, year) {
    function isLeap(y) {
        if (y % 4 === 0) {
            if (y % 100 !== 0) {
                return '29'
            } else if (y % 400 === 0) {
                return '29'
            } else return '28'
        } else return '28'
    }
    let monthDays = {
        1: 31,
        2: isLeap(year),
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    console.log(monthDays[day])
}
daysInMonth(1, 2012)
//31
daysInMonth(2, 2021)
//28
