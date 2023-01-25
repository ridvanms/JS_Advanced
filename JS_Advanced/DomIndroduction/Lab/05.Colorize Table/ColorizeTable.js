function colorize() {  
    let trArr = Array.from(document.getElementsByTagName("tr"))
    trArr.shift()
    trArr.forEach((el,i)=> {
        if(i % 2 === 0) el.style = 'background-color:Teal'
    })
}