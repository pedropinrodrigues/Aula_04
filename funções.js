// function saudar() {
//     console.log("Olá, tudo bem?");
//   }

//   saudar();

// function saudar(nome) {
//     console.log("Olá, " + nome + "! Tudo bem?");
//   }
  
//   saudar("Maria");

// let frutas = ["Maçã", "Banana", "Laranja"];

//   for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
//   }

// function imprimirFruta(fruta) {
//   console.log(fruta);
// }

// let frutas = ["Maçã", "Banana", "Laranja"];

// frutas.forEach(imprimirFruta);

// const frutas = ['maça', 'banana','laranja','manga'];

// function exibirfrutas(){
//     console.log(frutas);
// }

// frutas.forEach(exibirfrutas);

// var fruta = [maca, banana, laranja];

var precoMaca = 2, precoBanana = 3, precoLaranja = 1.5;

// var quantidadeMaca = 5, quantidadeBanana = 3, quantidadeLaranja = 1;

function calcularTotalCompra(quantidadeBanana,quantidadeLaranja,quantidadeMaca){
    precototal = precoBanana*quantidadeBanana + precoLaranja*quantidadeLaranja + precoMaca*quantidadeMaca;
    return precototal;
}

console.log(calcularTotalCompra(2,4,5));