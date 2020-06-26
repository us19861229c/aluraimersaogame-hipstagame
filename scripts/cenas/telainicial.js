class TelaInicial {
	constructor() {}

	desenha() {
		this._bgInicial()
		this._textoInicial()
		this._botao()
	}

	_bgInicial() {
		image(bgInicial, 0, 0, width, height)
	}

	_textoInicial() {
		textFont(fonteInicial)
		textSize(50)
		textAlign(CENTER)
		text('as aventuras de', width / 2, 200)
		textSize(100)
		text(' HIPSTA', width / 2, 280)
	}

	_botao() {
		botao.desenha()
	}
}
