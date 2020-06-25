let cenario, pontuacao, trilhaSonora, somPulo, gameOver,
		personagem, inimigo, troll, azaza

const matrizInimigo = [
		[0, 0], [104, 0], [208, 0], [312, 0],
		[0, 104], [104, 104], [208, 104], [312, 104],
		[0, 208], [104, 208], [208, 208], [312, 208],
		[0, 312], [104, 312], [208, 312], [312, 312],
		[0, 418], [104, 418], [208, 418], [312, 418],
		[0, 522], [104, 522], [208, 522], [312, 522],
		[0, 626], [104, 626], [208, 626], [312, 626]
	]

const matrizPersonagem = [
		[0, 0], [220, 0], [440, 0], [660, 0],
		[0, 270], [220, 270], [440, 270], [660, 270],
		[0, 540], [220, 540], [440, 540], [660, 540],
		[0, 810], [220, 810], [440, 810], [660, 810]
	]

const matrizTroll = [
		[0, 0], [400, 0], [800, 0], [1200, 0], [1600, 0],
		[0, 400], [400, 400], [800, 400], [1200, 400], [1600, 400],
		[0, 800], [400, 800], [800, 800], [1200, 800], [1600, 800],
		[0, 1200], [400, 1200], [800, 1200], [1200, 1200], [1600, 1200],
		[0, 1600], [400, 1600], [800, 1600], [1200, 1600], [1600, 1600],
		[0, 2000], [400, 2000], [800, 2000]
	]

const matrizAzaza = [
		[0, 0], [200, 0], [400, 0],
		[0, 150], [200, 150], [400, 150],
		[0, 300], [200, 300], [400, 300],
		[0, 450], [200, 450], [400, 450],
		[0, 600], [200, 600], [400, 600],
		[0, 750]
]

const viloes = []

function preload() {
	cenario = loadImage('imagens/cenario/floresta.png')
	gameOver = loadImage('imagens/assets/game-over.png')
	trilhaSonora = loadSound('sons/trilha_jogo.mp3')
	somPulo = loadSound('sons/somPulo.mp3')
	personagem = loadImage('imagens/personagem/correndo.png')
	inimigo = loadImage('imagens/inimigos/gotinha.png')
	troll = loadImage('imagens/inimigos/troll.png')
	azaza = loadImage('imagens/inimigos/gotinha-voadora.png')
}

function keyPressed() {
	if (key == 'ArrowUp') {
		personagem.pula()
		somPulo.play()
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(40)
	trilhaSonora.loop()

	cenario = new Cenario(cenario, 4)
	pontuacao = new Pontuacao()
	personagem = new Personagem(matrizPersonagem, personagem, 0, 30, 220, 270, 220, 270)
	viloes.push(new Inimigo(matrizInimigo, inimigo, width - 104, 30, 104, 104, 104, 104, 10, 100))
	viloes.push(new Inimigo(matrizTroll, troll, width, -10, 400, 400, 400, 400, 10, 500))
	viloes.push(new Inimigo(matrizAzaza, azaza, width - 200, 500, 200, 150, 200, 150, 8, 300))
}

function draw() {
	cenario.exibe()
	cenario.move()

	pontuacao.exibe()
	pontuacao.soma()

	personagem.exibe()
	personagem.gravidade()

	viloes.forEach(vilao => {
		vilao.exibe()
		vilao.move()
		if (personagem.colisao(vilao)) {
			image(gameOver, width / 2 - 206, height / 2 - 39)
			noLoop()
		}
	})
}
