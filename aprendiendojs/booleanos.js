
//los booleanos son cosas que pueden ser verdaderas o falsas
//Hay cosas que tienden a verdaderas (truthys) y otras que tienden a falsas (falsys), esta la lista en mozilla developer network, pero basicamente son los truthys: true, corchetes, numeros (excepto 0) incluso negativos, infinito o cualquier cosa que tenga texto (incluso un espacio)
//Lo opuesto son falsys: no poner nada, 0, NaN, etc

let verdadero = true;
let falso = false;

//Otra forma de poner lo mismo:
let v = Boolean(true);
let f = Boolean(false);

//Entonces:
console.log(verdadero, falso)
console.log(v, f)
console.log(typeof verdadero, typeof falso) //vemos que son booleanos
console.log(Boolean(2))
console.log(Boolean(-3.4))
console.log(Boolean(0))
console.log(Boolean({}))
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean(NaN))