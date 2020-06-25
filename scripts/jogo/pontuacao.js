class Pontuacao {
	constructor() {
		this.pontos = 0
	}

	exibe() {
		fill('#FFF')
		textAlign(RIGHT)
		textSize(50)
		text(parseInt(this.pontos), width - 40, 60)
	}

	soma() {
		this.pontos = this.pontos + 0.2
	}
}
