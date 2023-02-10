function notify(message) {
  const notificationContainer = document.getElementById('notification')
  
  if(notificationContainer.style.display !== 'block'){
    notificationContainer.textContent = 'This is a message'
    
    notificationContainer.style.display = 'block'
  }

  notificationContainer.addEventListener('click',(event)=>{
    // console.log(event.target)
    notificationContainer.textContent = ''
    notificationContainer.style.display = 'none'
  })  
  
}