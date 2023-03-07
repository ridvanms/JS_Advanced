async function attachEvents() {
    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click',gettingWeather)
    
    const locationInput = document.getElementById('location');
    const locationURL =  `http://localhost:3030/jsonstore/forecaster/locations`
    const resLocations = await fetch(locationURL);
    if(!resLocations) throw new Error(`Opps error with locationUrl`);
    const dataLocations = await resLocations.json();

    async function gettingWeather(e = event){
        e.preventDefault();
        let locationValue = locationInput.value;
        
        if(!locationValue)return 
        
        let locationState = dataLocations.find(locationObj => locationObj.name === locationValue)
        if(!locationState)throw new Error(`There is no such location in this url`)
        let forecastCode = locationState.code
        
    //    weather signs
       const weather = {
            "Sunny":"☀", 
            "Partly sunny":"⛅",
            "Overcast":"☁",
            "Rain":"☂",
            "Degrees":"°"
       }

       const creating = {
           createDiv(element,atr,atrName){
               let el = document.createElement(element)
               el[atr] = atrName
               
               return el
           },
           createSpan(element,atribute,atrName,value){
                let el = document.createElement(element)
                el.setAttribute(atribute,atrName)
                el.textContent = value
                return el
           }
       }


        const forecastDiv = document.getElementById('forecast')
        
       console.log(forecastDiv.children[0].children[1])
       let hasForecast1 = forecastDiv.children[0].children[1] 
       let hasForecast2 = forecastDiv.children[1].children[1]
       if(hasForecast1) hasForecast1.remove()  
       if(hasForecast2) hasForecast2.remove()  


        forecastDiv.style.display = 'block'
        //request for one day
        const currentDiv = document.getElementById('current');
        
        let forecastUrl = `http://localhost:3030/jsonstore/forecaster/today/${forecastCode}`
        fetch(forecastUrl)
        .then(res => res.json())
        .then(data => {
            let {forecast,name} = data
            
            let divInCurrent = creating.createDiv('div','class','forecasts')
            
            divInCurrent.appendChild(creating.createSpan('span','class','condition symbol',`${weather[forecast.condition]}`))
            
            let conditionSpan = creating.createSpan('span','class','condition','')
            conditionSpan.appendChild(creating.createSpan('span','class','forecast-data',`${name}\n`))
            conditionSpan.appendChild(creating.createSpan('span','class','forecast-data',`${forecast.low}° / ${forecast.high}°\n`))
            conditionSpan.appendChild(creating.createSpan('span','class','forecast-data',`${forecast.condition}\n`))
            
            divInCurrent.appendChild(conditionSpan)

            currentDiv.appendChild(divInCurrent)

        }).catch((err) => {console.log(`Opps! ${err}`)})
        
        //for three days request
        const upcomingDiv = document.getElementById('upcoming');
        
        let treeDayForecastUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${forecastCode}`
        let res = await fetch(treeDayForecastUrl)
        let forThreeDays = await res.json();
        
        let forecasts = forThreeDays.forecast
        let citys = forThreeDays.name;
        
        let foreCastInfoDiv = creating.createDiv('div','class','forecast-info')
        
        for (const forecast of forecasts) {
            
            let spanUpcoming = creating.createSpan('span','class','upcoming','');
            spanUpcoming.appendChild(creating.createSpan('span','class','symbol',`${weather[forecast.condition]}`))
            spanUpcoming.appendChild(creating.createSpan('span','class','forecast-data',`${forecast.low}° / ${forecast.high}°`))
            spanUpcoming.appendChild(creating.createSpan('span','class','forecast-data',`${forecast.condition}`))

            foreCastInfoDiv.appendChild(spanUpcoming)
        }
        upcomingDiv.appendChild(foreCastInfoDiv)
        
    }
}

attachEvents();