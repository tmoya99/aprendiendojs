
//Para empezar, las cadenas son objetos tambien
let a = new String("Hola");
console.log(a)

//Estas dos de abajo son formas de definir un objeto (ademas de const podemos usar let)

const b = {}
console.log(b)

const c = new Object () //esta no se usa tanto
console.log(c)

//Y podemos poner muchas cosas dentro de un objeto: desde strings hasta booleanos, arrays, funciones y otros objetos

const tomi = { //cada una de las palabras en celeste se llaman ATRIBUTOS de un objeto, y las funciones se llaman METODOS
 nombre: "Tomi",
 apellido: "Moya",
 edad: 24,
 pasatiempos: ["Caminar", "Pescar", "Jugar al futbol"],
 soltero: true,
 contacto: {
    email: "fdasmodas@gmail.com",
    telefono: "38749383242",
    linkedin: "tomi"
 },
 saludar: function(){
    console.log("Hola")
 },
 decirMiNombre: function(){
    //THIS se usa para hacer referencia al mismo objeto del que hablamos
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi email es ${this.contacto.email}. Saludos.`)
 }
}

console.log(tomi);
// Y podemos hacer que nos muestre solo un atributo de nuestro objeto: hay dos formas, con corchetes o con puntos (Esta es la que se usa)
console.log(tomi["nombre"])
console.log(tomi.edad)
console.log(tomi.contacto.telefono)
console.log(tomi.contacto.email)
//y las funciones no hace falta ponerle console.log
tomi.saludar();
tomi.decirMiNombre();

//Y finalmente hay algunas propiedades de los objetos, como por ej:

console.log(Object.keys(tomi)); //te cuenta la cantidad
console.log(Object.values(tomi)); //te tira los valores de cada partecita
//Y la de abajo te tira si en ese objeto tenes la propiedad o no
console.log(tomi.hasOwnProperty("nombre"));
console.log(tomi.hasOwnProperty("nacimiento"));




