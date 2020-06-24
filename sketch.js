let cenario, trilhaSonora, somPulo, personagem, inimigo

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

function preload() {
	cenario = loadImage('imagens/cenario/floresta.png')
	trilhaSonora = loadSound('sons/trilha_jogo.mp3')
	somPulo = loadSound('sons/somPulo.mp3')
	personagem = loadImage('imagens/personagem/correndo.png')
	inimigo = loadImage('imagens/inimigos/gotinha.png')
}

function keyPressed() {
	if (key == 'ArrowUp') {
		personagem.pula()
		somPulo.play()
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(40);
	trilhaSonora.loop();

	cenario = new Cenario(cenario, 4)
	personagem = new Personagem(matrizPersonagem, personagem, 0, 220, 270, 220, 270)
	inimigo = new Inimigo(matrizInimigo, inimigo, width - 104, 104, 104, 104, 104)
}

function draw() {
	cenario.exibe()
	cenario.move()

	personagem.exibe()
	personagem.gravidade()

	inimigo.exibe()
	inimigo.move()
	if (personagem.colisao(inimigo)) {
		noLoop()
	}
}
