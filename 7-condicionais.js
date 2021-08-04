const listaDeCidades = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeCompredor = 15;
const estaAcompanhado = false
let temPassagemComprada = true
console.log("Destinos possiveis:");
console.log(listaDeCidades);

if (idadeCompredor >= 18 || estaAcompanhado == true){
    listaDeCidades.splice(1, 1);
}else{
    console.log("É proibido a venda de passagem para menores");
    temPassagemComprada = false
}

console.log("Embarque: \n");
if (idadeCompredor < 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
};

console.log(listaDeCidades)