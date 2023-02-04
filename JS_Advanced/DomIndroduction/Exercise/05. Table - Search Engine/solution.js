function solve() {
   const tdContentsInTBody = document.querySelectorAll('tbody tr td')
   const searchField = document.getElementById('searchField')
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let tdArr = Array.from(tdContentsInTBody);
   function onClick() {

      for(let i = 0;i<tdArr.length;i+=3){
         tdArr[i].parentElement.classList.remove('select')
         
         if(tdArr[i].textContent.includes(searchField.value)){
            tdArr[i].parentElement.classList.add('select')
         }else if(tdArr[i+1].textContent.toLowerCase().includes(searchField.value.toLowerCase())){
            tdArr[i].parentElement.classList.add('select')
         }else if(tdArr[i+2].textContent.toLowerCase().includes(searchField.value.toLowerCase())){
            tdArr[i].parentElement.classList.add('select')
         }
      }
   }
}