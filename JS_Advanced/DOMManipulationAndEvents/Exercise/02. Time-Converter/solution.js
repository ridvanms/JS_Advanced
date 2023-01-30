function attachEventsListeners() {
    let days = document.getElementById('days')
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations = { 
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    }
    document.getElementById('daysBtn').addEventListener('click',onConver)
    document.getElementById('hoursBtn').addEventListener('click',onConver)
    document.getElementById('minutesBtn').addEventListener('click',onConver)
    document.getElementById('secondsBtn').addEventListener('click',onConver)
    function conver(value,unit){
        let days = value / rations[unit]
        return {
            days:days,
            hours:days * rations.hours,
            minutes:days * rations.minutes,
            seconds:days * rations.seconds
        }
    }
    function onConver(event){
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = conver(Number(input.value),input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds
    }
}