
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {

    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    let raio = 10

    if (evento.shiftKey) {
        raio += 20
    }
    
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);
}

tela.onclick = desenhaCirculo;

