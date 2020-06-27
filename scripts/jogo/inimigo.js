class Inimigo extends Animacao {
	constructor(matriz, sprite, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
		super(matriz, sprite, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

		this.velocidade = velocidade
		this.x = width
	}

	move() {
		this.x = this.x - this.velocidade
	}

	reaparece() {
		this.x = width
	}
}
