class Animacao {
	constructor(matriz, sprite, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
		this.matriz = matriz
		this.sprite = sprite
		this.x = x
		this.variacaoY = variacaoY
		this.largura = largura
		this.altura = altura
		this.larguraSprite = larguraSprite
		this.alturaSprite = alturaSprite
		this.frameAtual = 0

		this.y = height - this.altura - this.variacaoY
	}

	exibe() {
		image(
				this.sprite, // Conjunto de posições do personagem
				this.x, this.y, // Posição do personagem no canvas
				this.largura, this.altura, // Tamanho do personagem no canvas
				this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
				this.larguraSprite, this.alturaSprite // Tamanho do "recorte" no sprite
			)
		this.anima()
	}

	anima() {
		this.frameAtual++

		if (this.frameAtual >= this.matriz.length - 1) {
			this.frameAtual = 0
		}
	}
}
