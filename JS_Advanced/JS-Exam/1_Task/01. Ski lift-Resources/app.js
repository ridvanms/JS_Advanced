window.addEventListener('load', solve);

function solve() {
   let fName = document.getElementById('first-name')
   let lName = document.getElementById('last-name')
   let peopleCount = document.getElementById('people-count')
   let fromData = document.getElementById('from-date')
   let daysCount = document.getElementById('days-count')

   let nextBtn = document.getElementById('next-btn')
   nextBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        let firstName = fName.value 
        let lastName = lName.value 
        let NumberOfPeople = peopleCount.value 
        let data = fromData.value 
        let days = daysCount.value 

        if(!firstName || !lastName || !NumberOfPeople || !data || !days)return
        
        let ulTicketInfoList = document.querySelector('.ticket-info-list')
        
        
        let li = document.createElement('li')
        li.classList.add('ticket')
        
        li.innerHTML = `
        <article>
            <h3>Name: ${firstName} ${lastName}</h3>
            <p>From date: ${data}</p>
            <p>For ${days} days</p>
            <p>For ${NumberOfPeople} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
            `

        ulTicketInfoList.appendChild(li)
              
        let editBtn = document.querySelector('.edit-btn')
        editBtn.addEventListener('click',(e)=>{
            li.remove()

            fName.value = firstName
            lName.value = lastName
            peopleCount.value = NumberOfPeople
            fromData.value = data
            daysCount.value = days

            nextBtn.disabled = false
        })
        
        let continueBtn = document.querySelector('.continue-btn')
        continueBtn.addEventListener('click',()=>{
            li.remove();

            let li1 = document.createElement('li');
            li1.classList.add('ticket-content')

            li1.innerHTML = `
            <article>
                <h3>Name: ${firstName} ${lastName}</h3>
                <p>From date: ${data}</p>
                <p>For ${days} days</p>
                <p>For ${NumberOfPeople} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>
                `

            let confermTicketUl = document.querySelector('.confirm-ticket')
            confermTicketUl.appendChild(li1)

            let cancelBtn = document.querySelector('.cancel-btn');
            cancelBtn.addEventListener('click',()=>{
                li1.remove();
                nextBtn.disabled = false 
            })

            let confirmedBtn = document.querySelector('.confirm-btn');
            confirmedBtn.addEventListener('click',()=>{
                let mainDiv = document.getElementById('main');
                mainDiv.remove();

                let body = document.getElementById('body')
                
                let h1 = document.createElement('h1')
                h1.id = 'thank-you'
                h1.textContent = 'Thank you, have a nice day!'

                let backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back'

                backBtn.addEventListener('click',()=>{
                    location.reload()
                })

                body.appendChild(h1)
                body.appendChild(backBtn)

                
            })
        })
        
        fName.value = ''
        lName.value = ''
        peopleCount.value = ''
        fromData.value = ``
        daysCount.value = ''
        
        nextBtn.disabled = true
        editBtn.disabled = false;
        continueBtn.disabled = false;
   })
}


    
    
