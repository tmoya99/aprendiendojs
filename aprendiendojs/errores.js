
//TryCatch: se usa para captar errores en todo un codigo (es el equivalente a lo rojito que te muestra la consola de chrome por ej)

try {
 console.log("Acá debería ir todo el código");
 noExiste;
 console.log("Fijate que este no va a aparecer porque te muestra el error antes")   
} catch (error) {
    console.log("Este mensaje se va a mostrar cuando haya un error en el try");
    //y para que me muestre el error:
    console.log(error)
} finally {
    console.log("El finally es opcional, es un mensaje que se va a mostrar siempre, independientemente de si hay errores o no")
}

//Para lo que sí es útil es para mandar un mje de error personalizado, por ejemplo:

try {
    let numero = "hola";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número");
    } //aca hay dos conceptos: isNaN (para ver si algo no es un numero) y el throw
    console.log(numero * 3)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}

try {
    let numero = 10;
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número");
    } //aca hay dos conceptos: isNaN (para ver si algo no es un numero) y el throw
    console.log(numero * 3)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}