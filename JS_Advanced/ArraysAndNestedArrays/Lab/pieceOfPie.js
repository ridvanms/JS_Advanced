function pieceOfPie(arr, straterString, endlerString) {
    let startIndex = arr.indexOf(straterString)
    let endIndex = arr.indexOf(endlerString) + 1;

    return arr.slice(startIndex, endIndex)
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
// ['Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie']
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')
// ['Pot Pie',
// 'Steak and Cheese Pie',
// 'Butter Chicken Pie',
//     'Smoked Fish Pie']
