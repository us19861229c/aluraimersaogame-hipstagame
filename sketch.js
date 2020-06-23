let cenario, cenarioBg, personagem, trilhaSonora;

function preload() {
	cenarioBg = loadImage('imagens/cenario/floresta.png');
	trilhaSonora = loadSound('sons/trilha_jogo.mp3');
	personagem = loadImage('imagens/personagem/correndo.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(40);
	trilhaSonora.loop();

	cenario = new Cenario(cenarioBg, 2);
	personagem = new Personagem(personagem);
}

function draw() {
	cenario.exibe();
	cenario.move();
	personagem.exibe();
}
