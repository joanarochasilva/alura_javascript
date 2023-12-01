
// tela e pincel
const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')

// função que desenha os quadrados
function desenhaQuadrado(x, y, tamanho, cor) {
    // cria o retângulo
    pincel.fillStyle = cor
    pincel.fillRect(x, y, tamanho, tamanho)
    // cria a linha
    pincel.fillStroke = 'black'
    pincel.strokeRect(x,y,tamanho,tamanho)
}

function desenhaTexto(texto, x , y) {

    pincel.font='20px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    

}

desenhaTexto("Qual é a fração?", 50, 30);

const y = 50

desenhaQuadrado(50, y, 100, 'green');
desenhaQuadrado(150, y, 100, 'green');
desenhaQuadrado(250, y, 100, 'green');
desenhaQuadrado(350, y, 100, 'white');