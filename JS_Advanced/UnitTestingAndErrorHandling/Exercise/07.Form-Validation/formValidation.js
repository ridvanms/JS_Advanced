function validate() {
    const userNameInput = document.getElementById('username')
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confPassowrdInput = document.getElementById('confirm-password');
    const companyCheckBox = document.getElementById('company')
    const companyInfoFiled = document.getElementById('companyInfo')
    const submitBtn = document.getElementById('submit');
    const companyNumberInput = document.getElementById('companyNumber')
    const valid = document.getElementById('valid');
    
    submitBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        let allInputs = Array.from(event.target.parentElement.querySelectorAll('input'))
        allInputs.forEach(el => el.style.borderColor = '')
        invalidElements = [];

        const usernamePattern = /\w+/gm
        if(!usernamePattern.test(userNameInput.value) || !(userNameInput.value.length >= 3 && userNameInput.value.length <= 20)){
            invalidElements.push(userNameInput)
            
        }
        const passwordPattern = /\w+/gm
        if(!passwordPattern.test(passwordInput.value) || !(passwordInput.value.length >=5 && passwordInput.value.length <= 15)){
            invalidElements.push(passwordInput)
            
        }

    
        if(confPassowrdInput.value !== passwordInput.value){
            invalidElements.push(confPassowrdInput);
           
        }
        const emailPattern = /.+@.+[.]{1}/gm
        
        if(!emailPattern.test(emailInput.value)){
            invalidElements.push(emailInput);
            
        }
        
        if(companyCheckBox.checked){
            let numPattern = /\d{4}/gm
            if(!numPattern.test(companyNumberInput.value)||  Number(companyNumberInput.value) > 9999){
                invalidElements.push(companyNumberInput)
                
            }
        }
        
        invalidElements.forEach(element => {
            element.style.borderColor = 'red'
        });

        
        if(invalidElements.length !== 0){
            valid.style.display = 'none'
            
        }else{
            valid.style.display = 'block'
        }
        
    })
    companyCheckBox.addEventListener('change',()=>{
        if(companyCheckBox.checked){
            companyInfoFiled.style.display = 'block'
        }else{
            companyInfoFiled.style.display = 'none'
        }
    })
}
