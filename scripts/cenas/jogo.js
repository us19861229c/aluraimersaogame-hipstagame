class Jogo {
	constructor() {
		this.indice = 0
		this.mapa = saveGame.mapa
	}

	prepara() {
		cenario = new Cenario(cenario, 4)
		vida = new Vida(saveGame.configs.vidaMaxima, saveGame.configs.vidaInicial)
		pontuacao = new Pontuacao()
		personagem = new Personagem(matrizPersonagem, personagem, 0, 30, 220, 270, 220, 270)
		viloes.push(new Inimigo(matrizInimigo, inimigo, width - 104, 30, 104, 104, 104, 104, 10))
		viloes.push(new Inimigo(matrizTroll, troll, width, -10, 400, 400, 400, 400, 10))
		viloes.push(new Inimigo(matrizAzaza, azaza, width - 200, 500, 200, 150, 200, 150, 8))
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

		const linhaAtual = this.mapa[this.indice]
		const vilao = viloes[linhaAtual.viloes]
		const vilaoVisivel = vilao.x < - vilao.largura
		vilao.velocidade = linhaAtual.velocidade

		if (vilaoVisivel) {
			this.indice++
			vilao.reaparece()
			if (this.indice > this.mapa.length - 1) {
				this.indice = 0
			}
		}

		vilao.exibe()
		vilao.move()
		if (personagem.colisao(vilao)) {
			vida.perde()
			personagem.ficaInvencivel()

			if (vida.vida === 0) {
				image(gameOver, width / 2 - 206, height / 2 - 39)
				noLoop()
			}
		}

		vida.desenha()
	}
}
