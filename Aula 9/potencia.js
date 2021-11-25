function calculadora( base, expoente ){
    return Math.pow( base, expoente );

}

let base = parseInt(  prompt( `Digite o Primeiro numero` ));
let expoente = parseInt(  prompt( `Digite o expoente` ));
let Valor_final = calculadora( base, expoente );

alert( `Valor final ${Valor_final}` );