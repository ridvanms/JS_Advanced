function extract(content) {
    let pContent = document.getElementById('content').textContent
    let pattern = /\((?<word>[\w ]+)\)/gm
    // let match = pContent.match(pattern)
    let text = ''
    for (const match of pContent.matchAll(pattern)) {
        text += `${match.groups.word}; `
    }
    pContent.textContent = text
}