function validate() {
    const email = document.getElementById('email');
    
    const PATTERN = /[a-z]+@[a-z]+[.][a-z]+/gm;

    email.addEventListener('change',()=>{
        if(PATTERN.test(email.value)){
            email.classList.remove('error')
        }else{
            email.classList.add('error')
        }
    })

    console.log(email)
}