function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(40)
	trilhaSonora.loop()

	jogo = new Jogo()
	telaInicial = new TelaInicial()
	jogo.prepara()

	cenas = {
		jogo,
		telaInicial
	}
	botao = new Botao('Iniciar', width / 2, height / 2)
}

function keyPressed() {
	jogo.tecla(key)
}

function draw() {
	cenas[cenaAtual].desenha()
}
