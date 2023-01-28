function addItem() {
    const newIteminput = document.getElementById('newItemText')
    const ulContent = document.getElementById('items')

    const  li = document.createElement('li')
    li.textContent = `${newIteminput.value}`
    const  a = document.createElement('a')
    a.setAttribute('href','#')
    a.textContent = '[Delete]'
    
    li.appendChild(a)

    a.addEventListener('click',()=>a.parentElement.remove())
    
    ulContent.appendChild(li)
    newIteminput.value = ''

}