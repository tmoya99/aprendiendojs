
function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Invocacion de funcion: lo que hay q hacer para que la muestre
estoEsUnaFuncion()

//Para que devuelvan un valor, tengo que antes ponerle un let para que me muestre
//Y muestra hasta el primer return (si pongo un return, no importa lo que tenga abajo no lo va a mostrar)

function unaFuncionQueDevuelveValor(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
    return "La funcion puede retornar una cadena de texto x ej"
}

let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion)

//Ahora le vamos a asignar valores:

function saludar(nombre, edad){
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años. Encantado de conocerte.`)
}

saludar("Tomás", 24)

//Y finalmente tenemos las funciones expresadas (todas las anteriores se llaman DECLARADAS)
/**
 La diferencia es:
 las declaradas las puedo invocar incluso antes de declararlas, no hay drama
 las expresadas solo puedo invocarlas despues de declararlas.
 Tecnicamente, una funcion expresada es CUANDO A UNA VARIABLE LE ASIGNO EL VALOR DE UNA FUNCION ANONIMA
 */

 //Ejemplo de funcion EXPRESADA:

 const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, por eso tengo que invocarla sí o sí mas abajo")
 }

 //Y ahora la invoco (mas abajo obviamente):

 funcionExpresada();
 