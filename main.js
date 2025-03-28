const multiplicador  =  ( x ,  y )  =>  { return  x  *  y  } ;

function  calcularMultiplicacion ( a ,  b , multiplicador ) { 
    let  resultado  =  multiplicador ( a ,  b ) ;

    console . log ( `Resultado de la multiplicación: ${resultado} `) ;
}

calcularMultiplicacion ( 3 ,  7, multiplicador) ; 
// Resultado de la multiplicación: 21