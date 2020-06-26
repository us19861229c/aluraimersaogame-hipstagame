class Jogo {
	constructor() {
		this.inimigoAtual = 0
	}

	prepara() {
		cenario = new Cenario(cenario, 4)
		pontuacao = new Pontuacao()
		personagem = new Personagem(matrizPersonagem, personagem, 0, 30, 220, 270, 220, 270)
		viloes.push(new Inimigo(matrizInimigo, inimigo, width - 104, 30, 104, 104, 104, 104, 10, 100))
		viloes.push(new Inimigo(matrizTroll, troll, width, -10, 400, 400, 400, 400, 10, 500))
		viloes.push(new Inimigo(matrizAzaza, azaza, width - 200, 500, 200, 150, 200, 150, 8, 300))
	}

	tecla(key) {
		if (key == 'ArrowUp') {
			personagem.pula()
			somPulo.play()
		}
	}

	desenha() {
		cenario.exibe()
		cenario.move()

		pontuacao.exibe()
		pontuacao.soma()

		personagem.exibe()
		personagem.gravidade()

		const vilao = viloes[this.inimigoAtual]
		const vilaoVisivel = vilao.x < - vilao.largura

		if (vilaoVisivel) {
			this.inimigoAtual++
			if (this.inimigoAtual > 2) {
				this.inimigoAtual = 0
			}
			vilao.velocidade = parseInt(random(10, 30))
		}

		vilao.exibe()
		vilao.move()
		if (personagem.colisao(vilao)) {
			image(gameOver, width / 2 - 206, height / 2 - 39)
			noLoop()
		}
	}
}
