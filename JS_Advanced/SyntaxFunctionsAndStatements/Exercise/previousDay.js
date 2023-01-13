function priviousDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day - 1);
    let newYear = currentDate.getFullYear();
    let newMonth = currentDate.getMonth() + 1;
    let newDay = currentDate.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`)
}
priviousDay(2016, 9, 30)
//2016-9-29
priviousDay(2015, 5, 10)
//2015-5-9