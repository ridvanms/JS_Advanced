function solve(arr,startIndex,endIndex){
    
    if(typeof arr !== 'object') return 'NaN';
    if(startIndex < 0 ) startIndex = 0;
    if(endIndex > arr.length -1) endIndex = arr.length -1 ;
    if(!arr.length) return 0;

    let result = 0
    for(let i = startIndex;i<=endIndex;i++){
        if(!(typeof arr[i] === 'number')) return 'NaN'
        else{
            result = +(result + arr[i]).toFixed(12)
        }
    }
    return result
    
}
solve([1.1, 'something', 3.3, 4.4, 5.5], -3, 1)
module.exports = solve;