const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')

pincel.fillStyle = 'gray'
pincel.fillRect(0,0,600,400)

let raio = 10

function desenhaCirculo(evento) {
    const x = evento.pageX - tela.offsetLeft
    const y = evento.pageY - tela.offsetTop

    if(evento.shiftKey) {
        raio += 10
    }

    pincel.fillStyle = 'blue'
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2 * 3.14)
    pincel.fill()

}

tela.onclick = desenhaCirculo