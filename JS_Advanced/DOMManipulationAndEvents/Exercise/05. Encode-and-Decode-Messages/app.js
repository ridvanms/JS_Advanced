function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button')
    let shifer = ''
    let encriptedMessage = ''
    let decriptonMessage = ''
    for (const btn of buttons) {
        
            btn.addEventListener('click',onClick)
        
    }
    function onClick(){
        let receiverMessage = this.parentElement.parentElement.children[1].querySelector('textarea')
        
        if(this.textContent.includes("Encode")){
            encriptedMessage = ''
        
            let message = this.parentElement.querySelector('textarea')
            
               
            let encodeMessageArr = message.value.match(/\S+/gm)
                
            for (const word of encodeMessageArr) {
                for (let i = 0; i < word.length;i++) {
                    if(i>0 && i !== word.length ) encriptedMessage+="|"
                    encriptedMessage += `${word[i].charCodeAt(0)+1}`
                    
                }
                if(encriptedMessage.length > 1)  encriptedMessage += ' '
            }
            message.value = ''
            
            let wordsArr = encriptedMessage.trim().split(' ').map(numbers => numbers)
            
            let letters = wordsArr.map(strWithNum => strWithNum.split('|')
            .map((num,i) => {
                decriptedLetters+=String.fromCharCode(num-1)
                
                return String.fromCharCode(num)
                
            }))
            console.log(decriptedLetters)
            letters.map(letter =>shifer += letter.join(''))
            

            receiverMessage.value = shifer
            shifer = ''
        }
    }
}