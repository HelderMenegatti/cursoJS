const listaDeCidades = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
);

const idadeCompredor = 15;
const estaAcompanhado = false
const destino = "Salvador"
let temPassagemComprada = true

console.log("\nDestinos possiveis:");
console.log(listaDeCidades);

const podeComprar = idadeCompredor >= 18 || estaAcompanhado == true; 

let contador = 0;
let destinoExiste = false
while(contador < 3){
    if (listaDeCidades[contador] == destino){
        console.log("Destino ", destino, "exite");
        destinoExiste = true
        break
    }
    contador += 1;
} 


for(let i = 0; i < 3; i++){
    if(listaDeCidades[i] == destino){
        destinoExiste = true;
        console.log("O destino existe")
    }    
}
