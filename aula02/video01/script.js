 function desenhaQuadrado(x, y, cor) {

    const tela = document.querySelector('canvas')
    const pincel = tela.getContext('2d')

    pincel.fillStyle = cor
    pincel.fillRect(x,y,50,50)

    pincel.fillStroke = 'black'
    pincel.strokeRect(x,y,50,50)


 }  
   
let x = 0
while (x < 600) {

    desenhaQuadrado(x, 0, 'green')
    x += 50
}