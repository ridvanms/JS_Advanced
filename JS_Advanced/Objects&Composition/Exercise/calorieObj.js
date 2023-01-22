function calorieObj(arr) {
    return arr.reduce((acc, curr, i) => {
        if (i % 2 === 0) acc[curr] = +arr[i + 1]
        return acc;
    }, {})
}
console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// { Yoghurt: 48, Rise: 138, Apple: 52 }
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }