
const numeros = [0,1,2]

//Sin desestructuracion
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres);

//Con desestructuracion
const [one,two,three] = numeros;
console.log(one,two,three)

const persona = {
    nombre: "tomi",
    apellido: "moya",
    edad: 24
}

let {nombre, apellido, edad} = persona;
console.log(nombre,edad,apellido);
console.log(edad,nombre,apellido);
console.log(nombre, apellido);

//Conclusion: no tengo bien en claro como se usaria esto, pero es asi