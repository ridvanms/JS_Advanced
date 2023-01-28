function deleteByEmail() {
    let customersContent = document.querySelectorAll('table tbody tr')
    let resultContent =document.getElementById('result')
    let emailInput = document.querySelector('input[name="email"]')
    
    
    let trElements = Array.from(customersContent)

    for (const tr of trElements) {
       
        let email = tr.children[1]
        
        if(email.textContent === emailInput.value){
            if(emailInput.value === '')  return 
            tr.remove()
            resultContent.textContent = 'Deleted'
        }else {
            
            resultContent.textContent = 'Not found.'
        }
    }
    emailInput.value = ''


}