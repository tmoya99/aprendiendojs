
//REST: se pone con ... antes del ultimo numero y es para ponerle muchas variables a una funcion, entiendo yo

function sumar(a, b, ...c){
    let resultado = a + b

c.forEach(function (n){
    resultado += n
})
return resultado
}

console.log(sumar(1,2))
console.log(sumar(1,2,5))
console.log(sumar(1,2,5,6))
console.log(sumar(1,3,6,7))
console.log(sumar(12,4,5,6,7,9,8,0,7,5))

//Operador spread: se escribe tambien con ... y sirve para agregar cosas: por ej si quiero fusionar dos arrays

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];

const arr3 = [arr1, arr2];
console.log(arr3);
//en este caso me arma 1 array que tiene 2 internos y a su vez 5 posiciones cada uno

//Pero con el spread:

const arr4 = [...arr1, ...arr2];
console.log(arr4)