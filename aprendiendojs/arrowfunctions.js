
/**
 Primero nos acordamos de las funciones expresadas:
 Tecnicamente, una funcion expresada es CUANDO A UNA VARIABLE LE ASIGNO EL VALOR DE UNA FUNCION ANONIMA y solo puedo invocarlas despues de declararlas.
  */
 
 //Ejemplo de funcion EXPRESADA:

 const funcionExpresada = function(){
    console.log("Hola, aguante Boca")
 }

 //Y ahora la invoco (mas abajo obviamente):

 funcionExpresada();

 //Pero con arrow function es mucho mas facil, mira:

 const funcionConArrow = () => console.log("aguante Boca de vuelta"); //fijate que no hace falta ni ponerle corchetes EXCEPTO que tenga varias lineas de codigo
 funcionConArrow()

//Con varias lineas de codigo:
const funcionDeVariasLineas = () =>{
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
    console.log("Cuatro")
}
funcionDeVariasLineas();

 //Y si le ponemos un parámetro a la funcion, no hace falta ni poner esos parentesis (solo si tiene uno)

 const saludar = nombre => console.log(`Hola ${nombre}`);
 saludar("Tomi");

 //Y esa flecha es un "return" implicito. Otro ejemplo:

 const sumar = function(a,b){
    return a + b;
 }
 console.log(sumar(4,2)); //cuando hay return necesito un console.log

 //Y con arrow quedaria
const sumar2 = (a,b) => a + b;
console.log (sumar2(3,5))

//forEach:
const colores = ["Rojo", "Azul", "Amarillo", "Verde"];

colores.forEach(function (el,index){
    console.log(`color ${el}, es el numero ${index}`)
});
//Pero con arrow function:
const colores2 = ["Negro", "Blanco", "Rosa", "Violeta"];

colores2.forEach((el,index) => console.log(`color ${el}, es el numero ${index}`));

//Y finalmente algo muy importante de las arrow functions para que veas que no siempre son utiles

/**
 Cuando ponemos THIS le estamos pidiendo a la funcion que nos muestre el contexto en el que se encuentra.
 Si tenemos una funcion normal, declarada, solita, nos va a poner todo el contexto dentro del DOM o algo asi.
 Pero si la ponemos dentro de un objeto, el contexto va a ser siempre ese objeto (excepto que ponga una arrow function, que reconoce a su contexto como el general)
 */

 //ejemplos con funciones normales primero:

 function ElTipal(){
    console.log(this)
 };
 ElTipal();

 const laVina = {
    calle: "La Viña",
    altura: 366,
    casa(){
        console.log(this)
    }
 }
 laVina.casa()

 //Pero con arrowfunction:
 const laVina2 = {
    calle: "La Viña",
    altura: 366,
    casa:() => {console.log(this)}
    }
 laVina2.casa()

