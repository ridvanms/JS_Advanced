function extractText() {
    const result = document.getElementById('result')
    const items = document.getElementById('items')
    
    for (const li of Array.from(items.children)) {
        result.textContent += `${li.textContent}\n`
    }
}