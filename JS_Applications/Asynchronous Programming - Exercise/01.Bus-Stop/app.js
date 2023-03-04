async function getInfo() {
    const stopId = document.getElementById("stopId");
    let stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses')

    busesUl.replaceChildren('')

    let busId = stopId.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`

    const res = await fetch(url);
    
    
    if(res.status !== 200){
        stopNameDiv.textContent = 'Error'
        return
    }

    const data = await res.json();

    stopNameDiv.textContent = data.name;

    for(const [key,value] of Object.entries(data.buses)){
        const li = document.createElement('li');
        li.textContent = `Bus ${key} arrives in ${value} minutes`;
        busesUl.appendChild(li)
    }


}