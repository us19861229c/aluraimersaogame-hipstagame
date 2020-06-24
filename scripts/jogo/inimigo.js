class Inimigo extends Animacao {
	constructor(matriz, sprite, x, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, sprite, x, largura, altura, larguraSprite, alturaSprite)

		this.velocidade = 8
	}

	move() {
		this.x = this.x - this.velocidade

		if (this.x < -this.largura) {
			this.x = width
		}
	}
}
