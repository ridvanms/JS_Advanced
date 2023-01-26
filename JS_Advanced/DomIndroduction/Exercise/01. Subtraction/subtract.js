function subtract() {
    const firstInputNumber = document.getElementById('firstNumber').value
    const secondInputNumber = document.getElementById('secondNumber').value
    
    const resultInput = document.getElementById('result')

    const subtract = (a,b) => {
        return a-b
    }
    resultInput.textContent = subtract(Number(firstInputNumber),Number(secondInputNumber))
}
