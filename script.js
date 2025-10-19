function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto icone de Mayk Brito sorrindo, usando óculos de sol e jaqueta preta, sem barba com o fundo degrade rosa, roxo e azul.')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto icone de Mayk Brito sorrindo, usando óculos de grau e jaqueta preta, sem barba com o fundo degrade rosa, roxo e azul.')
    }

}