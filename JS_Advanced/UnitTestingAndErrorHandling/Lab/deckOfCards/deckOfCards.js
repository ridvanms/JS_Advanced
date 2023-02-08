function printDeckOfCards(cards){
    let hasError = false
    function createCard(face,suit){
        const faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        const suits = {
        "S":'\u2660',
        "H":'\u2665',
        "D":'\u2666',
        "C":'\u2663'
    }

    if(faces.includes(face) === false){
        // throw new TypeError(`Invalid face`);
        console.log(`Invalid card: ${face+`${suit}`}`)
        hasError = true
        return
    }else if (suit in suits == false){
        console.log(`Invalid card: ${face+`${suit}`}`)
        hasError = true
        return
    }
    

    const result = {
        face,
        suit,
        toString(){
            return this.face + suits[this.suit]
        }
    }
    return result

    
}
    let cardsArr = []
    cards.map(card => {
        let face = '';
        let suit = '';
        if(card.length > 2 ){
            face = card.slice(0,2)
            suit = card.slice(2)
            
        }else{
            [face,suit] = card.split('')
        }
        cardsArr.push(createCard(face,suit))
    })
    if(!hasError){
        console.log(cardsArr.join(' '))
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
// A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C'])
// Invalid card: 1C