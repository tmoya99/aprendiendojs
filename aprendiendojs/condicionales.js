
let tomi = 3

if(tomi <=1){
    console.log("hola")
}else{
    console.log("chau")
}

/**
 Por ejemplo que quiero que diga:
 Buenos dias: de 6 a 12
 Buenas tardes: de 1 a 7
 Buenas noches: de 8 a 12 pm
 Dejame dormir culiao: de 1 a 5 am
 */

 let hora=25

 if(hora < 6){
    console.log("dejame dormir culiao")
 }else if(hora >= 6 && hora <=12){
    console.log("buenos dias")
 }else if(hora >12 && hora <=19){
    console.log("buenas tardes")
 }else if(hora >19 && hora <=24){
    console.log("buenas noches")
 }else{
    console.log("ese horario no existe") 
 }

 //ATENCION
 //Esta es la forma fácil de poner lo mismo:
 //Condicion ? verdadero : falso

 let edad = 15

 let sosMayor = (edad >=18) ? "sos mayor de edad" : "sos menor de edad"

 console.log(sosMayor)

 //Y finalmente una forma facil de hacer con muchas situaciones

 let dia = 4

 switch (dia) {
    case 0:
        console.log("Domingo")
        break;
     case 1:
        console.log("Lunes")
        break;
     case 2:
        console.log("Martes")
        break;
     case 3:
        console.log("Miércoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sábado")
        break;
    default: console.log("El día no existe")
        break;
 }
