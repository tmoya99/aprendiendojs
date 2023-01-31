
//Primero dos ciclos que cada vez se usan menos, pero hay que conocer

let edad = 7

while (edad < 10) {
    console.log("while " + edad);
    edad++;
}


do{
    console.log("do " + edad);
    edad++;
} while(edad < 10)

//La DIFERENCIA es que el do primero hace una vez y despues evalua, el while evalua antes de ver si muestra el resultado o no. Por eso el do muestra el 10 (que es el que le sigue a edad despues de haber hecho while, si empezara en otro numero no lo mostraria).

//Ahora el mas usado hoy:
// for (inicializacion de la variable; condicion; decremento o incremento) {sentencia que va a ejecutar}

for (let index = 0; index < 10; index++) {
    console.log("for "+index);
}

//Esto se puede usar para trabajar con arrays, por ejemplo mostrando las posiciones:

let numeros = [10, 20, 30, 40, 50, 55, 60, 70, 75]

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

/** tmb puedo poner un numero (en el lugar de arra.length) para que sea hasta una posicion en particular (acordate de q empiezan con 0) */

for (let index2 = 0; index2 < 5; index2++) {
    console.log(numeros[index2]);
}

/**Finalmente dos variables del for:
    For in: permite recorrer las propiedades de un objeto primitivo (NO ME DEJA NOMBRAR LAS PROPIEDADES CON PUNTOS, SINO CON CORCHETES)
    For of: permite recorrer los elementos de cualquier objeto iterable (arrays, cadenas de texto, etc)
*/

const contacto = {
    nombre: "tomi",
    apellido: "moya",
    edad: 24,
    equipo: "Boca"
}

for (const propiedad in contacto) {
    console.log(`Key: ${propiedad}, value: ${contacto[propiedad]}`)
}

for (const elemento of numeros) {
    console.log(elemento)
}

let cadena = "Hola Mundo"

for (const caracter of cadena) {
   console.log(caracter) 
}
