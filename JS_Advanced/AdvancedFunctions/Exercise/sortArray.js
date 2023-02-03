function sorting(arr,command){
    return command === 'asc' ? arr.sort((a,b)=>a-b) : arr.sort((a,b)=>b-a)
}
sorting([14, 7, 17, 6, 8], 'asc')
// [6, 7, 8, 14, 17]
sorting([14, 7, 17, 6, 8], 'desc')
// [17, 14, 8, 7, 6]