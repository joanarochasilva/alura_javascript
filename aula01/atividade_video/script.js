// api canvas = permite desenhar gráficos, formas geométricas e outras coisas utilizando o javascript.

let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

// retângulo do fundo
pincel.fillStyle = 'lightgrey' //fillStyle é uma propriedade, por isso não tem () e sim um valor atribuido
pincel.fillRect(0,0, 600, 400) // método que diz onde o pincel irá desenhar e de qual tamanho será o desenho

// retângulo da esquerda
pincel.fillStyle ='green'
pincel.fillRect(0, 0, 200, 400) 

// retângulo da direita
pincel.fillStyle ='red'
pincel.fillRect(400, 0, 200, 400) 

// triângulo do meio
pincel.fillStyle = 'yellow'
pincel.beginPath()
pincel.moveTo(300, 200)
pincel.lineTo(200, 400)
pincel.lineTo(400,400)
pincel.fill()

// circulo
pincel.fillStyle = 'blue'
pincel.beginPath();
pincel.arc(300,200, 50, 0, 2 * 3.14)
pincel.fill()