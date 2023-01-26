function search() {
   
   const townsUl = document.getElementById('towns')
   const result= document.getElementById('result')
   const searchInputValue = document.getElementById('searchText')

   let arrOfLists = Array.from(townsUl.children)
   let counter = 0;
   for (const li of arrOfLists) {
      if(li.textContent.toLowerCase().includes(searchInputValue.value.toLowerCase())){
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
         counter++
      }else{
         li.style.textDecoration = ''
         li.style.fontWeight = ''
         
      }
   }
   
   result.textContent = `${counter} matches found.`
   counter= 0;
   searchInputValue.value = ''
}
