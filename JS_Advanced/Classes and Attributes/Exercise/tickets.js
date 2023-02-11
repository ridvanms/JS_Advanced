function tickets(arr,criteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }
    let tickets = []

    while(arr[0] !== undefined){
        let line = arr.shift();
        let [destination,price,status] = line.split('|')

        tickets.push(new Ticket(destination,price,status))
    }
    if(criteria === 'price'){
        tickets.sort((a,b)=> a[criteria] - b[criteria])
    }else{
        tickets.sort((a,b)=>a[criteria].localeCompare(b[criteria]))
    }
    return tickets
}
tickets(
    [
        "Philadelphia|94.20|available",

        "New York City|95.99|available",

        "New York City|95.99|sold",

        "Boston|126.20|departed",
    ],

    "destination"
);

// tickets(['Philadelphia|94.20|available',

//     'New York City|95.99|available',

//     'New York City|95.99|sold',

//     'Boston|126.20|departed'],

//     'status')