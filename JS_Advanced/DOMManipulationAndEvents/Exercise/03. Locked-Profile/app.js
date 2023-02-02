function lockedProfile() {
    const buttons = document.getElementsByTagName('button') 
    for (const btn of buttons) {
        btn.addEventListener('click',onClick)
    }
    function onClick(event){
        let profil = event.target.parentElement;
        let isChecked = profil.querySelector('input[value="lock"]').checked
        if(!isChecked){
        const hiddenDiv = profil.querySelector('div')
        
        
        if (hiddenDiv.style.display !== "block") {
            hiddenDiv.style.display = "block";
            event.target.textContent = 'Hide it'
          } else {
              hiddenDiv.style.display = "none";
              event.target.textContent = 'Show more'
          }   
        }
    }
    
}