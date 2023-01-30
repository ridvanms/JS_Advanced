function attachGradientEvents() {
    const result = document.getElementById('result')
    const gradient = document.getElementById('gradient')

    const gradientMove = (e) => {
        let percent = Math.floor((e.offsetX/ e.target.offsetWidth) * 100)
        result.textContent = `${percent}%`
    }
    gradient.addEventListener('mousemove',gradientMove)
}