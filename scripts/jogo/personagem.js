class Personagem extends Animacao {
	constructor(matriz, sprite, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, sprite, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

		this.yInicial = height - this.altura - this.variacaoY
		this.y = this.yInicial

		this.velocidadeGravidade = 6
		this.velocidadePulo = 0
		this.alturaPulo = -50
		this.pulos = 0
	}

	pula() {
		if (this.pulos < 3) {
			this.velocidadePulo = this.alturaPulo
			this.pulos++
		}
	}

	gravidade() {
		this.y += this.velocidadePulo
		this.velocidadePulo += this.velocidadeGravidade

		if (this.y > this.yInicial) {
			this.y = this.yInicial
			this.pulos = 0
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
