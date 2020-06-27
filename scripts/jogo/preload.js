function preload() {
	bgInicial = loadImage('imagens/assets/telaInicial.png')
	fonteInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
	coracao = loadImage('imagens/assets/coracao.png')
	cenario = loadImage('imagens/cenario/floresta.png')
	gameOver = loadImage('imagens/assets/game-over.png')
	trilhaSonora = loadSound('sons/trilha_jogo.mp3')
	somPulo = loadSound('sons/somPulo.mp3')
	personagem = loadImage('imagens/personagem/correndo.png')
	inimigo = loadImage('imagens/inimigos/gotinha.png')
	troll = loadImage('imagens/inimigos/troll.png')
	azaza = loadImage('imagens/inimigos/gotinha-voadora.png')
	saveGame = loadJSON('scripts/save/savegame.json')
}
