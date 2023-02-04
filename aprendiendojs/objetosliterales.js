
//Es una nueva forma de escribir atributos y metodos

//Si antes queriamos armar un objeto con propiedades del mismo valor que una variable haciamos asi:

let nombre = "tomi",
    edad = 34;

const persona = {
    nombre:nombre,
    edad:edad,
    frase: function(){
        console.log("aguante boca")
    }
}

console.log(persona);
persona.frase();

//Ahora no hace falta poner todo dos veces

const pers = {
    nombre,
    edad,
    apellido: "moya",
    frase2(){
        console.log("vamos bokita carajo")
    }
}

console.log(pers);
pers.frase2()