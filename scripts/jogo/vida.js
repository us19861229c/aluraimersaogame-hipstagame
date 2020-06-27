class Vida {
	constructor(maximo, inicial) {
		this.maximo = maximo
		this.inicial = inicial
		this.vida = this.inicial

		this.largura = 30
		this.altura = 30
		this.xInicial = 30
		this.y = 20
	}

	desenha() {
		for (let i = 0; i < this.vida; i++) {
			const margem = i * 10
			const posicao = this.xInicial * (i + 1)
			image(coracao, posicao + margem, this.y, this.largura, this.altura)
		}
	}

	ganha() {
		if (this.vida < this.maximo) {
			this.vida++
		}
	}

	perde() {
		this.vida--
	}
}
