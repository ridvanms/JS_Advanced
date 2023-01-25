function sumTable() {
    const sum = document.getElementById('sum')
    let trArr = document.querySelectorAll('table tr')
    let totalPrice = 0;
    for(let i = 1;i<trArr.length;i++){
        let cols = trArr[i].children;
        let cost = cols[cols.length - 1].textContent;
        totalPrice += Number(cost)
    }
    sum.textContent = totalPrice
}