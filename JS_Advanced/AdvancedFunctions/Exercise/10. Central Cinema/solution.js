function solve() {
    const div = document.getElementById('container');
    let [name,hall,ticketPrice] = document.querySelectorAll('input');
    const ulMovies = document.getElementById('movies').querySelector('ul');
    const ulArchive = document.getElementById('archive').querySelector('ul');
    
    
    
    const btn = document.querySelector('button')
    btn.addEventListener('click',onClick)
    
    function onClick(event){
        event.preventDefault();
        let nameValue = name.value
        let hallValue = hall.value
        let ticketPriceValue = ticketPrice.value
        
        if(nameValue === '' || hallValue === '' || !Number(ticketPriceValue) ) return 
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = nameValue;
        const strong = document.createElement('strong');
        strong.textContent = hallValue;
        const divInLi = document.createElement('div');
        
        const strong1 = document.createElement('strong');
        strong1.textContent = ticketPriceValue
        const input = document.createElement('input');
        input.placeholder = 'Tickets Sold'
        const button = document.createElement('button');
        button.textContent = 'Archive'

        button.addEventListener('click',onArch)
        function onArch(event){
            
            if(!Number(input.value) || input.value === '') return 
            
            let total = Number(input.value) * Number(strong1.textContent)
            
            const li2  = document.createElement('li');
            
            const span2 = document.createElement('span');
            span2.textContent = nameValue
            const strong2 = document.createElement('strong');
            strong2.textContent = `Total amount: ${total.toFixed(2)}`
            const button2 = document.createElement('button');
            button2.textContent = 'Delete'
            button2.addEventListener('click',(e)=>e.target.parentElement.remove())
            
            
            li2.appendChild(span2)
            li2.appendChild(strong2)
            li2.appendChild(button2)
            
            ulArchive.appendChild(li2)
        }
        
        divInLi.appendChild(strong1)
        divInLi.appendChild(input)
        divInLi.appendChild(button)
        
        li.appendChild(span)
        li.appendChild(strong)
        li.appendChild(divInLi)
        
        ulMovies.appendChild(li)
        
        name.value = ''
        hall.value = ''
        ticketPrice.value = ''
    }
    
    const clearButton = document.getElementById('archive').querySelector('button')
    clearButton.addEventListener('click',(e)=>{
        Array.from(e.target.parentElement.querySelector('ul').children).map(child => child.remove())
        
    })
    
}