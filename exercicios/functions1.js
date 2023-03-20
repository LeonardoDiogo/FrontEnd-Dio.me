function escrevaMeuNome(nome) {
    return "ola " + nome;
}

escrevaMeuNome("leonardo");

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome("leonardo ") + 'voce é de maior')
    } else {
        console.log(escrevaMeuNome("leonardo") + " voce é menor de idade")
    }
}

verificarIdade(8)