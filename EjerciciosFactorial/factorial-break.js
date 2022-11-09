//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
function factorialWhileIfBreak(numero){
        let pivot=1;
        let i=1;
        
        while(true){
            if(i<=numero){
            pivot=pivot*i;   
            i++;
            }else{
                break;
            }
        }
        return pivot
        }

console.log(factorialWhileIfBreak(10));