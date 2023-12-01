// tela de desenho e pincel
const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')
// retângulo de fundo
pincel.fillStyle = 'lightgray'
pincel.fillRect(0,0, 600, 400)
// função para desenhar círculos que formam a flor
function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2 * Math.PI)
    pincel.fill()
}
// função para desenhar todos os circulos que formam a flor
function desenhaFlor(x, y) {
    desenhaCirculo(x, y, 20, 'red')
    desenhaCirculo(x, y + 40, 20, 'blue')
    desenhaCirculo(x, y - 40, 20, 'yellow')
    desenhaCirculo(x + 40, y, 20, 'black')
    desenhaCirculo(x - 40, y, 20, 'orange' )
}
// desenha a flor
desenhaFlor(300, 200)

