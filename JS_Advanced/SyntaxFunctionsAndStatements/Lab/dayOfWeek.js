function dayOfWeek(day) {
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }
    let result = week[day] ? week[day] : 'error';
    console.log(result)
}
dayOfWeek("Monday")
//1
dayOfWeek('Friday')
//5
dayOfWeek('Invalid')
//error