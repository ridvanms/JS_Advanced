function create(words) {
   let [...arr] = words
   const contentDocument = document.getElementById('content')
   for (const text of arr) {
      const div = document.createElement('div')
      const p = document.createElement('p')
      p.textContent = text;
      p.style.display = 'none'     
      div.addEventListener('click',()=>p.style.display = 'block')
      div.appendChild(p);
      contentDocument.appendChild(div)
   }  
}