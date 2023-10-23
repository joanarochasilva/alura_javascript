const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')

// retângulo exterior
pincel.fillStyle = 'black'
pincel.beginPath()
pincel.moveTo(50,50)
pincel.lineTo(50,400)
pincel.lineTo(400,400)
pincel.fill()

// retângulo interior
pincel.fillStyle = 'white'
pincel.beginPath()
pincel.moveTo(100,175)
pincel.lineTo(100,350)
pincel.lineTo(275,350)
pincel.fill()