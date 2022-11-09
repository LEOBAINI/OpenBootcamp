//factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

function factorialWhile(numero){
    let pivot=1;
    let i=1;
    
    while(i<=numero){
        pivot=pivot*i;   
        i++;
    }
    return pivot
    }

    console.log(factorialWhile(10));