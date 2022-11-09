//  factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

function factorialFor(numero){
let pivot=1;

for(let i=1;i<=numero;i++){
    pivot=pivot*i;   
}
return pivot
}
console.log(factorialFor(10));