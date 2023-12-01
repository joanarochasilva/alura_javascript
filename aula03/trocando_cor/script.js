const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')

pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

const cores = ['blue', 'red', 'green']
let indiceCorAtual = 0

function desenhaCirculo(evento) {
  const x = evento.pageX - tela.offsetLeft;
  const y = evento.pageY - tela.offsetTop;

  pincel.fillStyle = cores[indiceCorAtual];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();
  console.log(x + ',' + y);
}
tela.onclick = desenhaCirculo;

function mudaCor() {
  indiceCorAtual++;
  if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0; // volta para a primeira cor, azul
  }
  return false; // para não exibir o menu padrão do canvas
}
tela.oncontextmenu = mudaCor;