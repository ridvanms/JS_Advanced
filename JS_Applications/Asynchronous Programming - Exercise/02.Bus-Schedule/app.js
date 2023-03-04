function solve() {
    const infoDiv = document.getElementById('info');

    const departInput = document.getElementById('depart');
    const arriveInput = document.getElementById('arrive');

    function toggleBtn(){
        if(departInput.disabled === false){
            departInput.disabled = true
            arriveInput.disabled = false
        }else{
            departInput.disabled = false;
            arriveInput.disabled = true;
        }
    }
    let stopId = {
        next:'depot'
    }

    
    
    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            stopId = data
            infoDiv.textContent = `Next stop ${stopId.name}`
        }).catch(err => infoDiv.textContent = 'Opppps! Something went wrong')
        toggleBtn();
    }
    
    function arrive() {
        infoDiv.textContent = `Arriving at ${stopId.name}`
        
        toggleBtn();
    }
    

    return {
        depart,
        arrive
    };
}

let result = solve();