
//Cadenas de texto

let nombre = "tomas";
let apellido = "moya";
let saludo = new String("Hola Mundo!");
let txt = "   Hola mundo como estan? aguante Boca, el unico grande, el que nunca descendio, el que mas copas gano   "

console.log(nombre, apellido, saludo);
console.log (nombre.length,
    apellido.length,
    saludo.length,
    txt.length,
    apellido.toLocaleUpperCase(),
    nombre.toUpperCase());
    console.log(txt.includes("Boca"),
    txt,
    txt.trim()); //le saca los espacios de antes y despues
console.log(
    txt.split(","),
    ) //convierte a la cadena en arreglos, es decir que separa a los elementos segun lo q yo quiera (por comas, palabras, espacios, etc) --> en este caso, por comas


//Template strings:

let saludo_completo = saludo + " mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo_completo)

//una forma mas facil:
let saludo2 = `${saludo} mi nombre es ${nombre} ${apellido}.`
console.log(saludo2);

//Y finalmente si quiero string de varias lineas (en el console se van a mostrar asi tambien, si pongo con las comillas normales tengo que poner en una sola linea todo):

let muchos = `asi empiezo
sigo aca
y puedo seguir con esta
tilde invertida`;
console.log(muchos);

//Otra opcion (pero se muestra todo junto):

let muchos2 = "asi empiezo";
muchos2 += "esto es un quilombo"
muchos2 += "pero ves"
muchos2+="que igual funciona, con espacios o sin";
console.log(muchos2);
