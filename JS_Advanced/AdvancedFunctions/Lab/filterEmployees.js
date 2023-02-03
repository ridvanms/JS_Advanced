function filterEmployees(dataInJSON,criteria){
    let data = JSON.parse(dataInJSON);
    let [key,value] = criteria.split('-')
    let finalArr = data.filter(obj => obj[key] === value)
    if(!finalArr.length) return 
    for (let i = 0;i<finalArr.length;i++) {
        console.log(`${i}. ${finalArr[i].first_name} ${finalArr[i].last_name} - ${finalArr[i].email}`)
    }
}


filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com