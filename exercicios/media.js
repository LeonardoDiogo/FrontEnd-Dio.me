const nota1 = 10;
const nota2 = 5;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5) {
    console.log("Reprovado");
} else if (media => 5 && media <= 7) {
    console.log("recuperaçao")
} else {
    console.log("Passou")
}