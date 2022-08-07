let menu = "";
let total = 0;

function comprar() {
  while (menu != '4'){
    menu = prompt(
      "Que menu queres comprar? Ingresa tu eleccion. \n 1.Diario $700 \n 2.Semanal $3000 \n 3.Mensual $11000 \n 4.Finalizar compra");

    switch(menu) {
      case "1":
        total += 700;
        alert(`Su compra es: ${total}`);
        console.log(`Su compra es: ${total}`);
        break;
      case "2":
        total += 3000;
        alert(`Su compra es: ${total}`);
        console.log(`Su compra es: ${total}`);
        break;
      case "3":
        total += 11000;
        alert(`Su compra es: ${total}`);
        console.log(`Su compra es: ${total}`);
        break;
      case "4":
        alert(`Gracias por tu compra. Tu compra total es de: $${total}`);
        console.log(`Gracias por tu compra. Tu compra total es de: $${total}`);
        break;
    }
  }
}

comprar();
