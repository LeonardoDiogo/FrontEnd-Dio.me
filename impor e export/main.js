const { gets, print } = require('./aula');

const quantidadeDeAlunos = [];
let maiorValorEncontrado = 0
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numerosSorteado;
    }
}
print(maiorValor)