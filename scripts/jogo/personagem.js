class Personagem extends Animacao {
	constructor(matriz, sprite, x, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, sprite, x, largura, altura, larguraSprite, alturaSprite)

		this.yInicial = height - this.altura
		this.y = this.yInicial

		this.velocidadeGravidade = 4
		this.velocidadePulo = 0
	}

	pula() {
		this.velocidadePulo = - 50
	}

	gravidade() {
		this.y += this.velocidadePulo
		this.velocidadePulo += this.velocidadeGravidade

		if (this.y > this.yInicial) {
			this.y = this.yInicial
		}
	}

	colisao(inimigo) {
		const precisao = 0.65
		const colisao = collideRectRect(
				this.x, this.y,
				this.largura * precisao, this.altura * precisao,
				inimigo.x, inimigo.y,
				inimigo.largura * precisao, inimigo.altura * precisao
			)

		return colisao
	}
}
