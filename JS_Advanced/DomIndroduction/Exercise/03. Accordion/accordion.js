function toggle() {
    const toggleButton = document.querySelector('.button')
    const text = document.getElementById('extra')
    if(toggleButton.textContent ==='More'){
        toggleButton.textContent = 'Less'
        text.style.display = 'block'
    }else {
        toggleButton.textContent = 'More'
        text.style.display = 'none'
    }
}