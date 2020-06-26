class Botao {
	constructor(texto, x, y) {
		this.texto = texto
		this.x = x
		this.y = y
		this.botao = createButton(this.texto)
		this.botao.addClass('botao-tela-inicial')
		this.botao.mousePressed(() => this._mudaCena())
	}

	desenha(){
		this.botao.position(this.x, this.y)
		this.botao.center('horizontal')
	}

	_mudaCena() {
		this.botao.remove()
		cenaAtual = 'jogo'
	}
}
