class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const antonio = new Pessoa('antonio', 55)
const Leonardo = new Pessoa('Leonardo', 22)

Leonardo.descrever();
antonio.descrever();

console.log(Leonardo);
