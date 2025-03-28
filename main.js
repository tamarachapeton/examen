const multiplicador  =  ( x ,  y )  =>  {  x  *  y  } ;

function  calcularMultiplicacion ( a ,  b , multiplicador ) { 
    let  resultado  =  multiplicador ( a ,  b ) ;

    consola . log ( `Resultado de la multiplicación: ${resultado} `) ;
}

calcularMultiplicacion ( 3 ,  7, ) ; 
// Resultado de la multiplicación: 21