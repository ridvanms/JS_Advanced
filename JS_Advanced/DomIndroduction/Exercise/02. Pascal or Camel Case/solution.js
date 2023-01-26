function solve() {
  let textInputValue = document.getElementById('text').value
  let namingConventionInputValue = document.getElementById('naming-convention').value

  let resultInput = document.getElementById('result')
  const PATTERN = /\S+/gm;
  
  if(namingConventionInputValue === "Camel Case"){
    let arrWithWords = textInputValue.match(PATTERN);
    let text = `${arrWithWords.shift()}`
    arrWithWords.map(el => text += el[0].toUpperCase()+el.slice(1))
    
    resultInput.textContent = text
  }else if(namingConventionInputValue === "Pascal Case"){
    let arrWithWords = textInputValue.match(PATTERN);
    resultInput.textContent = arrWithWords.map(el => `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`).join('');
  }else {
    resultInput.textContent = "Error!"
  }

}