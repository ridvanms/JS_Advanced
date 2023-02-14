function solve() {
    let recipientNameInput = document.getElementById('recipientName')
    
    let titleInput = document.getElementById('title')

    let messageInput = document.getElementById('message')
   
    const addBtn = document.getElementById('add')
    const resetBtn = document.getElementById('reset')
    const listUL = document.getElementById('list')

    resetBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    })

    addBtn.addEventListener('click',onAdd)
    function onAdd(event){
        event.preventDefault()
        
        const recipient = recipientNameInput.value
        const title = titleInput.value;
        const message = messageInput.value
        if(recipient === '' || title ==='' || message === '')return;

        const sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        ///////////////////////////////////////////////////////////////////////////
        sendBtn.addEventListener('click',onSend);
        deleteBtn.addEventListener('click',onDelete);

        const div = document.createElement('div');
        div.id = 'list-action';

        div.appendChild(sendBtn)
        div.appendChild(deleteBtn)

        const span  = document.createElement('span');
        span.textContent = messageInput.value;

        const h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${recipient}`

        const h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${title}`;

        const li = document.createElement('li');
        
        li.appendChild(h4Title)
        li.appendChild(h4Name)
        li.appendChild(span)
        li.appendChild(div)

        listUL.appendChild(li)

        recipientNameInput.value = ''
        titleInput.value = '';
        messageInput.value = '';

        function onDelete(event){
            event.preventDefault();
    
            const deleteUl = document.querySelector('.delete-list')
    
            
            const parEl = event.target.parentElement.parentElement
            
            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`
            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`
    
    
            const li = document.createElement('li');
            li.appendChild(spanTo);
            li.appendChild(spanTitle);
    
            deleteUl.appendChild(li)
           
            parEl.remove();
        }
    
        function onSend(event){
            event.preventDefault();
    
            const parEl = event.target.parentElement.parentElement
    
            const sentListUl = document.querySelector('.sent-list')
    
            const delBtn = document.createElement('button')
            delBtn.type = 'submit'
            delBtn.classList.add('delete')
            delBtn.textContent = 'Delete';
    
            delBtn.addEventListener('click',(e)=>{
                e.preventDefault();
                const deleteUl = document.querySelector('.delete-list')
    
            
                const parEl = e.target.parentElement.parentElement
                
                const spanTo = document.createElement('span');
                spanTo.textContent = `${parEl.querySelectorAll('span')[0].textContent}`
                const spanTitle = document.createElement('span');
                spanTitle.textContent = `${parEl.querySelectorAll('span')[1].textContent}`
        
        
                const li = document.createElement('li');
                li.appendChild(spanTo);
                li.appendChild(spanTitle);
        
                deleteUl.appendChild(li)
               
                parEl.remove();
            })
    
            const div = document.createElement('div');
            div.classList.add('btn');
    
            div.appendChild(delBtn)
    
            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`;
    
            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;
    
            const li = document.createElement('li');
            li.appendChild(spanTo)
            li.appendChild(spanTitle)
            li.appendChild(div)
    
            sentListUl.appendChild(li)
    
            parEl.remove();
        }
    }

}
solve()