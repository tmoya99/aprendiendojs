
//formas de poner numeros

let a = 2;
let b = new Number(3);
let c = 7.19;
let d = "5.6";

console.log(a,b)
console.log(a+b)
console.log(a+c) //da un minimo error de decimales, pero lo podemos fijar de la siguiente manera:
console.log((a+c).toFixed(2))
console.log(parseInt(c)) //muestra la parte entera
console.log(parseFloat(c))
console.log(d)
console.log(c+d) //fijate que los concatena porque d no es un numero
console.log(c+parseInt(d)) //suma lo entero nomas
console.log(c+parseFloat(d)) //suma todo

//esta es una forma de hacer que dependa de un constructor (ni idea q es eso, despues veremos)

console.log(c+Number.parseFloat(d))
console.log(c+Number.parseInt(d))
