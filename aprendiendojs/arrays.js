
//Un arreglo es un conjunto de cosas

//Vamos a ver primero las formas de escribir un arreglo (cumplen todas la misma funcion)

const a = [1, true, "hola", 3.8, ["A", "B", "C", [1,2,3]]];

const b = []

const c = Array.of("X", "Y", "Z", 1, 4, 7)

const d = new Array("hola de nuevo", false, 4, 8)

//Y si quiero poner un arreglo lleno de la misma cosa muchas veces:
const e = Array(75).fill(false) //y va a poner 75 veces false si lo invoco

//Como vemos lo q tiene? invocandolos, y podemos siempre pedir q me tire un solo objeto de la lista poniendo su ubicacion (ACORDATE DE QUE EMPIEZAN CON 0)

console.log(a)
console.log(b)
console.log(a[1])
console.log(a[4][0])
console.log(a[4][3][1])
console.log(c)
console.log(d[0])
console.log(e)

//Y tienen tambien algunas propiedades, x ej length que cuenta los objetos:
console.log(a.length)
console.log(b.length)

//Y métodos, x ej:

const colores = ["Rojo", "Azul", "Verde"];

colores.push("Negro"); //Agrega uno al final
console.log(colores);

colores.pop(); //Saca el ultimo
console.log(colores);

colores.forEach(function (el,index){
    console.log(`color ${el}, es el numero ${index}`)
})
//el primer elemento (el, elemento o como quieras decirle) arma como listita y el segundo (index, i o como prefieras) les pone su numero. El tipo en la explicacion lo armo como una ul de html, ni idea por qué:

colores.forEach(function (el,index){
    console.log(`<li id=${index}> ${index} </li>`)
})