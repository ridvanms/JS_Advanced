function addItem() {
    let newItemText = document.getElementById('newItemText')
    let items = document.getElementById('items')

    let li = document.createElement('li')
    li.textContent = newItemText.value;
    
    items.appendChild(li)

    newItemText.value = ''
}