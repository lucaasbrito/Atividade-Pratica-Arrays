//exercicio 1

let nomes = ["Ana", "Carlos", "Fernanda", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

//exercico 2

let numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let numero of numeros) {
  soma += numero;
}

console.log("A soma dos números é:", soma);

// exercicio 3

let frutas = ["maçã", "banana", "laranja"];

frutas.push("manga");
frutas.pop();
frutas.unshift("abacaxi");
frutas.shift();

console.log(frutas);
