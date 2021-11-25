function calculadora(Primeiro_Numero, segundo_numero){
    return Primeiro_Numero * segundo_Numero;
    
}


let Primeiro_Numero = parseInt(  prompt( `Digite o Primeiro numero` ));
let segundo_Numero = parseInt( prompt( `Digite o segundo numero` ));
let Valor_final = calculadora( Primeiro_Numero, segundo_Numero );

alert( `Valor final ${Valor_final}` );

