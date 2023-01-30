
//Operadores aritmeticos
//Son +, -, *, /, () y %
//El unico que merece atencion es % (se llama modulo creo), que devuelve EL RESTO de la division

console.log(3+5)
console.log(5%2)

//Los que comparan (no se si se llaman asi pero bue)
//<, <=, >, >=

/**
 Y hay 3 que son especiales:
 = 1 igual es asignacion de variable
 == 2 iguales comparan valores (7 es lo mismo que "7")
 === 3 iguales comparan tipo de dato y de valor (7 NO es lo mismo que "7")
 */
 console.log(7==7)
 console.log(7=="7")
 console.log(7==="7")
 console.log(0==false)
 console.log(0===false)

 //Operadores unarios (suman de a 1)
 //Se pueden poner los signos antes o despues de la variable

 let i=2

 console.log(i++) //aca no se suma porque esta antes la variable y es la primera vez que la defino. Puedo ponerla solita antes o poner los signos adelante (ojo que si pongo los signos primero y despues los pongo detras, suma 2 veces)
 console.log(i++)
 console.log(++i)//ves que la sumo 2 veces

/**
 Finalmente los operadores logicos
 ! - NOT: niega (vuelve falso lo verdadero y al reves)
 || - OR: cuando tenfo 2 o mas condiciones, con que se cumpla una, es verdaera
 && - AND: tienen que cumplirse las dos
 */

 console.log(!true)
 console.log(!false)
 console.log((9===9)||(9==="9"))
 console.log((9===9)&&(9==="9"))