
 //break cuando llega a un punto, sale del ciclo (acordate por ej de switch, de la clase de condicionales)

 //continue llega al punto, lo omite, pero sigue

 const numeros = [1,2,3,4,5,6,7,8,9,0]

 for (let i=0; i<numeros.length; i++){
    if(i===5) //recordando que este 5 es la posicion, no el numero
    {
        break
    }
    console.log(numeros[i])
 }

 for (let i=0; i<numeros.length; i++){
    if(i===5) //recordando que este 5 es la posicion, no el numero (seria el 6 el omitido)
    {
        continue
    }
    console.log(numeros[i])
 }