/*alert("Vamos a probar una calculadora!");

let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(
  prompt("Ingrese el numero por el que desea multiplicarlo")
);

for (numero1; numero1 <= 1000000000000000000000000000000; numero1++) {
  alert("Tu numero es: " + numero1 * numero2);
  console.log("Tu numero es: " + numero1 * numero2);
  break;
}
alert("Muchas gracias, hasta pronto!");
*/
alert("Menu semanal!");
console.log("Menu Semanal!");
let dia = parseFloat(prompt("Ingrese el dia para ver el menu"));
/*
switch (dia) {
  case "Lunes":
    console.log("Lunes de Pizzas ");
    break;
  case "Martes":
    console.log("Martes sin harinas");
    break;
  case "Miercoles":
    console.log("Miercoles Veggie");
    break;
  case "Jueves":
    console.log("Jueves de pastas: Ravioles o Sorrentinos");
    break;
  case "Viernes":
    console.log("Viernes de empanadas fritas");
    break;
  case "Sabado":
    console.log("Sabado de asado");
    break;
  case "Domingo":
    console.log("Domingo libre eleccion");
    break;
  
}*/


if (dia =="Lunes"){
    console.log("Lunes de Pizzas");}
    else if (dia == "Martes"){
        console.log("Martes sin harinas");}
    else if (dia == "Miercoles"){
        console.log("Miercoles Veggie");}
    else if (dia == "Jueves"){
        console.log ("Jueves de pastas : Ravioles o sorrentinos");}
    else if (dia == "Viernes"){
        console.log ("Viernes de empanadas fritas");}
    else if (dia == "Sabado"){
        console.log ("Sabado de asado");}
    else if (dia =="Domingo"){
        console.log ("Domingo libre eleccion");}
    else{
        console.log("Elije un dia por favor!")
                            }

