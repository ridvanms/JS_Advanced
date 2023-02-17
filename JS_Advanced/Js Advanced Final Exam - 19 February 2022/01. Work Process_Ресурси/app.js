function solve() {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const addSum = document.getElementById('sum')

    const addWorkerBtn = document.getElementById('add-worker').addEventListener('click',onAddWorker)


    let totalBudget = 0;
    function onAddWorker(e = event){
        e.preventDefault();
        if(!fnameInput.value || !lnameInput.value || !emailInput.value || !birthInput.value || !positionInput.value || !salaryInput.value)return 
        let fname = fnameInput.value
        let lname = lnameInput.value
        let email = emailInput.value
        let birth = birthInput.value;
        let position = positionInput.value
        let salary = salaryInput.value
        
        totalBudget += Number(salary)
        addSum.textContent = `${totalBudget.toFixed(2)}`
        
        const tbody = document.getElementById('tbody');
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${fname}</td>   
        <td>${lname}</td>   
        <td>${email}</td>   
        <td>${birth}</td>   
        <td>${position}</td>   
        <td>${salary}</td>   
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`
        
        tr.querySelector('.fired').addEventListener('click',(e)=>{
            // const messageP = document.getElementById('message');
            totalBudget -= +salary
            addSum.textContent = `${totalBudget.toFixed(2)}`
            
            e.target.parentElement.parentElement.remove();
        })
        tr.querySelector('.edit').addEventListener('click',(e)=>{
            let alltd = e.target.parentElement.parentElement.querySelectorAll('td')
            fnameInput.value = alltd[0].textContent
            lnameInput.value = alltd[1].textContent
            emailInput.value = alltd[2].textContent
            birthInput.value = alltd[3].textContent
            positionInput.value = alltd[4].textContent
            salaryInput.value = alltd[5].textContent
            
            totalBudget -= +salary
            addSum.textContent = `${totalBudget.toFixed(2)}`
            
            tr.remove();
        })
        tbody.appendChild(tr)

        fnameInput.value = ''
        lnameInput.value = ''
        emailInput.value = ''
        birthInput.value = ''
        positionInput.value = ''
        salaryInput.value = ''

    }
   
}
solve()